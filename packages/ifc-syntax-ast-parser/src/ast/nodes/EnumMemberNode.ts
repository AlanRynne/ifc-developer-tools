import { ASTType, ASTNode, ASTRange } from "../index";

export class EnumMemberNode extends ASTNode {

    value: string

    /**
     * Constructs an AST String node
     * @param text 
    **/
    constructor(value: string, location: ASTRange) {
        super(ASTType.Enum, location);
        this.value = value
    }
}

