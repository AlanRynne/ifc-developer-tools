// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralResultGroup

import { IfcAnalysisTheoryTypeEnum, IfcBoolean, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcStructuralLoadGroup, IfcOwnerHistory, IfcGroup } from './'

/** Instances of the entity IfcStructuralResultGroup are used to group results of structural analysis calculations and to capture the connection to the underlying basic load group.
 *
 * The basic functionality for grouping inherited from IfcGroup is used to collect instances from IfcStructuralReaction or its respective subclasses.
 */
 class IfcStructuralResultGroup extends IfcGroup {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, TheoryType:IfcAnalysisTheoryTypeEnum, ResultForLoadGroup:IfcStructuralLoadGroup, IsLinear:IfcBoolean) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.TheoryType = TheoryType
        this.ResultForLoadGroup = ResultForLoadGroup
        this.IsLinear = IsLinear
    }
    /** Specifies the analysis theory used to obtain the respective results.
    */
    TheoryType: IfcAnalysisTheoryTypeEnum
    /** Reference to an instance of IfcStructuralLoadGroup for which this instance represents the result.
    */
    ResultForLoadGroup?: IfcStructuralLoadGroup
    /** This value allows to easily recognize whether a linear analysis has been applied (allowing the superposition of analysis results).
    */
    IsLinear: IfcBoolean
}

export default IfcStructuralResultGroup