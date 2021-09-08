const establishConnection = require('./connect-to-provider')
const generateKeyPair = require('./generate-key-pair')

const SECRET_SEED = '0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a'; //Alice

const setOrder = async (api, wallet) => {
  let nonce = await api.rpc.system.accountNextIndex(wallet.address);

  await api.tx.balances.transfer("5s6GPQePgaQj86uGnZHUeoTWQh7aEcJvmgGA8sd3aUBpedbt", 1000).signAndSend(wallet, { nonce })
}

const main = async () => {
  const api = await establishConnection()
  const organisationWallet = await generateKeyPair(SECRET_SEED)

  console.log(organisationWallet)

  // const order = formatOrderData(MW_ORDER_CREATION_SAMPLE)
  await setOrder(api, organisationWallet)
  process.exit()
}

main()