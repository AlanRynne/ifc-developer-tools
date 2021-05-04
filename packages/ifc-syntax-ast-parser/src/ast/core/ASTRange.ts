import { ASTPosition } from './ASTPosition';

export class ASTRange {
    start: ASTPosition;
    end: ASTPosition;
    /**
     * Constructs a new instance of AST Location.
    **/
    constructor(start: number, end: number, startLine: number, endLine: number) {
        this.start = new ASTPosition(startLine, start);
        this.end = new ASTPosition(endLine, end);
    }

    contains(position: ASTPosition): boolean {
        let extreme = position.isEqual(this.start) || position.isEqual(this.end)
        let containment = position.isAfter(this.start) && position.isBefore(this.end)
        return extreme || containment
    }
}
