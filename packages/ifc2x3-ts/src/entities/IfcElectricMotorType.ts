// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElectricMotorType

import { IfcElectricMotorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcElectricMotorType defines commonly shared information for occurrences of electric motors.
 *
 * The set of shared information may include: It is used to define a electric motor type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcElectricMotorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcElectricMotorType are represented by instances of IfcElectricMotor.
 *
 * Refer to the documentation at IfcElectricMotor for supported property sets, materials, composition, and ports.
 */
 class IfcElectricMotorType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcElectricMotorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of electric motor from which the type required may be set.
    */
    PredefinedType: IfcElectricMotorTypeEnum
}

export default IfcElectricMotorType