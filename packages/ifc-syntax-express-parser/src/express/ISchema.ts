import { IEntity } from "./IEntity"
import { IFunction } from "./IFunction"
import { IRule } from "./IRule"
import { IType } from "./IType"

export interface ISchema {
  schema: string
  header: string[]
  types: IType[]
  entities: IEntity[]
  functions: IFunction[]
  rules: IRule[]
}