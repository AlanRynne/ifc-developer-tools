// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMotorConnectionType

import { IfcMotorConnectionTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcMotorConnectionType defines commonly shared information for occurrences of motor connections.
 *
 * The set of shared information may include: It is used to define a motor connection type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcMotorConnectionType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcMotorConnectionType are represented by instances of IfcMotorConnection.
 *
 * Refer to the documentation at IfcMotorConnection for supported property sets, materials, composition, and ports.
 */
 class IfcMotorConnectionType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcMotorConnectionTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of motor connection from which the type required may be set.
    */
    PredefinedType: IfcMotorConnectionTypeEnum
}

export default IfcMotorConnectionType