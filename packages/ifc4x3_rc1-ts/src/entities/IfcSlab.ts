// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSlab

import { IfcSlabTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** A slab is a component of the construction that may enclose a space vertically.
 *
 * The slab may provide the lower support (floor) or upper construction (roof slab) in any space in a building.
 *
 * Only the core or constructional part of this construction is considered to be a slab.
 *
 * The upper finish (flooring, roofing) and the lower finish (ceiling, suspended ceiling) are considered to be coverings.
 *
 * A special type of slab is the landing, described as a floor section to which one or more stair flights or ramp flights connect
 *
 * A slab may have openings, such as floor openings, or recesses.
 *
 * They are defined by an IfcOpeningElement attached to the slab using the inverse relationship HasOpenings pointing to IfcRelVoidsElement
 *
 * There are three entities for slab occurrences:
 */
 class IfcSlab extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcSlabTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a slab that is specified in an enumeration.
     * There may be a property set given specifically for the predefined types.
     * The PredefinedType shall only be used, if no IfcSlabType is assigned, providing its own IfcSlabType.PredefinedType.
     * IFC2x CHANGE The attribute has been changed into an OPTIONAL attribute.
    */
    PredefinedType?: IfcSlabTypeEnum
}

export default IfcSlab