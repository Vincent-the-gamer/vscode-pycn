import { defineExtension, onActivate } from 'reactive-vscode'
import { window } from 'vscode'

const { activate, deactivate } = defineExtension(() => {
  onActivate(() => {
    window.showInformationMessage("Pycn activated successfully!")
  })
})

export { activate, deactivate }
