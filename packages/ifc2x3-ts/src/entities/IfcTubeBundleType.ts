// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTubeBundleType

import { IfcTubeBundleTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcTubeBundleType defines commonly shared information for occurrences of tube bundles.
 *
 * The set of shared information may include: It is used to define a tube bundle type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcTubeBundleType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcTubeBundleType are represented by instances of IfcTubeBundle.
 *
 * Refer to the documentation at IfcTubeBundle for supported property sets, materials, composition, and ports.
 */
 class IfcTubeBundleType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcTubeBundleTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of tube bundle.
    */
    PredefinedType: IfcTubeBundleTypeEnum
}

export default IfcTubeBundleType