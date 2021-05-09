import { ASTType, ASTNode, ASTRange } from "../index";

export class StringNode extends ASTNode {

    text: string

    /**
     * Constructs an AST String node
     * @param text 
    **/
    constructor(text: string, location: ASTRange) {
        super(ASTType.String, location);
        this.text = text
    }
}

