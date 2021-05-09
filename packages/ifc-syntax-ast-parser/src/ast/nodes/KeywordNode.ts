import { ASTType, ASTNode, ASTRange } from "../index";

export class KeywordNode extends ASTNode {

    text: string

    /**
     * Constructs an AST String node
     * @param text 
    **/
    constructor(text: string, location: ASTRange) {
        super(ASTType.Keyword, location);
        this.text = text
    }
}

