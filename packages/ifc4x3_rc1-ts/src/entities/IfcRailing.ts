// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRailing

import { IfcRailingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** The railing is a frame assembly adjacent to human or vehicle circulation spaces and at some space boundaries where it is used in lieu of walls or to compliment walls.
 *
 * Designed to aid humans, either as an optional physical support, or to prevent injury or damage, either by falling or collision.
 */
 class IfcRailing extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcRailingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic types for a railing that are specified in an enumeration.
     * There may be a property set given for the predefined types.
     * The PredefinedType shall only be used, if no IfcRailingType is assigned, providing its own IfcRailingType.PredefinedType.
     * IFC2x CHANGE The attribute has been changed into an OPTIONAL attribute.
    */
    PredefinedType?: IfcRailingTypeEnum
}

export default IfcRailing