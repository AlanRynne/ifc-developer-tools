import { IVisitable } from "../visitor/IVisitable";
import { IVisitor } from "../visitor/IVisitor";
import { ASTType } from "./ASTType";
import { ASTRange } from "./ASTRange"


export class ASTNode implements IVisitable {

    readonly type: ASTType
    readonly loc: ASTRange
    comment?: ASTNode
    errors?: Error[]

    /**
     * Constructs a Base AST Node
    **/
    constructor(type: ASTType, location: ASTRange) {
        this.type = type
        this.loc = location
    }

    /** 
     * Visiting pattern method
    **/
    public accept(v: IVisitor, ...data): any {
        return v.visit(this, ...data)
    }
}
