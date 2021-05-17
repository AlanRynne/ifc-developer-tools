// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcingBarType

import { IfcReinforcingBarTypeEnum, IfcPositiveLengthMeasure, IfcAreaMeasure, IfcReinforcingBarSurfaceEnum, IfcLabel, IfcBendingParameterSelect, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcReinforcingElementType } from './'

/** The reinforcing element type IfcReinforcingBarType defines commonly shared information for occurrences of reinforcing bars.
 *
 * The set of shared information may include: It is used to define a reinforcing bar type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcReinforcingBarType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcReinforcingBarType are represented by instances of IfcReinforcingBar.
 */
 class IfcReinforcingBarType extends IfcReinforcingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcReinforcingBarTypeEnum, NominalDiameter:IfcPositiveLengthMeasure, CrossSectionArea:IfcAreaMeasure, BarLength:IfcPositiveLengthMeasure, BarSurface:IfcReinforcingBarSurfaceEnum, BendingShapeCode:IfcLabel, BendingParameters:Array<IfcBendingParameterSelect>) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
        this.NominalDiameter = NominalDiameter
        this.CrossSectionArea = CrossSectionArea
        this.BarLength = BarLength
        this.BarSurface = BarSurface
        this.BendingShapeCode = BendingShapeCode
        this.BendingParameters = BendingParameters
    }
    /** Subtype of reinforcing bar.
    */
    PredefinedType: IfcReinforcingBarTypeEnum
    /** The nominal diameter defining the cross-section size of the reinforcing bar.
    */
    NominalDiameter?: IfcPositiveLengthMeasure
    /** The effective cross-section area of the reinforcing bar.
    */
    CrossSectionArea?: IfcAreaMeasure
    /** The total length of the reinforcing bar.
     * The total length of bended bars are calculated according to local standards with corrections for the bends.
    */
    BarLength?: IfcPositiveLengthMeasure
    /** Indicator for whether the bar surface is plain or textured.
    */
    BarSurface?: IfcReinforcingBarSurfaceEnum
    /** Shape code per a standard like ACI 315, ISO 3766, or a similar standard.
     * It is presumed that a single standard for defining the bar bending is used throughout the project and that this standard is referenced from the IfcProject object through the IfcDocumentReference mechanism.
    */
    BendingShapeCode?: IfcLabel
    /** Bending shape parameters.
     * Their meaning is defined by the bending shape code and the respective standard.
    */
    BendingParameters?: Array<IfcBendingParameterSelect>
}

export default IfcReinforcingBarType