// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReferent

import { IfcReferentTypeEnum, IfcLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcPositioningElement } from './'

/** IfcReferent defines a position at a particular offset along an alignment curve
 *
 * Referents may be used for several scenarios:
 */
 class IfcReferent extends IfcPositioningElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, PredefinedType:IfcReferentTypeEnum, RestartDistance:IfcLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.PredefinedType = PredefinedType
        this.RestartDistance = RestartDistance
    }
    /** Predefined types to define the particular type of the referent.
    */
    PredefinedType?: IfcReferentTypeEnum
    /** Optional value in case of broken linear referencing required to keep stationing further down the alignment unchanged.
    */
    RestartDistance?: IfcLengthMeasure
}

export default IfcReferent