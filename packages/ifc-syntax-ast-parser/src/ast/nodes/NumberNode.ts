import { ASTType, ASTNode, ASTRange } from "../index";

export class NumberNode extends ASTNode {

    value: number

    /**
     * Constructs an AST String node
     * @param text 
    **/
    constructor(value: number, location: ASTRange) {
        super(ASTType.Number, location);
        this.value = value
    }
}

