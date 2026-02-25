/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { setupConnectionEvents } from "./setupConnectionEvents"
import { documents } from "./documents"
import { IfcSyntaxSettings, DefaultSettings } from "./types"
import { connection } from "./connection"

export var globalSettings: IfcSyntaxSettings = DefaultSettings

setupConnectionEvents(connection)

// Make the text document manager listen on the connection for open, change and close text document events
documents.listen(connection)
// Listen on the connection
connection.listen()
