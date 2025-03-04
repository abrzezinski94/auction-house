export type AuctionHouse = {
  "version": "0.1.0",
  "name": "auction_house",
  "instructions": [
    {
      "name": "initAuction",
      "accounts": [
        {
          "name": "auctioneer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitAuctionArgs"
          }
        }
      ]
    },
    {
      "name": "initOpenOrders",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": "Side"
          }
        },
        {
          "name": "maxOrders",
          "type": "u8"
        }
      ]
    },
    {
      "name": "newOrder",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limitPrice",
          "type": "u64"
        },
        {
          "name": "maxBaseQty",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelOrder",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "orderId",
          "type": "u128"
        }
      ]
    },
    {
      "name": "newEncryptedOrder",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenQty",
          "type": "u64"
        },
        {
          "name": "naclPubkey",
          "type": "bytes"
        },
        {
          "name": "nonce",
          "type": "bytes"
        },
        {
          "name": "cipherText",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "cancelEncryptedOrder",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "orderIdx",
          "type": "u8"
        }
      ]
    },
    {
      "name": "decryptOrder",
      "accounts": [
        {
          "name": "auctioneer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sharedKey",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "calculateClearingPrice",
      "accounts": [
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "matchOrders",
      "accounts": [
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "consumeEvents",
      "accounts": [
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        },
        {
          "name": "allowNoOp",
          "type": "bool"
        }
      ]
    },
    {
      "name": "settleAndCloseOpenOrders",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeAobAccounts",
      "accounts": [
        {
          "name": "auctioneer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "auction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "AobBumps"
            }
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "auctionId",
            "type": {
              "array": [
                "u8",
                10
              ]
            }
          },
          {
            "name": "startOrderPhase",
            "type": "i64"
          },
          {
            "name": "endOrderPhase",
            "type": "i64"
          },
          {
            "name": "endDecryptionPhase",
            "type": "i64"
          },
          {
            "name": "areAsksEncrypted",
            "type": "bool"
          },
          {
            "name": "areBidsEncrypted",
            "type": "bool"
          },
          {
            "name": "naclPubkey",
            "type": "bytes"
          },
          {
            "name": "eventQueue",
            "type": "publicKey"
          },
          {
            "name": "bids",
            "type": "publicKey"
          },
          {
            "name": "asks",
            "type": "publicKey"
          },
          {
            "name": "quoteMint",
            "type": "publicKey"
          },
          {
            "name": "baseMint",
            "type": "publicKey"
          },
          {
            "name": "quoteVault",
            "type": "publicKey"
          },
          {
            "name": "baseVault",
            "type": "publicKey"
          },
          {
            "name": "minBaseOrderSize",
            "type": "u64"
          },
          {
            "name": "tickSize",
            "type": "u64"
          },
          {
            "name": "askSearchStackDepth",
            "type": "u8"
          },
          {
            "name": "bidSearchStackDepth",
            "type": "u8"
          },
          {
            "name": "askSearchStackValues",
            "type": {
              "array": [
                "u32",
                32
              ]
            }
          },
          {
            "name": "bidSearchStackValues",
            "type": {
              "array": [
                "u32",
                32
              ]
            }
          },
          {
            "name": "currentBidKey",
            "type": "u128"
          },
          {
            "name": "currentAskKey",
            "type": "u128"
          },
          {
            "name": "currentBidQuantityFilled",
            "type": "u64"
          },
          {
            "name": "currentAskQuantityFilled",
            "type": "u64"
          },
          {
            "name": "totalQuantityFilledSoFar",
            "type": "u64"
          },
          {
            "name": "hasFoundClearingPrice",
            "type": "bool"
          },
          {
            "name": "totalQuantityMatched",
            "type": "u64"
          },
          {
            "name": "remainingAskFills",
            "type": "u64"
          },
          {
            "name": "remainingBidFills",
            "type": "u64"
          },
          {
            "name": "finalBidPrice",
            "type": "u64"
          },
          {
            "name": "finalAskPrice",
            "type": "u64"
          },
          {
            "name": "clearingPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "openOrders",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "thisOpenOrders",
            "type": "publicKey"
          },
          {
            "name": "auction",
            "type": "publicKey"
          },
          {
            "name": "maxOrders",
            "type": "u8"
          },
          {
            "name": "side",
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "naclPubkey",
            "type": "bytes"
          },
          {
            "name": "encryptedOrders",
            "type": {
              "vec": {
                "defined": "EncryptedOrder"
              }
            }
          },
          {
            "name": "quoteTokenLocked",
            "type": "u64"
          },
          {
            "name": "quoteTokenFree",
            "type": "u64"
          },
          {
            "name": "baseTokenLocked",
            "type": "u64"
          },
          {
            "name": "baseTokenFree",
            "type": "u64"
          },
          {
            "name": "numOrders",
            "type": "u8"
          },
          {
            "name": "orders",
            "type": {
              "vec": "u128"
            }
          }
        ]
      }
    },
    {
      "name": "orderHistory",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "auction",
            "type": "publicKey"
          },
          {
            "name": "side",
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "quoteAmountReturned",
            "type": "u64"
          },
          {
            "name": "baseAmountReturned",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AobBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "quoteVault",
            "type": "u8"
          },
          {
            "name": "baseVault",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "EncryptedOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonce",
            "type": "bytes"
          },
          {
            "name": "cipherText",
            "type": "bytes"
          },
          {
            "name": "tokenQty",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitAuctionArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "auctionId",
            "type": {
              "array": [
                "u8",
                10
              ]
            }
          },
          {
            "name": "startOrderPhase",
            "type": "i64"
          },
          {
            "name": "endOrderPhase",
            "type": "i64"
          },
          {
            "name": "endDecryptionPhase",
            "type": "i64"
          },
          {
            "name": "areAsksEncrypted",
            "type": "bool"
          },
          {
            "name": "areBidsEncrypted",
            "type": "bool"
          },
          {
            "name": "naclPubkey",
            "type": "bytes"
          },
          {
            "name": "minBaseOrderSize",
            "type": "u64"
          },
          {
            "name": "tickSize",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotImplemented",
      "msg": "Function not yet implemented"
    },
    {
      "code": 6001,
      "name": "InvalidEndTimes",
      "msg": "bids and asks order periods should end in the future"
    },
    {
      "code": 6002,
      "name": "InvalidStartTimes",
      "msg": "bids and asks periods should start before they end"
    },
    {
      "code": 6003,
      "name": "InvalidDecryptionEndTime",
      "msg": "Invalid decryption end time, needs to finish after bids / asks end"
    },
    {
      "code": 6004,
      "name": "InvalidMinBaseOrderSize",
      "msg": "Min base order size should be greater than zero"
    },
    {
      "code": 6005,
      "name": "InvalidTickSize",
      "msg": "Tick size should be greater than zero"
    },
    {
      "code": 6006,
      "name": "NoAskOrders",
      "msg": "No ask orders"
    },
    {
      "code": 6007,
      "name": "NoBidOrders",
      "msg": "No bid orders"
    },
    {
      "code": 6008,
      "name": "NoOrdersInOrderbook",
      "msg": "No orders in the orderbook"
    },
    {
      "code": 6009,
      "name": "CalcClearingPricePhaseNotActive",
      "msg": "Calculating clearing price phase is not active"
    },
    {
      "code": 6010,
      "name": "ClearingPriceAlreadyFound",
      "msg": "Clearing price has already been found"
    },
    {
      "code": 6011,
      "name": "NoClearingPriceYet",
      "msg": "Clearing price not found yet"
    },
    {
      "code": 6012,
      "name": "MatchOrdersPhaseNotActive",
      "msg": "Match orders phase is not active"
    },
    {
      "code": 6013,
      "name": "AuctionNotFinished",
      "msg": "Auction not finished yet"
    },
    {
      "code": 6014,
      "name": "AobEventQueueFull",
      "msg": "AOB Event queue is full"
    },
    {
      "code": 6015,
      "name": "NoEventsProcessed",
      "msg": "No events processed"
    },
    {
      "code": 6016,
      "name": "MissingOpenOrdersPubkeyInRemainingAccounts",
      "msg": "Open orders pubkey not found in remaining accounts"
    },
    {
      "code": 6017,
      "name": "UserSideDiffFromEventSide",
      "msg": "User's side doesn't make event side, definitely shouldn't ever happen"
    },
    {
      "code": 6018,
      "name": "OrderIdNotFound",
      "msg": "Order id not found in list of orders"
    },
    {
      "code": 6019,
      "name": "OrderIdxNotValid",
      "msg": "Order index is invalid"
    },
    {
      "code": 6020,
      "name": "OrderPhaseHasNotStarted",
      "msg": "Time for placing bid or ask orders hasn't started"
    },
    {
      "code": 6021,
      "name": "OrderPhaseIsOver",
      "msg": "Time for placing bid or ask orders has finished"
    },
    {
      "code": 6022,
      "name": "OrderPhaseNotActive",
      "msg": "It is not the time for placing bid or ask orders"
    },
    {
      "code": 6023,
      "name": "DecryptionPhaseHasNotStarted",
      "msg": "The phase for decrypting bid or ask orders hasn't started"
    },
    {
      "code": 6024,
      "name": "DecryptionPhaseHasEnded",
      "msg": "The phase for decrypting bid or ask orders has finished"
    },
    {
      "code": 6025,
      "name": "DecryptionPhaseNotActive",
      "msg": "It is not the time for decrypting bid or ask orders"
    },
    {
      "code": 6026,
      "name": "MaxOrdersValueIsInvalid",
      "msg": "Max orders value is either too high or too low, min 1 max 8"
    },
    {
      "code": 6027,
      "name": "EncryptedOrdersOnlyOnThisSide",
      "msg": "Can only place encrypted orders on this side of the book"
    },
    {
      "code": 6028,
      "name": "UnencryptedOrdersOnlyOnThisSide",
      "msg": "Can only place regular (unencrypted) orders on this side of the book"
    },
    {
      "code": 6029,
      "name": "LimitPriceNotAMultipleOfTickSize",
      "msg": "Limit price must be a multiple of the assigned tick size"
    },
    {
      "code": 6030,
      "name": "OrderBelowMinBaseOrderSize",
      "msg": "Max base order size is below the minimum"
    },
    {
      "code": 6031,
      "name": "TooManyOrders",
      "msg": "Open orders account already has the maximum amount of orders"
    },
    {
      "code": 6032,
      "name": "EncryptionPubkeysDoNotMatch",
      "msg": "The public key stored in this open orders account doesn't match the public key passed in"
    },
    {
      "code": 6033,
      "name": "IdenticalEncryptedOrderFound",
      "msg": "An identical encrypted order found in the open orders account"
    },
    {
      "code": 6034,
      "name": "InsufficientTokensForOrder",
      "msg": "Not enough tokens provided for the order requested. For simplicity of processing, this prevents all encrypted orders in the open orders account being processed. You can cancel the encrypted orders after the decryption period has finished."
    },
    {
      "code": 6035,
      "name": "InvalidSharedKey",
      "msg": "The shared key passed in cannot decrypt these orders"
    },
    {
      "code": 6036,
      "name": "NodeKeyNotFound",
      "msg": "Failed to find the current ask/bid key in the orderbook, this should never happen!"
    },
    {
      "code": 6037,
      "name": "OpenOrdersHasOpenOrders",
      "msg": "Can't close an open orders account that has open orders, try cancelling all orders first"
    },
    {
      "code": 6038,
      "name": "OpenOrdersHasLockedTokens",
      "msg": "Can't close an open orders account that has locked tokens, try cancelling all orders first"
    },
    {
      "code": 6039,
      "name": "OrderBookNotEmpty",
      "msg": "Order book should be empty"
    },
    {
      "code": 6040,
      "name": "EventQueueNotEmpty",
      "msg": "Event queue should be empty"
    },
    {
      "code": 6041,
      "name": "NumericalOverflow",
      "msg": "Some issue with the FP32 multiplication / division messed the maths up"
    },
    {
      "code": 6042,
      "name": "SlabIteratorOverflow",
      "msg": "Slab iterator stack overflow"
    },
    {
      "code": 6043,
      "name": "IncompatibleMintDecimals",
      "msg": "Base & quote mint need to have the same decimals"
    }
  ]
};

