// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuildingSystem

import { IfcBuildingSystemTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcSystem } from './'

/** A building system is a group by which building elements are grouped according to a common function within the facility
 *
 * The group IfcBuildingSystem defines the occurrence of a specialized system for use within the context of a building and finishing fabric.
 *
 * Important functionalities for the description of a building system are derived from supertypes:
 */
 class IfcBuildingSystem extends IfcSystem {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, PredefinedType:IfcBuildingSystemTypeEnum, LongName:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.PredefinedType = PredefinedType
        this.LongName = LongName
    }
    /** Predefined types of distribution systems.
    */
    PredefinedType?: IfcBuildingSystemTypeEnum
    /** Long name for a building system, used for informal purposes.
     * It should be used, if available, in conjunction with the inherited Name attribute.
     * In many scenarios the Name attribute refers to the short name or number of a building system, and the LongName refers to a descriptive name.
    */
    LongName?: IfcLabel
}

export default IfcBuildingSystem