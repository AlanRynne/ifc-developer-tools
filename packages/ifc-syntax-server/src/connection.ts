import { createConnection, ProposedFeatures, Connection } from "vscode-languageserver/node"

export const connection: Connection = createConnection(ProposedFeatures.all)
