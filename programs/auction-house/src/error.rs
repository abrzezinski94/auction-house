use anchor_lang::prelude::*;

#[error_code]
pub enum CustomErrors {
    #[msg("Function not yet implemented")]
    NotImplemented, // 6000
    #[msg("Invalid account data on AOB market state")]
    InvalidAobMarketState, // 6001
    #[msg("bids and asks order periods should end in the future")]
    InvalidEndTimes,
    #[msg("bids and asks periods should start before they end")]
    InvalidStartTimes,
    #[msg("Invalid decryption end time, needs to finish after bids / asks end")]
    InvalidDecryptionEndTime,
    #[msg("Min base order size should be greater than zero")]
    InvalidMinBaseOrderSize,
    #[msg("Tick size should be greater than zero")]
    InvalidTickSize,
    #[msg("No ask orders")]
    NoAskOrders,
    #[msg("No bid orders")]
    NoBidOrders,
    #[msg("No orders in the orderbook")]
    NoOrdersInOrderbook,
    #[msg("Clearing price not found yet")]
    NoClearingPriceYet,
    #[msg("AOB Event queue is full")]
    AobEventQueueFull,
    #[msg("No events processed")]
    NoEventsProcessed,
    #[msg("Open orders pubkey not found in remaining accounts")]
    MissingOpenOrdersPubkeyInRemainingAccounts,
    #[msg("User's side doesn't make event side, definitely shouldn't ever happen")]
    UserSideDiffFromEventSide,
    #[msg("Order id not found in list of orders")]
    OrderIdNotFound,
    #[msg("Time for placing bid or ask orders has finished")]
    BidOrAskOrdersAreFinished,
    #[msg("Max orders value is either too high or too low, min 1 max 8")]
    MaxOrdersValueIsInvalid,
    #[msg("Can only place encrypted orders on this side of the book")]
    EncryptedOrdersOnlyOnThisSide,
    #[msg("Can only place regular (unencrypted) orders on this side of the book")]
    UnencryptedOrdersOnlyOnThisSide,
    #[msg("Limit price must be a multiple of the assigned tick size")]
    LimitPriceNotAMultipleOfTickSize,
    #[msg("Max base order size is below the minimum")]
    OrderBelowMinBaseOrderSize,
    #[msg("Open orders account already has the maximum amount of orders")]
    TooManyOrders,
    #[msg("The public key stored in this open orders account doesn't match the public key passed in")]
    EncryptionPubkeysDoNotMatch,
    #[msg("An identical encrypted order found in the open orders account")]
    IdenticalEncryptedOrderFound,
}
