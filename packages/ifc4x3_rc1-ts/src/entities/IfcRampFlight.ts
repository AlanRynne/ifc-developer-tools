// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRampFlight

import { IfcRampFlightTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** A ramp comprises a single inclined segment, or several inclined segments that are connected by a horizontal segment, refered to as a landing.
 *
 * A ramp flight is the single inclined segment and part of the ramp construction.
 *
 * In case of single flight ramps, the ramp flight and the ramp are identical
 *
 * An IfcRampFlight is an aggregated part of an IfcRamp realized through the IfcRelAggregates relationship, the ramp flight is therefore included in the set of IfcRelAggregates.RelatedObjects.
 *
 * An IfcRampFlight connects the floor slab of zero to two different storeys (or partial storeys or landings) within a building.
 *
 * The connection relationship between the IfcRampFlight and the IfcSlab can be expressed using the IfcRelConnectsElements relationship.
 */
 class IfcRampFlight extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcRampFlightTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a ramp flight that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcRampFlightType is assigned, providing its own IfcRampFlightType.PredefinedType.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PredefinedType?: IfcRampFlightTypeEnum
}

export default IfcRampFlight