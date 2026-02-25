import { connection } from "./connection"
import { globalSettings } from "./server"
import { documentSettings } from './documents'
import { hasConfigurationCapability } from "./setupConnectionEvents"
import { IfcSyntaxSettings, DefaultSettings } from "./types"

// Re-export for consumers of this module
export type { IfcSyntaxSettings }
export { DefaultSettings }

export function getDocumentSettings(
  resource: string
): Thenable<IfcSyntaxSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings)
  }
  let result = documentSettings.get(resource)
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: "ifcSyntax"
    })
    documentSettings.set(resource, result)
  }
  return result
}
