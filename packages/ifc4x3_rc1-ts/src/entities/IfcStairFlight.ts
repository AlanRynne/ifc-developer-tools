// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStairFlight

import { IfcInteger, IfcPositiveLengthMeasure, IfcStairFlightTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** A stair flight is an assembly of building components in a single "run" of stair steps (not interrupted by a landing).
 *
 * The stair steps and any stringers are included in the stair flight.
 *
 * A winder is also regarded a part of a stair flight
 *
 * An IfcStairFlight is normally aggregated by an IfcStair through the IfcRelAggregates relationship, the stair flight is then included in the set of IfcRelAggregates.RelatedObjects.
 *
 * An IfcStairFlight normally connects the floor slab of zero to two different storeys (or partial storeys, or landings) within a building.
 *
 * The connection relationship between the IfcStairFlight and the IfcSlab can be expressed using the IfcRelConnectsElements relationship.
 */
 class IfcStairFlight extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, NumberOfRisers:IfcInteger, NumberOfTreads:IfcInteger, RiserHeight:IfcPositiveLengthMeasure, TreadLength:IfcPositiveLengthMeasure, PredefinedType:IfcStairFlightTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.NumberOfRisers = NumberOfRisers
        this.NumberOfTreads = NumberOfTreads
        this.RiserHeight = RiserHeight
        this.TreadLength = TreadLength
        this.PredefinedType = PredefinedType
    }
    /** Number of the risers included in the stair flight IFC4 CHANGE The attribute has been deprecated it shall only be exposed with a NIL value.
     * Use Pset_StairFlightCommon
     * NumberOfRisers instead.
    */
    NumberOfRisers?: IfcInteger
    /** Number of treads included in the stair flight.
     * IFC4 CHANGE The attribute has been deprecated it shall only be exposed with a NIL value.
     * Use Pset_StairFlightCommon
     * NumberOfTreads instead.
    */
    NumberOfTreads?: IfcInteger
    /** Vertical distance from tread to tread.
     * The riser height is supposed to be equal for all stairs in a stair flight.
     * IFC4 CHANGE The attribute has been deprecated it shall only be exposed with a NIL value.
     * Use Pset_StairFlightCommon
     * RiserHeight instead.
    */
    RiserHeight?: IfcPositiveLengthMeasure
    /** Horizontal distance from the front to the back of the tread.
     * The tread length is supposed to be equal for all steps of the stair flight.
     * IFC4 CHANGE The attribute has been deprecated it shall only be exposed with a NIL value.
     * Use Pset_StairFlightCommon
     * TreadLength instead.
    */
    TreadLength?: IfcPositiveLengthMeasure
    /** Predefined generic type for a stair flight that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcStairFlightType is assigned, providing its own IfcStairFlightType.PredefinedType.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PredefinedType?: IfcStairFlightTypeEnum
}

export default IfcStairFlight