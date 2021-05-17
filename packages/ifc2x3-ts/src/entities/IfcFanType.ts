// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFanType

import { IfcFanTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowMovingDeviceType } from './'

/** The flow moving device type IfcFanType defines commonly shared information for occurrences of fans.
 *
 * The set of shared information may include: It is used to define a fan type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcFanType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcFanType are represented by instances of IfcFan.
 *
 * Refer to the documentation at IfcFan for supported property sets, materials, composition, and ports.
 */
 class IfcFanType extends IfcFlowMovingDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcFanTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of fan typically used in building services.
    */
    PredefinedType: IfcFanTypeEnum
}

export default IfcFanType