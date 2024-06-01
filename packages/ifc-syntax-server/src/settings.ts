import { connection, globalSettings } from "./server"
import { documentSettings } from './documents'
import { hasConfigurationCapability } from "./setupConnectionEvents"

// The example settings
export interface IfcSyntaxSettings {
  diagnostics: {
    maxNumberOfProblems: number
  }
  parser: {
    maxLineLength: number
  }
}
// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
export const DefaultSettings: IfcSyntaxSettings = {
  diagnostics: {
    maxNumberOfProblems: 1000
  },
  parser: {
    maxLineLength: 1000
  }
}

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
