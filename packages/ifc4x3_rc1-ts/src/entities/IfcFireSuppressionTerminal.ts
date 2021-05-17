// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFireSuppressionTerminal

import { IfcFireSuppressionTerminalTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFlowTerminal } from './'

/** A fire suppression terminal has the purpose of delivering a fluid (gas or liquid) that will suppress a fire
 *
 * A fire suppression terminal provides for all forms of sprinkler, spreader and other form of terminal that is connected to a pipework system and intended to act in the role of suppressing a fire.
 */
 class IfcFireSuppressionTerminal extends IfcFlowTerminal {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcFireSuppressionTerminalTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcFireSuppressionTerminalTypeEnum
}

export default IfcFireSuppressionTerminal