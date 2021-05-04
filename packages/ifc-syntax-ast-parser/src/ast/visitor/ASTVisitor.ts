import { ASTNode } from "../core/ASTNode";
import { IVisitor } from "./IVisitor";
import * as nodes from "../nodes";
import { ASTPosition } from '../core/ASTPosition';

export class ASTDefinitionFinderVisitor implements IVisitor {

    visit(node: ASTNode, refNum: number): any {
        if (node instanceof nodes.AssignmentNode) {
            if (node.name.accept(this, refNum))
                return node
        } else if (node instanceof nodes.DocumentNode) {
            let result: any = undefined
            node.sections.forEach(sec => {
                let sectionResult = sec.accept(this, refNum)
                if (sectionResult)
                    result = sectionResult;
            })
            return result
        } else if (node instanceof nodes.VariableNode) {
            if (node.id == refNum) {
                return node
            }
        } else if (node instanceof nodes.SectionNode) {
            let keyword = node.name.accept(this, refNum)
            if (keyword == "DATA") {
                let result: any = undefined
                node.children.forEach(child => {
                    let d = child.accept(this, refNum)
                    if (d)
                        result = d
                })
                return result
            }
        } else if (node instanceof nodes.KeywordNode) {
            return node.text
        } else {
            //console.log("Other node: " + node.constructor.name)
        }
    }
}

export class ASTDefinitionVisitor implements IVisitor {
    visit(node: ASTNode): nodes.AssignmentNode[] | void {
        if (node instanceof nodes.AssignmentNode) {
            return [node]
        } else if (node instanceof nodes.DocumentNode) {
            let secs: any[] = []
            node.sections.forEach(sec => {
                let sectionResult = sec.accept(this)
                if (sectionResult) secs.push(...sectionResult)
            })
            return secs
        } else if (node instanceof nodes.SectionNode) {
            let name: any = node.name
            if (name.text == "DATA") {
                let result: any[] = []
                node.children.forEach(child => {
                    let d = child.accept(this)
                    if (d) result.push(...d)
                })
                return result
            }
        }
    }
}

// Finds the closest matching ASTNode to the specified position.
export class ASTPositionVisitor implements IVisitor {
    visit(node: ASTNode, position: ASTPosition) {
        var containsPosition = node.loc.contains(position)
        if (containsPosition) {
            if (node instanceof nodes.DocumentNode) {
                let result = null;
                node.sections.forEach(sec => {
                    let sectionResult = sec.accept(this, position)
                    if (sectionResult)
                        result = sectionResult
                })
                return result
            } else if (node instanceof nodes.SectionNode) {
                let result = null
                node.children.forEach(child => {
                    let d = child.accept(this, position)
                    if (d) result = d;
                })
                return result
            } else if (node instanceof nodes.AssignmentNode) {
                let ref = node.name.accept(this, position)
                if (ref)
                    return ref
                let val = node.value.accept(this, position)
                if (val)
                    return val
            } else if (node instanceof nodes.ConstructorNode) {
                let name = node.name.accept(this, position);
                if (name) return name;
                let result: any = null;
                node.args.forEach(arg => {
                    let argResult = arg.accept(this, position)
                    if (argResult)
                        result = argResult;
                })
                return result
            } else if (node instanceof nodes.ArrayNode) {
                let result = null;
                node.items.forEach(item => {
                    let itemResult = item.accept(this, position)
                    if (itemResult)
                        result = itemResult;
                })
                return result;
            } else {
                return node;
            }
        } else {
            return null;
        }
    }
}