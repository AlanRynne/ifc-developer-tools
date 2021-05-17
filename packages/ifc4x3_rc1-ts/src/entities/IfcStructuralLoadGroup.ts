// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadGroup

import { IfcLoadGroupTypeEnum, IfcActionTypeEnum, IfcActionSourceTypeEnum, IfcRatioMeasure, IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcGroup } from './'

/** The entity IfcStructuralLoadGroup is used to structure the physical impacts.
 *
 * By using the grouping features inherited from IfcGroup, instances of IfcStructuralAction (or its subclasses) and of IfcStructuralLoadGroup can be used to define load groups, load cases and load combinations.
 *
 * (See also IfcLoadGroupTypeEnum.)Informal Propositions:
 */
 class IfcStructuralLoadGroup extends IfcGroup {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, PredefinedType:IfcLoadGroupTypeEnum, ActionType:IfcActionTypeEnum, ActionSource:IfcActionSourceTypeEnum, Coefficient:IfcRatioMeasure, Purpose:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.PredefinedType = PredefinedType
        this.ActionType = ActionType
        this.ActionSource = ActionSource
        this.Coefficient = Coefficient
        this.Purpose = Purpose
    }
    /** Selects a predefined type for the load group.
     * It can be differentiated between load groups, load cases, load combinations, or userdefined grouping levels.
    */
    PredefinedType: IfcLoadGroupTypeEnum
    /** Type of actions in the group.
     * Normally needed if 'PredefinedType' specifies a LOAD_CASE.
    */
    ActionType: IfcActionTypeEnum
    /** Source of actions in the group.
     * Normally needed if 'PredefinedType' specifies a LOAD_CASE.
    */
    ActionSource: IfcActionSourceTypeEnum
    /** Load factor.
     * If omitted, a factor is not yet known or not specified.
     * A load factor of 1.0 shall be explicitly exported as Coefficient = 1.0.
    */
    Coefficient?: IfcRatioMeasure
    /** Description of the purpose of this instance.
     * Among else, possible values of the Purpose of load combinations are 'SLS', 'ULS', 'ALS' to indicate serviceability, ultimate, or accidental limit state.
    */
    Purpose?: IfcLabel
}

export default IfcStructuralLoadGroup