import { ASTType, ASTNode, ASTRange } from "../index";

export class SectionNode extends ASTNode {
    name: ASTNode;
    children: Array<ASTNode>;
    constructor(name: ASTNode, children: Array<ASTNode>, location: ASTRange) {
        super(ASTType.Section, location);

        this.name = name;
        this.children = children;
    }
}
