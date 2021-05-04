import { IVisitable } from "./IVisitable";

export interface IVisitor {
    visit(node: IVisitable, ...data: any[]): any;
}
