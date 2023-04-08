# EvoX TipBot
----------------------------------------------------------------------------

Its completlty reworked to use evox-rpc-js rpc calls.
Soon will be udpated to use our new npm repository.

### Standard Requirements :
----------------------------------------------------------------------------
Mongodb version 0 (compatible), other version use is not recommended, but it can work.

Install MongoDB

```sudo apt install mongodb```

Node.js version 0 (compatible), other version is not recommended, but it can work

Install nodejs

```sudo apt install nodejs```

----------------------------------------------------------------------------
### Commands for plugin requirements (if plugins are not included)
----------------------------------------------------------------------------  

   `npm install discord.js`  

   `npm install safe-json-stringify`  
  
   `npm install big.js`  

   `npm install evox-rpc-js`

----------------------------------------------------------------------------
#### Instructions for bot_config.js
```
For Evolution coin start wallet rpc on port 55066

`wallethostname`                 - your wallet RPC server hostname, default is already included
`walletport`                     - your wallet RPC server port, default is already included
`bot_token`                      - get your token bot. generate user for the bot in disord dev site and click to reveal the Token
`mongodburl`                     - whole url, on which mongoDB is listening on. Find it in your mongodb config

`owner_id`                       - your discord user id
`coin_name`                      - The coin used for the display replies
`block_maturity_requirement`     - !IMPORTANT, if not set correctly, the user may tip balance before it gets fully confirmed
`coin_total_units`               - total decimal units used by the coin
`coin_display_units`             - total units displayed by the output
`server_wallet_address`          - wallet address on which deposits are sent to and on which RPC server is running
`withdraw_tx_fees`               - fee in string, it will be taken from the withdrawal amount
`withdraw_min_amount`            - the minimum amount in string, required for withdrawal to pass
`wait_time_for_withdraw_confirm` - waiting time until user confirms his withdrawal (in milliseconds), default is 20000
`log_1`                          - log initial output in the console (true, false)
`log_2`                          - log some actions in that are running in the bot eg. transactions (true, false)
`log_3`                          - log (debug). Logging everything possible, every function called, and arguments passed (true, false)

```

Reworked By ArtFix & Cosmos.