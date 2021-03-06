import { ASTType, ASTNode, ASTRange } from "../index";

export class VariableNode extends ASTNode {

    id: number

    /**
     * Constructs an AST String node
     * @param text 
    **/
    constructor(id: number, location: ASTRange) {
        super(ASTType.Variable, location);
        this.id = id
    }
}

