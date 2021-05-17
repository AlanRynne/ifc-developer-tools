// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcActuatorType

import { IfcActuatorTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionControlElementType } from './'

/** The distribution control element type IfcActuatorType defines commonly shared information for occurrences of actuators.
 *
 * The set of shared information may include: It is used to define a actuator type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcActuatorType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcActuatorType are represented by instances of IfcActuator.
 *
 * Refer to the documentation at IfcActuator for supported property sets, materials, composition, and ports.
 */
 class IfcActuatorType extends IfcDistributionControlElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcActuatorTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of actuator from which the type required may be set.
    */
    PredefinedType: IfcActuatorTypeEnum
}

export default IfcActuatorType