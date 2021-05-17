// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlarmType

import { IfcAlarmTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionControlElementType } from './'

/** The distribution control element type IfcAlarmType defines commonly shared information for occurrences of alarms.
 *
 * The set of shared information may include: It is used to define a alarm type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcAlarmType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcAlarmType are represented by instances of IfcAlarm.
 *
 * Refer to the documentation at IfcAlarm for supported property sets, materials, composition, and ports.
 */
 class IfcAlarmType extends IfcDistributionControlElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcAlarmTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of alarm from which the type required may be set.
    */
    PredefinedType: IfcAlarmTypeEnum
}

export default IfcAlarmType