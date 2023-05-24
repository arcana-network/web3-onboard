# @web3-onboard/arcana-auth

## Wallet module for connecting Arcana Wallet SDK to web3-onboard

[Web3-Onboard](https://onboard.blocknative.com/) is an open-source, framework-agnostic JavaScript library to onboard users to web3 apps. This package can be used to integrate [Arcana Wallet](https://docs.arcana.network/concepts/anwallet/index.html) support into Web3-Onboard's "Connect Wallet" modal. With this module, the Arcana wallet option will be shown for any app that integrates with the Arcana Auth SDK and uses it to onboard users. There is no need to download any browser extension. For more information on how to use the Arcana Wallet, please refer to the [Arcana Wallet User Guide](https://docs.arcana.network/user-guides/wallet-ui/index.html). Web3 app developers can refer to the [Arcana Wallet Developer Docs](https://docs.arcana.network/auth-quick-start.html)

### Install

`npm install @web3-onboard/core @arcana/auth @web3-onboard/arcana-auth`

## Usage

```typescript
import Onboard from '@web3-onboard/core'
import arcanaAuthModule from '@web3-onboard/arcana-auth'

// initialize the module
const arcanaAuth = arcanaAuthModule({
  clientID: 'xar_dev_2e9c00c6bc0d5d9512c6aae6b0cd9e417be738f9'
})

const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    arcanaAuth,
    //... other wallets
  ]
})

const connectedWallets = await onboard.connectWallet()
console.log(connectedWallets)
```
