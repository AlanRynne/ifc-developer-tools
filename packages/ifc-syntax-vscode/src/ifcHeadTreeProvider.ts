import * as vscode from "vscode"

export class IfcHeadInfoProvider implements vscode.TreeDataProvider<HeadItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<
    HeadItem | undefined
  > = new vscode.EventEmitter<HeadItem | undefined>()

  readonly onDidChangeTreeData: vscode.Event<HeadItem | undefined> = this
    ._onDidChangeTreeData.event
    
  getTreeItem(element: HeadItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element
  }

  getChildren(element?: HeadItem): vscode.ProviderResult<HeadItem[]> {
    if (element) {
      return Promise.resolve(element.children)
    } else {
      // Root element
      var h1 = new HeadItem(
        "Test 1",
        null,
        vscode.TreeItemCollapsibleState.None
      )
      var h2 = new HeadItem(
        "Test 2",
        [h1],
        vscode.TreeItemCollapsibleState.Collapsed
      )
      var h3 = new HeadItem(
        "Test 3",
        null,
        vscode.TreeItemCollapsibleState.None
      )
      return Promise.resolve([h2, h3])
    }
  }

  // getParent?(element: HeadItem): vscode.ProviderResult<HeadItem> {
  //     throw new Error("Method not implemented.");
  // }
}

export class HeadItem extends vscode.TreeItem {
  public label: string
  public collapsibleState: vscode.TreeItemCollapsibleState
  public children: HeadItem[]

  constructor(
    label: string,
    children: HeadItem[],
    collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState)
    this.children = children
  }

  tooltip: string = this.label
  description: string = "Description: " + this.label
}
