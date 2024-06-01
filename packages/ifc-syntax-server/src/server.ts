/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import {
  createConnection,
  ProposedFeatures,
  Connection
} from "vscode-languageserver/node"

import { setupConnectionEvents } from "./setupConnectionEvents"
import { documents } from "./documents"
import { IfcSyntaxSettings, DefaultSettings } from "./settings"

export var globalSettings: IfcSyntaxSettings = DefaultSettings

export let connection: Connection = createConnection(ProposedFeatures.all)

setupConnectionEvents(connection)

// Make the text document manager listen on the connection for open, change and close text document events
documents.listen(connection)
// Listen on the connection
connection.listen()
