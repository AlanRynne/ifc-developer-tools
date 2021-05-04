import { ASTType, ASTNode, ASTRange } from "../../ast/index";

export class DocumentNode extends ASTNode {

    version: string;
    sections: Array<ASTNode>

    constructor(version: string, sections: Array<ASTNode>, location: ASTRange) {
        super(ASTType.Document, location);
        this.version = version;
        this.sections = sections
    }
}