export const IDL: AuctionHouse = {
  "version": "0.1.0",
  "name": "auction_house",
  "instructions": [
    {
      "name": "initAuction",
      "accounts": [
        {
          "name": "auctioneer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "args",
          "type": {
            "defined": "InitAuctionArgs"
          }
        }
      ]
    },
    {
      "name": "initOpenOrders",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "side",
          "type": {
            "defined": "Side"
          }
        },
        {
          "name": "maxOrders",
          "type": "u8"
        }
      ]
    },
    {
      "name": "newOrder",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limitPrice",
          "type": "u64"
        },
        {
          "name": "maxBaseQty",
          "type": "u64"
        }
      ]
    },
    {
      "name": "cancelOrder",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "orderId",
          "type": "u128"
        }
      ]
    },
    {
      "name": "newEncryptedOrder",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenQty",
          "type": "u64"
        },
        {
          "name": "naclPubkey",
          "type": "bytes"
        },
        {
          "name": "nonce",
          "type": "bytes"
        },
        {
          "name": "cipherText",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "cancelEncryptedOrder",
      "accounts": [
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "orderIdx",
          "type": "u8"
        }
      ]
    },
    {
      "name": "decryptOrder",
      "accounts": [
        {
          "name": "auctioneer",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "sharedKey",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "calculateClearingPrice",
      "accounts": [
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "matchOrders",
      "accounts": [
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        }
      ]
    },
    {
      "name": "consumeEvents",
      "accounts": [
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u16"
        },
        {
          "name": "allowNoOp",
          "type": "bool"
        }
      ]
    },
    {
      "name": "settleAndCloseOpenOrders",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "orderHistory",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "baseMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userQuote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userBase",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeAobAccounts",
      "accounts": [
        {
          "name": "auctioneer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "auction",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "auction",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "AobBumps"
            }
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "auctionId",
            "type": {
              "array": [
                "u8",
                10
              ]
            }
          },
          {
            "name": "startOrderPhase",
            "type": "i64"
          },
          {
            "name": "endOrderPhase",
            "type": "i64"
          },
          {
            "name": "endDecryptionPhase",
            "type": "i64"
          },
          {
            "name": "areAsksEncrypted",
            "type": "bool"
          },
          {
            "name": "areBidsEncrypted",
            "type": "bool"
          },
          {
            "name": "naclPubkey",
            "type": "bytes"
          },
          {
            "name": "eventQueue",
            "type": "publicKey"
          },
          {
            "name": "bids",
            "type": "publicKey"
          },
          {
            "name": "asks",
            "type": "publicKey"
          },
          {
            "name": "quoteMint",
            "type": "publicKey"
          },
          {
            "name": "baseMint",
            "type": "publicKey"
          },
          {
            "name": "quoteVault",
            "type": "publicKey"
          },
          {
            "name": "baseVault",
            "type": "publicKey"
          },
          {
            "name": "minBaseOrderSize",
            "type": "u64"
          },
          {
            "name": "tickSize",
            "type": "u64"
          },
          {
            "name": "askSearchStackDepth",
            "type": "u8"
          },
          {
            "name": "bidSearchStackDepth",
            "type": "u8"
          },
          {
            "name": "askSearchStackValues",
            "type": {
              "array": [
                "u32",
                32
              ]
            }
          },
          {
            "name": "bidSearchStackValues",
            "type": {
              "array": [
                "u32",
                32
              ]
            }
          },
          {
            "name": "currentBidKey",
            "type": "u128"
          },
          {
            "name": "currentAskKey",
            "type": "u128"
          },
          {
            "name": "currentBidQuantityFilled",
            "type": "u64"
          },
          {
            "name": "currentAskQuantityFilled",
            "type": "u64"
          },
          {
            "name": "totalQuantityFilledSoFar",
            "type": "u64"
          },
          {
            "name": "hasFoundClearingPrice",
            "type": "bool"
          },
          {
            "name": "totalQuantityMatched",
            "type": "u64"
          },
          {
            "name": "remainingAskFills",
            "type": "u64"
          },
          {
            "name": "remainingBidFills",
            "type": "u64"
          },
          {
            "name": "finalBidPrice",
            "type": "u64"
          },
          {
            "name": "finalAskPrice",
            "type": "u64"
          },
          {
            "name": "clearingPrice",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "openOrders",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "thisOpenOrders",
            "type": "publicKey"
          },
          {
            "name": "auction",
            "type": "publicKey"
          },
          {
            "name": "maxOrders",
            "type": "u8"
          },
          {
            "name": "side",
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "naclPubkey",
            "type": "bytes"
          },
          {
            "name": "encryptedOrders",
            "type": {
              "vec": {
                "defined": "EncryptedOrder"
              }
            }
          },
          {
            "name": "quoteTokenLocked",
            "type": "u64"
          },
          {
            "name": "quoteTokenFree",
            "type": "u64"
          },
          {
            "name": "baseTokenLocked",
            "type": "u64"
          },
          {
            "name": "baseTokenFree",
            "type": "u64"
          },
          {
            "name": "numOrders",
            "type": "u8"
          },
          {
            "name": "orders",
            "type": {
              "vec": "u128"
            }
          }
        ]
      }
    },
    {
      "name": "orderHistory",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "auction",
            "type": "publicKey"
          },
          {
            "name": "side",
            "type": {
              "defined": "Side"
            }
          },
          {
            "name": "quoteAmountReturned",
            "type": "u64"
          },
          {
            "name": "baseAmountReturned",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AobBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "quoteVault",
            "type": "u8"
          },
          {
            "name": "baseVault",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "EncryptedOrder",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nonce",
            "type": "bytes"
          },
          {
            "name": "cipherText",
            "type": "bytes"
          },
          {
            "name": "tokenQty",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "InitAuctionArgs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "auctionId",
            "type": {
              "array": [
                "u8",
                10
              ]
            }
          },
          {
            "name": "startOrderPhase",
            "type": "i64"
          },
          {
            "name": "endOrderPhase",
            "type": "i64"
          },
          {
            "name": "endDecryptionPhase",
            "type": "i64"
          },
          {
            "name": "areAsksEncrypted",
            "type": "bool"
          },
          {
            "name": "areBidsEncrypted",
            "type": "bool"
          },
          {
            "name": "naclPubkey",
            "type": "bytes"
          },
          {
            "name": "minBaseOrderSize",
            "type": "u64"
          },
          {
            "name": "tickSize",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NotImplemented",
      "msg": "Function not yet implemented"
    },
    {
      "code": 6001,
      "name": "InvalidEndTimes",
      "msg": "bids and asks order periods should end in the future"
    },
    {
      "code": 6002,
      "name": "InvalidStartTimes",
      "msg": "bids and asks periods should start before they end"
    },
    {
      "code": 6003,
      "name": "InvalidDecryptionEndTime",
      "msg": "Invalid decryption end time, needs to finish after bids / asks end"
    },
    {
      "code": 6004,
      "name": "InvalidMinBaseOrderSize",
      "msg": "Min base order size should be greater than zero"
    },
    {
      "code": 6005,
      "name": "InvalidTickSize",
      "msg": "Tick size should be greater than zero"
    },
    {
      "code": 6006,
      "name": "NoAskOrders",
      "msg": "No ask orders"
    },
    {
      "code": 6007,
      "name": "NoBidOrders",
      "msg": "No bid orders"
    },
    {
      "code": 6008,
      "name": "NoOrdersInOrderbook",
      "msg": "No orders in the orderbook"
    },
    {
      "code": 6009,
      "name": "CalcClearingPricePhaseNotActive",
      "msg": "Calculating clearing price phase is not active"
    },
    {
      "code": 6010,
      "name": "ClearingPriceAlreadyFound",
      "msg": "Clearing price has already been found"
    },
    {
      "code": 6011,
      "name": "NoClearingPriceYet",
      "msg": "Clearing price not found yet"
    },
    {
      "code": 6012,
      "name": "MatchOrdersPhaseNotActive",
      "msg": "Match orders phase is not active"
    },
    {
      "code": 6013,
      "name": "AuctionNotFinished",
      "msg": "Auction not finished yet"
    },
    {
      "code": 6014,
      "name": "AobEventQueueFull",
      "msg": "AOB Event queue is full"
    },
    {
      "code": 6015,
      "name": "NoEventsProcessed",
      "msg": "No events processed"
    },
    {
      "code": 6016,
      "name": "MissingOpenOrdersPubkeyInRemainingAccounts",
      "msg": "Open orders pubkey not found in remaining accounts"
    },
    {
      "code": 6017,
      "name": "UserSideDiffFromEventSide",
      "msg": "User's side doesn't make event side, definitely shouldn't ever happen"
    },
    {
      "code": 6018,
      "name": "OrderIdNotFound",
      "msg": "Order id not found in list of orders"
    },
    {
      "code": 6019,
      "name": "OrderIdxNotValid",
      "msg": "Order index is invalid"
    },
    {
      "code": 6020,
      "name": "OrderPhaseHasNotStarted",
      "msg": "Time for placing bid or ask orders hasn't started"
    },
    {
      "code": 6021,
      "name": "OrderPhaseIsOver",
      "msg": "Time for placing bid or ask orders has finished"
    },
    {
      "code": 6022,
      "name": "OrderPhaseNotActive",
      "msg": "It is not the time for placing bid or ask orders"
    },
    {
      "code": 6023,
      "name": "DecryptionPhaseHasNotStarted",
      "msg": "The phase for decrypting bid or ask orders hasn't started"
    },
    {
      "code": 6024,
      "name": "DecryptionPhaseHasEnded",
      "msg": "The phase for decrypting bid or ask orders has finished"
    },
    {
      "code": 6025,
      "name": "DecryptionPhaseNotActive",
      "msg": "It is not the time for decrypting bid or ask orders"
    },
    {
      "code": 6026,
      "name": "MaxOrdersValueIsInvalid",
      "msg": "Max orders value is either too high or too low, min 1 max 8"
    },
    {
      "code": 6027,
      "name": "EncryptedOrdersOnlyOnThisSide",
      "msg": "Can only place encrypted orders on this side of the book"
    },
    {
      "code": 6028,
      "name": "UnencryptedOrdersOnlyOnThisSide",
      "msg": "Can only place regular (unencrypted) orders on this side of the book"
    },
    {
      "code": 6029,
      "name": "LimitPriceNotAMultipleOfTickSize",
      "msg": "Limit price must be a multiple of the assigned tick size"
    },
    {
      "code": 6030,
      "name": "OrderBelowMinBaseOrderSize",
      "msg": "Max base order size is below the minimum"
    },
    {
      "code": 6031,
      "name": "TooManyOrders",
      "msg": "Open orders account already has the maximum amount of orders"
    },
    {
      "code": 6032,
      "name": "EncryptionPubkeysDoNotMatch",
      "msg": "The public key stored in this open orders account doesn't match the public key passed in"
    },
    {
      "code": 6033,
      "name": "IdenticalEncryptedOrderFound",
      "msg": "An identical encrypted order found in the open orders account"
    },
    {
      "code": 6034,
      "name": "InsufficientTokensForOrder",
      "msg": "Not enough tokens provided for the order requested. For simplicity of processing, this prevents all encrypted orders in the open orders account being processed. You can cancel the encrypted orders after the decryption period has finished."
    },
    {
      "code": 6035,
      "name": "InvalidSharedKey",
      "msg": "The shared key passed in cannot decrypt these orders"
    },
    {
      "code": 6036,
      "name": "NodeKeyNotFound",
      "msg": "Failed to find the current ask/bid key in the orderbook, this should never happen!"
    },
    {
      "code": 6037,
      "name": "OpenOrdersHasOpenOrders",
      "msg": "Can't close an open orders account that has open orders, try cancelling all orders first"
    },
    {
      "code": 6038,
      "name": "OpenOrdersHasLockedTokens",
      "msg": "Can't close an open orders account that has locked tokens, try cancelling all orders first"
    },
    {
      "code": 6039,
      "name": "OrderBookNotEmpty",
      "msg": "Order book should be empty"
    },
    {
      "code": 6040,
      "name": "EventQueueNotEmpty",
      "msg": "Event queue should be empty"
    },
    {
      "code": 6041,
      "name": "NumericalOverflow",
      "msg": "Some issue with the FP32 multiplication / division messed the maths up"
    },
    {
      "code": 6042,
      "name": "SlabIteratorOverflow",
      "msg": "Slab iterator stack overflow"
    },
    {
      "code": 6043,
      "name": "IncompatibleMintDecimals",
      "msg": "Base & quote mint need to have the same decimals"
    }
  ]
};
