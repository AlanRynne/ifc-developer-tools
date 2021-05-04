export class ASTPosition {
    line: number
    character: number;
    /**
     * Constructs a new instance of AST Location.
    **/
    constructor(line: number, character: number) {
        this.line = line;
        this.character = character;
    }

    isEqual(position: ASTPosition): boolean {
        return this.line == position.line && this.character == position.character
    }

    isBefore(position: ASTPosition): boolean {
        return this.line < position.line || (this.line == position.line && this.character < position.character)
    }
    isAfter(position: ASTPosition): boolean {
        let linecheck = this.line > position.line
        let characterCheck = this.line == position.line && this.character > position.character
        return linecheck || characterCheck
    }
}
