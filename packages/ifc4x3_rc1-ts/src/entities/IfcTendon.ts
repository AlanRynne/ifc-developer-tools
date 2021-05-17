// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTendon

import { IfcTendonTypeEnum, IfcPositiveLengthMeasure, IfcAreaMeasure, IfcForceMeasure, IfcPressureMeasure, IfcNormalisedRatioMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcReinforcingElement } from './'

/** A tendon is a steel element such as a wire, cable, bar, rod, or strand used to impart prestress to concrete when the element is tensioned.
 */
 class IfcTendon extends IfcReinforcingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, SteelGrade:IfcLabel, PredefinedType:IfcTendonTypeEnum, NominalDiameter:IfcPositiveLengthMeasure, CrossSectionArea:IfcAreaMeasure, TensionForce:IfcForceMeasure, PreStress:IfcPressureMeasure, FrictionCoefficient:IfcNormalisedRatioMeasure, AnchorageSlip:IfcPositiveLengthMeasure, MinCurvatureRadius:IfcPositiveLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, SteelGrade)
        this.PredefinedType = PredefinedType
        this.NominalDiameter = NominalDiameter
        this.CrossSectionArea = CrossSectionArea
        this.TensionForce = TensionForce
        this.PreStress = PreStress
        this.FrictionCoefficient = FrictionCoefficient
        this.AnchorageSlip = AnchorageSlip
        this.MinCurvatureRadius = MinCurvatureRadius
    }
    /** Predefined generic types for a tendon.
     * IFC4 CHANGE Attribute made optional.
    */
    PredefinedType?: IfcTendonTypeEnum
    /** The nominal diameter defining the cross-section size of the tendon.
     * IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcTendonType instead.
    */
    NominalDiameter?: IfcPositiveLengthMeasure
    /** The effective cross-section area of the tendon.
     * IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcTendonType instead.
    */
    CrossSectionArea?: IfcAreaMeasure
    /** The maximum allowed tension force that can be applied on the tendon.
    */
    TensionForce?: IfcForceMeasure
    /** The prestress to be applied on the tendon.
    */
    PreStress?: IfcPressureMeasure
    /** The friction coefficient between tendon and tendon sheet while the tendon is unbonded.
    */
    FrictionCoefficient?: IfcNormalisedRatioMeasure
    /** The deformation of an anchor or slippage of tendons when the prestressing device is released.
    */
    AnchorageSlip?: IfcPositiveLengthMeasure
    /** The smallest curvature radius calculated on the whole effective length of the tendon where the tension properties are still valid.
    */
    MinCurvatureRadius?: IfcPositiveLengthMeasure
}

export default IfcTendon