// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWasteTerminal

import { IfcWasteTerminalTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowTerminal } from './'

/** A waste terminal has the purpose of collecting or intercepting waste from one or more sanitary terminals or other fluid waste generating equipment and discharging it into a single waste/drainage system
 *
 * A waste terminal provides for all forms of trap and waste point that collects discharge from a sanitary terminal and discharges it into a waste/drainage subsystem or that collects waste from several terminals and passes it into a single waste/drainage subsystem.
 *
 * This includes the P and S traps from soil sanitary terminals, sinks, and basins as well as floor wastes and gully traps that provide collection points.
 */
 class IfcWasteTerminal extends IfcFlowTerminal {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcWasteTerminalTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcWasteTerminalTypeEnum
}

export default IfcWasteTerminal