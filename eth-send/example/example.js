const send = require('eth-send')

;(async () => {
  const txHash = await send({
    from: '0x6a164122d5cf7c840D26e829b46dCc4ED6C0ae48',
    to: '0x639AdB586061E455f20220495f1497A468a010f8',
    amount: '11000',
    network: 'ethereum'
  })

  console.log(txHash) // 
})()
