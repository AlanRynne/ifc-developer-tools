// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStyledItem

import { IfcRepresentationItem } from './'
import { IfcStyleAssignmentSelect, IfcLabel } from '../types'

/** The IfcStyledItem holds presentation style information for products, either explicitly for an IfcGeometricRepresentationItem being part of an IfcShapeRepresentation assigned to a product, or by assigning presentation information to IfcMaterial being assigned as other representation for a product
 *
 * Use DefinitionFigure 399 illustrates use of IfcStyledItem for the two usage examples:
 */
 class IfcStyledItem extends IfcRepresentationItem {
    constructor(Item:IfcRepresentationItem, Styles:Array<IfcStyleAssignmentSelect>, Name:IfcLabel) {
        super()
        this.Item = Item
        this.Styles = Styles
        this.Name = Name
    }
    /** A geometric representation item to which the style is assigned.
     * IFC2x2 Add2 CHANGE The attribute Item has been made optional.
     * Upward compatibility for file based exchange is guaranteed.
    */
    Item?: IfcRepresentationItem
    /** Representation styles which are assigned, either to an geometric representation item, or to a material definition.
     * IFC4 CHANGE The data type has been changed to IfcStyleAssignmentSelect with upward compatibility for file based exchange.
     * Only the select item IfcPresentationStyle shall be used from IFC4 onwards, the IfcPresentationStyleAssignment has been deprecated.
    */
    Styles: Array<IfcStyleAssignmentSelect>
    /** The word, or group of words, by which the styled item is referred to.
    */
    Name?: IfcLabel
}

export default IfcStyledItem