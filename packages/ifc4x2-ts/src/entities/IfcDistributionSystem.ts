// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionSystem

import { IfcLabel, IfcDistributionSystemEnum, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcSystem } from './'

/** A distribution system is a network designed to receive, store, maintain, distribute, or control the flow of a distribution media.
 *
 * A common example is a heating hot water system that consists of a pump, a tank, and an interconnected piping system for distributing hot water to terminals
 *
 * The group IfcDistributionSystem defines the occurrence of a specialized system for use within the context of building services or utilities for built facilities
 *
 * Important functionalities for the description of a distribution system are derived from existing IFC entities:
 */
 class IfcDistributionSystem extends IfcSystem {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, LongName:IfcLabel, PredefinedType:IfcDistributionSystemEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.LongName = LongName
        this.PredefinedType = PredefinedType
    }
    /** Long name for a distribution system, used for informal purposes.
     * It should be used, if available, in conjunction with the inherited Name attribute.
     * In many scenarios the Name attribute refers to the short name or number of a distribution system or branch circuit, and the LongName refers to a descriptive name.
    */
    LongName?: IfcLabel
    /** Predefined types of distribution systems.
    */
    PredefinedType?: IfcDistributionSystemEnum
}

export default IfcDistributionSystem