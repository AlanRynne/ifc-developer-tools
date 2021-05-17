// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFooting

import { IfcFootingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** A footing is a part of the foundation of a structure that spreads and transmits the load to the soil.
 *
 * A footing is also characterized as shallow foundation, where the loads are transfered to the ground near the surface.
 */
 class IfcFooting extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcFootingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** The generic type of the footing.
     * IFC4 CHANGE Attribute made optional.
     * Type information can be provided by IfcRelDefinesByType and IfcFootingType.
    */
    PredefinedType: IfcFootingTypeEnum
}

export default IfcFooting