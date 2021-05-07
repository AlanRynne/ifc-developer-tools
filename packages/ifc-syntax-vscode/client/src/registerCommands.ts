import * as vscode from "vscode"
import { parseQueryString } from "./extension"

let documentationPanel: vscode.WebviewPanel | undefined = undefined
let viewerPanel: vscode.WebviewPanel | undefined = undefined

export default function registerCommands(context: vscode.ExtensionContext) {
  registerDocumentationViewerCommand(context)
  register3DViewerCommand(context)
}

function registerDocumentationViewerCommand(context: vscode.ExtensionContext) {
  const command = "ifcSyntax.openDocsViewer"
  const commandHandler = (uri: vscode.Uri, value: any) => {
    if (documentationPanel) {
      documentationPanel.reveal(undefined, true)
    } else {
      documentationPanel = vscode.window.createWebviewPanel(
        "ifc3dViewer",
        uri.path,
        vscode.ViewColumn.Two,
        { enableScripts: true }
      )
    }

    documentationPanel.onDidDispose(
      () => {
        documentationPanel = undefined
      },
      null,
      context.subscriptions
    )

    let queryObj = parseQueryString(uri.query)
    documentationPanel.title = queryObj.version + " - " + queryObj.name
    documentationPanel.webview.html = getDocsWebviewContent(
      uri.path,
      queryObj,
      value
    )
  }
  context.subscriptions.push(
    vscode.commands.registerCommand(command, commandHandler)
  )
}

function register3DViewerCommand(context: vscode.ExtensionContext) {
  const viewerCommand = "ifcSyntax.threeDimensionalViewer"
  const viewerCommandHandler = () => {
    const uri = vscode.window.activeTextEditor.document.uri.fsPath
    if (viewerPanel) {
      viewerPanel.reveal()
    } else {
      viewerPanel = vscode.window.createWebviewPanel(
        "ifcViewer",
        "IFC 3D",
        vscode.ViewColumn.Two
      )
    }
    viewerPanel.onDidDispose(
      () => (viewerPanel = undefined),
      null,
      context.subscriptions
    )

    viewerPanel.title = "IFC — 3D"
    viewerPanel.webview.html = get3DViewerWebviewContent(uri)
  }
  context.subscriptions.push(
    vscode.commands.registerCommand(viewerCommand, viewerCommandHandler)
  )
}

function getDocsWebviewContent(path, query, entity) {
  return /*html*/ `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${query.name}</title>
      </head>
      <body>
        <h1>IFC Syntax ${query.version} Docs</h1>
        <h2>${query.name}</h2>
        <p>Placeholder for BuildingSmart docs text...</p>
        <div id="app">
        <test :item="message"/>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script>
            Vue.component('test', {
                template: "<ul><li v-for='(value,key) in item' :key='key'>{{key}} — {{value}}</li></ul>",
                props:["item"],
                data() {
                    return {
                    }
                }
            })

            var app = new Vue({
                el: '#app',
                data: {
                    message: ${JSON.stringify(entity)}
                },
                methods: {
                    msg: () => { return this.data.message }
                }
            })


        </script>

      </body>
    </html>`
}

function get3DViewerWebviewContent(uri: string) {
  return /*html*/ `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IFC Syntax 3D window</title>
      </head>
      <body>
        <h1>IFC Syntax 3D Viewer</h1>
        <p>${uri}</p>
        <p>In progress... Viewer will go here</p>
      </body>
    </html>`
}
