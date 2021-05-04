import { ASTType, ASTNode, ASTRange } from "../index";

export class CommentNode extends ASTNode {
    content: string;

    /**
     * Constructs a new ASTNode representing a constructor function
     * @param name Name node of the constructor
     * @param loc Location range of the constructor
     * @param args Argument nodes of the constructor
     */
    constructor(content: string, loc: ASTRange) {
        super(ASTType.Comment, loc);
        this.content = content;
    }
}
