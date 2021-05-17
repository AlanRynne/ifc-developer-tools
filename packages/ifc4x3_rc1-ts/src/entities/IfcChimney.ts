// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcChimney

import { IfcChimneyTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** Chimneys are typically vertical, or as near as vertical, parts of the construction of a building and part of the building fabric.
 *
 * Often constructed by pre-cast or insitu concrete, today seldom by bricks.
 */
 class IfcChimney extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcChimneyTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a chimney that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcChimneyType is assigned, providing its own IfcChimneyType.PredefinedType.
    */
    PredefinedType?: IfcChimneyTypeEnum
}

export default IfcChimney