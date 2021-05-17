// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPumpType

import { IfcPumpTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowMovingDeviceType } from './'

/** The flow moving device type IfcPumpType defines commonly shared information for occurrences of pumps.
 *
 * The set of shared information may include: It is used to define a pump type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcPumpType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcPumpType are represented by instances of IfcPump.
 *
 * Refer to the documentation at IfcPump for supported property sets, materials, composition, and ports.
 */
 class IfcPumpType extends IfcFlowMovingDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcPumpTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of pump typically used in building services.
    */
    PredefinedType: IfcPumpTypeEnum
}

export default IfcPumpType