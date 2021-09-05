const establishConnection = require('./connect-to-provider')
const generateKeyPair = require('./generate-key-pair')

const SECRET_SEED = '0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a'; //Alice

const setOrder = async (api, wallet) => {
  let nonce = await api.rpc.system.accountNextIndex(wallet.address);

  await api.tx.balance.transfer(orderId, order).signAndSend(wallet, { nonce })
}

const main = async () => {
  const api = await establishConnection()
  const organisationWallet = await generateKeyPair(SECRET_SEED)

  const order = formatOrderData(MW_ORDER_CREATION_SAMPLE)
  await setOrder(api, organisationWallet, order.id, order)
  process.exit()
}

main()