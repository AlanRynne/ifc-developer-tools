// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFastener

import { IfcFastenerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElementComponent } from './'

/** Representations of fixing parts which are used as fasteners to connect or join elements with other elements.
 *
 * Excluded are mechanical fasteners which are modeled by a separate entity (IfcMechanicalFastener).
 */
 class IfcFastener extends IfcElementComponent {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcFastenerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Subtype of fastener
    */
    PredefinedType?: IfcFastenerTypeEnum
}

export default IfcFastener