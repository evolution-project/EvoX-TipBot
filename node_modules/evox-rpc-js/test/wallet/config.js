'use strict'

exports = module.exports = {
  walletAddress: process.env.WALLET_ADDRESS || 'http://0.0.0.0:52528',
  walletUsername: process.env.WALLET_USER || 'user',
  walletPassword: process.env.WALLET_PASSWORD || 'pass',
  daemonAddress: process.env.DAEMON_ADDRESS || 'http://0.0.0.0:52521',
  daemonUsername: process.env.DAEMON_USER || 'user',
  daemonPassword: process.env.DAEMON_PASSWORD || 'pass',
  watchOnlyWalletAddress: process.env.WALLET_ADDRESS || 'http://0.0.0.0:12234',
  watchOnlyWalletUsername: process.env.WALLET_USER || 'user',
  watchOnlyWalletPassword: process.env.WALLET_PASSWORD || 'pass',
  daemonAddress: process.env.DAEMON_ADDRESS || 'http://0.0.0.0:52521',
  restore_height: process.env.WALLET_RESTORE_HEIGHT || 0,
  testNetSeedA: 'coffee rest stand said leg muse defense wild about mighty horse melt really hum sharp seek honest brush depress beyond hundred silly confusion inhale birthday frozen',
  integratedTestAddressA: 'ieX3ea1cn4rWArhbX3mNPNhb7zpFmmRAgVKJEvaHvmJuQbXxQFFHimjc4j8Hn2G3aRQR3j2sNgkMjcTwBYLhSxkyr1XDXipKrL',
  standardTestAddressA: 'eX4uBvY5m3pTch1QrxTjmL84Vd91ZCGvWjReNfNbcGkgbdsr9ziqZqL3BC8VTG6FCQPnEhfNStuPJiFfR7AaVow22qMLo79uT',
  payment_idA: '8ca523f5e9506fed',
  testNetSeedB: 'through shape quick twice certainly situation quickly treat poor piece pattern once everyone teeth crash first father laughter cheek shove girlfriend tree any knee realize shield',
  integratedTestAddressB: 'ieX3ea1cn4rWArhbX3mNPNhb7zpFmmRAgVKJEvaHvmJuQbXxQFFHimjc4j8Hn2G3aRQR3j2sNgkMjcTwBYLhSxkyr1XDXipKrL',
  standardTestAddressB: 'eX4uBvY5m3pTch1QrxTjmL84Vd91ZCGvWjReNfNbcGkgbdsr9ziqZqL3BC8VTG6FCQPnEhfNStuPJiFfR7AaVow22qMLo79uT',
  payment_idB: '6e9ef82dc7d0be81',
  txids: ['dcb72d5e709793f8df6f0daa443a497e68d8d75668f329fab5486500498b983f', 'a37eb3ecbc4f7effdeadeceedf4c1037c6c86ca60d005ec9e2c4439d8e20fa6e'],
  units: 1000000000000,
  fee: 10000000000,
  seconds: 1000

}
