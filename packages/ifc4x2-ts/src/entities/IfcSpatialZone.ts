// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpatialZone

import { IfcSpatialZoneTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcSpatialElement } from './'

/** A spatial zone is a non-hierarchical and potentially overlapping decomposition of the project under some functional consideration.
 *
 * A spatial zone might be used to represent a thermal zone, a construction zone, a lighting zone, a usable area zone.
 *
 * A spatial zone might have its independent placement and shape representation.
 *
 * The IfcSpatialZone inherits and declares these attributes that shall have the following meaning:Physical elements that are referenced by this spatial zone are related using the IfcRelReferencedInSpatialStructure relationship as it is a non-hierarchical assignment in addition to the hierarchical spatial containment within a subtype of IfcSpatialStructureElement.
 *
 * Also spaces, that referenced by this spatial zone are related using the IfcRelReferencedInSpatialStructure relationship.
 *
 * The IfcSpatialZone itself can also be referenced by another spatial element using IfcRelReferencedInSpatialStructure.
 */
 class IfcSpatialZone extends IfcSpatialElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, PredefinedType:IfcSpatialZoneTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName)
        this.PredefinedType = PredefinedType
    }
    /** Predefined types to define the particular type of the spatial zone.
     * There may be property set definitions available for each predefined type.
    */
    PredefinedType?: IfcSpatialZoneTypeEnum
}

export default IfcSpatialZone