import { IVisitor } from "./IVisitor";
export interface IVisitable {
    accept(v: IVisitor): any;
}
