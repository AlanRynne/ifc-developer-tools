// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcHeatExchanger

import { IfcHeatExchangerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcEnergyConversionDevice } from './'

/** A heat exchanger is a device used to provide heat transfer between non-mixing media such as plate and shell and tube heat exchangers
 *
 * IfcHeatExchanger is commonly used on water-side distribution systems to recover energy from a liquid to another liquid (typically water-based), whereas IfcAirToAirHeatRecovery is commonly used on air-side distribution systems to recover energy from a gas to a gas (usually air).
 */
 class IfcHeatExchanger extends IfcEnergyConversionDevice {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcHeatExchangerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcHeatExchangerTypeEnum
}

export default IfcHeatExchanger