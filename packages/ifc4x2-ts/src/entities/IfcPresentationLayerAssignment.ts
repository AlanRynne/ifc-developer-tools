// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPresentationLayerAssignment

import { IfcLabel, IfcText, IfcLayeredItem, IfcIdentifier } from '../types'

/** The presentation layer assignment provides the layer name (and optionally a description and an identifier) for a collection of geometric representation items.
 *
 * The IfcPresentationLayerAssignment corresponds to the term "CAD Layer" and is used mainly for grouping and visibility control
 *
 * Visibility and access control and layer style assignment (colour, line style, line width) is handled by the subtype IfcPresentationLayerAssignmentWithStyle
 *
 * Attribute use definitionFigure 410 illustrates assignment of items by shape representation or representation item.
 *
 * The set of AssignedItems can either include a whole shape representation, or individual geometric representation items.
 *
 * If both, the IfcShapeRepresentation has a layer assignment, and an individual geometric representation item in the set of IfcShapeRepresentation
 *
 * Items, then the layer assignment of the IfcGeometricRepresentationItem overides the layer assignment of the IfcShapeRepresentation.
 */
 class IfcPresentationLayerAssignment  {
    constructor(Name:IfcLabel, Description:IfcText, AssignedItems:Array<IfcLayeredItem>, Identifier:IfcIdentifier) {

        this.Name = Name
        this.Description = Description
        this.AssignedItems = AssignedItems
        this.Identifier = Identifier
    }
    /** Name of the layer.
    */
    Name: IfcLabel
    /** Additional description of the layer.
    */
    Description?: IfcText
    /** The set of layered items, which are assigned to this layer.
    */
    AssignedItems: Array<IfcLayeredItem>
    /** An (internal) identifier assigned to the layer.
    */
    Identifier?: IfcIdentifier
}

export default IfcPresentationLayerAssignment