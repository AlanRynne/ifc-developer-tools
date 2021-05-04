export interface DocItem {
  name: string
  path: string
  description?: string[]
  note?: string[]
  attributes?: Map<string, string[]>
}
