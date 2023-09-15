import Transfer from './src/transfer.vue'
import type { App } from 'vue'

Transfer.install = (app: App) => {
  app.component(Transfer.name, Transfer)
}

export const CcTransfer = Transfer
export default Transfer
