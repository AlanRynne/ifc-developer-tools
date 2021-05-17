// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowInstrument

import { IfcFlowInstrumentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcDistributionControlElement } from './'

/** A flow instrument reads and displays the value of a particular property of a system at a point, or displays the difference in the value of a property between two points
 *
 * Instrumentation is typically for the purpose of determining the value of the property at a point in time.
 *
 * It is not the purpose of an instrument to record or integrate the values over time (although they may be connected to recording devices that do perform such a function).
 *
 * This entity provides for all forms of mechanical flow instrument (thermometers, pressure gauges etc.) and electrical flow instruments (ammeters, voltmeters etc.)
 */
 class IfcFlowInstrument extends IfcDistributionControlElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcFlowInstrumentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcFlowInstrumentTypeEnum
}

export default IfcFlowInstrument