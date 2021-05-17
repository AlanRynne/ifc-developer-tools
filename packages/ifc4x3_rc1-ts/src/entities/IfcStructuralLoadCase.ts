// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoadCase

import { IfcRatioMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcLoadGroupTypeEnum, IfcActionTypeEnum, IfcActionSourceTypeEnum } from '../types'
import { IfcOwnerHistory, IfcStructuralLoadGroup } from './'

/** A load case is a load group, commonly used to group loads from the same action source.
 */
 class IfcStructuralLoadCase extends IfcStructuralLoadGroup {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, PredefinedType:IfcLoadGroupTypeEnum, ActionType:IfcActionTypeEnum, ActionSource:IfcActionSourceTypeEnum, Coefficient:IfcRatioMeasure, Purpose:IfcLabel, SelfWeightCoefficients:Array<IfcRatioMeasure>) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, PredefinedType, ActionType, ActionSource, Coefficient, Purpose)
        this.SelfWeightCoefficients = SelfWeightCoefficients
    }
    /** The self weight coefficients specify ratios at which loads due to weight of members shall be included in the load case.
     * These loads are not explicitly modeled as instances of IfcStructuralAction.
     * Instead they shall be calculated according to geometry, section, and material of each member.
     * The three components of the self weight vector correspond with the x,y,z directions of the so-called global coordinates, i.e. the directions of the shared ObjectPlacement of all items in an IfcStructuralAnalysisModel.
     * For example, if the object placement defines a z axis which is upright like the IfcProject's world coordinate system, then the self weight coefficients would typically be [0.,0.,-1.] in a load case of dead loads with self weight.
     * The overall coefficient in the inherited attribute Coefficient shall not be applied to SelfWeightCoefficients of the same instance of IfcStructuralLoadCase.
     * It only applies to actions and load groups which are grouped below the load case, not to the load case's computed self weight.
    */
    SelfWeightCoefficients?: Array<IfcRatioMeasure>
}

export default IfcStructuralLoadCase