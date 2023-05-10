import {createEIP1193Provider, WalletInit} from "@web3-onboard/common";
import icon from './icon'
import type { ConstructorParams } from '@arcana/auth/types'

export default function (opts: ConstructorParams & {
  clientID: string
}): WalletInit {
  const clientID = opts.clientID
  delete opts.clientID

  return () => ({
    label: 'Arcana Auth',
    async getIcon (){
      return icon
    },
    async getInterface () {
      const { AuthProvider } = await import('@arcana/auth')

      const instance = new AuthProvider(clientID, opts)
      return new Promise((resolve, reject) => {
        instance.provider.once('connect', () => {
          resolve({
            provider: createEIP1193Provider(instance.provider),
            instance
          })
        })
        instance.connect().catch(reject)
      })
    }
  })
}
