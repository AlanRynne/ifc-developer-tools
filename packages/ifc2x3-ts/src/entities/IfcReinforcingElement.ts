// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcingElement

import { IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElementComponent } from './'

/** A reinforcing element represents bars, wires, strands, meshes, tendons, and other components embedded in concrete in such a manner that the reinforcement and the concrete act together in resisting forces
 *
 * One or several instances of subtypes of IfcReinforcingElement should always be accompanied by a defining instance of a respective subtype of IfcReinforcingElementType.
 *
 * The type object holds shape and material information.
 */
abstract class IfcReinforcingElement extends IfcBuildingElementComponent {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, SteelGrade:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.SteelGrade = SteelGrade
    }
    /** Deprecated. IFC4 CHANGE Attribute deprecated.
     * Use material association at IfcReinforcingElementType instead.
    */
    SteelGrade?: IfcLabel
}

export default IfcReinforcingElement