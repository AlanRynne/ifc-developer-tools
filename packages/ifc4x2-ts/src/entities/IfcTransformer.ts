// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTransformer

import { IfcTransformerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcEnergyConversionDevice } from './'

/** A transformer is an inductive stationary device that transfers electrical energy from one circuit to another
 *
 * IfcTransformer is used to transform electric power; conversion of electric signals for other purposes is handled at other entities: IfcController converts arbitrary signals, IfcAudioVisualAppliance converts signals for audio or video streams, and IfcCommunicationsAppliance converts signals for data or other communications usage.
 */
 class IfcTransformer extends IfcEnergyConversionDevice {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcTransformerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcTransformerTypeEnum
}

export default IfcTransformer