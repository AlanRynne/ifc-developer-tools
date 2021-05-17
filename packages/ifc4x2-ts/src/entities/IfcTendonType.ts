// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTendonType

import { IfcTendonTypeEnum, IfcPositiveLengthMeasure, IfcAreaMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcReinforcingElementType } from './'

/** The reinforcing element type IfcTendonType defines commonly shared information for occurrences of tendons.
 *
 * The set of shared information may include: It is used to define a tendon type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcTendonType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcTendonType are represented by instances of IfcTendon
 *
 * Material Use DefinitionAn associated material denotes the steel grade, preferrably via material classification.
 *
 * A material constituent set or material profile set may be associated if the cable, bonding mortar or corrosion protection, and tendon sheeth are to be described together by the material association
 *
 * Geometry Use DefinitionThe IfcTendonType may define the shared geometric representation for many tendon occurrences.
 *
 * The RepresentationMaps attribute refers to a list of IfcRepresentationMap's, that allow for multiple geometric representations.
 */
 class IfcTendonType extends IfcReinforcingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcTendonTypeEnum, NominalDiameter:IfcPositiveLengthMeasure, CrossSectionArea:IfcAreaMeasure, SheathDiameter:IfcPositiveLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
        this.NominalDiameter = NominalDiameter
        this.CrossSectionArea = CrossSectionArea
        this.SheathDiameter = SheathDiameter
    }
    /** Subtype of tendon.
    */
    PredefinedType: IfcTendonTypeEnum
    /** The nominal diameter defining the cross-section size of the prestressed part of the tendon.
    */
    NominalDiameter?: IfcPositiveLengthMeasure
    /** The effective cross-section area of the prestressed part of the tendon.
    */
    CrossSectionArea?: IfcAreaMeasure
    /** Diameter of the sheeth (duct) around the tendon, if there is one with this type of tendon.
    */
    SheathDiameter?: IfcPositiveLengthMeasure
}

export default IfcTendonType