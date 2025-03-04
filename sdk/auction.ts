import * as anchor from "@project-serum/anchor";
import { BN } from "@project-serum/anchor";
import { PublicKey, Keypair } from "@solana/web3.js";
import { createMint, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import nacl from "tweetnacl";
import { AuctionHouse } from "../target/types/auction_house";
import * as genAccs from "../generated/accounts";

export interface Auction {
  // Accounts
  auctioneer: PublicKey;
  auction: PublicKey;
  eventQueue: PublicKey;
  eventQueueKeypair?: Keypair;
  bids: PublicKey;
  bidsKeypair?: Keypair;
  asks: PublicKey;
  asksKeypair?: Keypair;
  quoteMint: PublicKey;
  baseMint: PublicKey;
  quoteVault: PublicKey;
  baseVault: PublicKey;
  rent: PublicKey;
  tokenProgram: PublicKey;
  systemProgram: PublicKey;
  // Args
  auctionId: Uint8Array;
  startOrderPhase: BN;
  endOrderPhase: BN;
  endDecryptionPhase: BN;
  areAsksEncrypted: boolean;
  areBidsEncrypted: boolean;
  minBaseOrderSize: BN;
  tickSize: BN; // FP32
  naclPubkey: Buffer;
  naclKeypair?: nacl.BoxKeyPair;
}

export async function initAuctionObj(
  program: anchor.Program<AuctionHouse>,
  provider: anchor.Provider,
  wallet: anchor.Wallet,
  auctionId: Uint8Array,
  areAsksEncrypted: boolean,
  areBidsEncrypted: boolean,
  minBaseOrderSize: BN,
  tickSize: BN,
  orderPhaseLength: number,
  decryptionPhaseLength: number
): Promise<Auction> {
  let baseMint = await createMint(
    provider.connection,
    wallet.payer,
    wallet.publicKey,
    null,
    6
  );
  let quoteMint = await createMint(
    provider.connection,
    wallet.payer,
    wallet.publicKey,
    null,
    6
  );
  let tx = new anchor.web3.Transaction();
  let nowBn = new anchor.BN(Date.now() / 1000);
  // let auctionIdArray = Array.from(auctionId);
  let [auction] = await anchor.web3.PublicKey.findProgramAddress(
    // TODO toBuffer might not be LE (lower endian) by default
    [Buffer.from("auction"), auctionId, wallet.publicKey.toBuffer()],
    program.programId
  );
  let [quoteVault] = await anchor.web3.PublicKey.findProgramAddress(
    // TODO toBuffer might not be LE (lower endian) by default
    [Buffer.from("quote_vault"), auctionId, wallet.publicKey.toBuffer()],
    program.programId
  );
  let [baseVault] = await anchor.web3.PublicKey.findProgramAddress(
    // TODO toBuffer might not be LE (lower endian) by default
    [Buffer.from("base_vault"), auctionId, wallet.publicKey.toBuffer()],
    program.programId
  );
  let eventQueueKeypair = new anchor.web3.Keypair();
  let eventQueue = eventQueueKeypair.publicKey;
  let bidsKeypair = new anchor.web3.Keypair();
  let bids = bidsKeypair.publicKey;
  let asksKeypair = new anchor.web3.Keypair();
  let asks = asksKeypair.publicKey;
  let naclKeypair = nacl.box.keyPair();
  let naclPubkey = Buffer.from(naclKeypair.publicKey);
  return {
    auctioneer: wallet.publicKey,
    auction,
    eventQueue,
    eventQueueKeypair,
    bids,
    bidsKeypair,
    asks,
    asksKeypair,
    quoteMint,
    baseMint,
    quoteVault,
    baseVault,
    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    tokenProgram: TOKEN_PROGRAM_ID,
    systemProgram: anchor.web3.SystemProgram.programId,
    // Args
    auctionId,
    startOrderPhase: nowBn,
    endOrderPhase: nowBn.add(new anchor.BN(orderPhaseLength)),
    endDecryptionPhase: nowBn.add(
      new anchor.BN(orderPhaseLength + decryptionPhaseLength)
    ),
    areAsksEncrypted,
    areBidsEncrypted,
    minBaseOrderSize,
    tickSize,
    naclKeypair,
    naclPubkey,
  };
}

export async function fetchAuctionObj(
  program: anchor.Program<AuctionHouse>,
  provider: anchor.Provider,
  authority: PublicKey,
  auctionId: Uint8Array,
  naclKeypair?: nacl.BoxKeyPair
): Promise<Auction> {
  let [auction] = await anchor.web3.PublicKey.findProgramAddress(
    [Buffer.from("auction"), auctionId, authority.toBuffer()],
    program.programId
  );
  let fetchedAuction = await genAccs.Auction.fetch(
    provider.connection,
    auction
  );
  return {
    ...fetchedAuction,
    auctioneer: authority,
    auction,
    rent: anchor.web3.SYSVAR_RENT_PUBKEY,
    tokenProgram: TOKEN_PROGRAM_ID,
    systemProgram: anchor.web3.SystemProgram.programId,
    naclKeypair,
  };
}
