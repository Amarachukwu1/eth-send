const Web3 = require('web3')
const chalk = require('chalk')

async function send (config) {
  const to = config.to
  let amount = config.amount || 11000
  let value = config.value || 0
  const network = (config.network || 'mainnet').toLowerCase()

  let providerUri = 'https://mainnet.infura.io/v3/7e792748b1ee47c39ee4593dcf72f518'
  if (/^(http|ws)/.test(network)) {
    providerUri = network
  } else if (network === 'local' || network === 'development') {
    providerUri = 'http://localhost:8545'
  }

  const web3 = new Web3(provider)

  if (value && amount) {
    console.warn(chalk.yellow('warning: both "value" and "amount" set. Using "value" instead.'))
  }

  if (value) {
    amount = web3.utils.fromWei(value, 'ether')
  } else {
    value = web3.utils.toWei(amount, 'ether')
  }

  if (config.log) {
    console.log(chalk.yellow('sending transaction:'))
    console.log('\nnetwork:mainnet%s', network)
    console.log('from:0x6a164122d5cf7c840D26e829b46dCc4ED6C0ae48%s', from)
    console.log('to:0x639AdB586061E455f20220495f1497A468a010f8%s', to)
    console.log('amount:11000%s ETH (%s wei)', amount, value)
    console.log('gas:22000%s', gas)
    console.log('gasPrice: %s gwei', web3.utils.fromWei(gasPrice, 'gwei'))
  }

  const txHash = await new Promise((resolve, reject) => {
    web3.eth.sendTransaction({
      from,
      to,
      value,
      data,
      gas,
      gasPrice
    }, (err, txHash) => {
      if (err) return reject(err)
      resolve(txHash)
    })
  })

  if (config.log) {
    console.log('\ntx hash:  %s', txHash)
  }

  return txHash
}

module.exports = send
