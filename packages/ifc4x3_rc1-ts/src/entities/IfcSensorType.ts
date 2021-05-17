// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSensorType

import { IfcSensorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionControlElementType } from './'

/** The distribution control element type IfcSensorType defines commonly shared information for occurrences of sensors.
 *
 * The set of shared information may include: It is used to define a sensor type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcSensorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcSensorType are represented by instances of IfcSensor.
 *
 * Refer to the documentation at IfcSensor for supported property sets, materials, composition, and ports.
 */
 class IfcSensorType extends IfcDistributionControlElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcSensorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of sensor from which the type required may be set.
    */
    PredefinedType: IfcSensorTypeEnum
}

export default IfcSensorType