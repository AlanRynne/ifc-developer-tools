import { ASTType, ASTNode, ASTRange } from "../index";

export class NullNode extends ASTNode {

    value: string

    /**
     * Constructs an AST String node
     * @param text 
    **/
    constructor(value: string, location: ASTRange) {
        super(ASTType.Null, location);
        this.value = value
    }
}

