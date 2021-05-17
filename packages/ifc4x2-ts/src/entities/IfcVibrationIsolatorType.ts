// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcVibrationIsolatorType

import { IfcVibrationIsolatorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementComponentType } from './'

/** The element component type IfcVibrationIsolatorType defines commonly shared information for occurrences of vibration isolators.
 *
 * The set of shared information may include: It is used to define a vibration isolator type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcVibrationIsolatorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcVibrationIsolatorType are represented by instances of IfcVibrationIsolator.
 *
 * Refer to the documentation at IfcVibrationIsolator for supported property sets, materials, and composition.
 */
 class IfcVibrationIsolatorType extends IfcElementComponentType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcVibrationIsolatorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of vibration isolator.
    */
    PredefinedType: IfcVibrationIsolatorTypeEnum
}

export default IfcVibrationIsolatorType