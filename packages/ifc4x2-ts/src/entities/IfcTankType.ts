// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTankType

import { IfcTankTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFlowStorageDeviceType } from './'

/** The flow storage device type IfcTankType defines commonly shared information for occurrences of tanks.
 *
 * The set of shared information may include: It is used to define a tank type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcTankType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcTankType are represented by instances of IfcTank.
 *
 * Refer to the documentation at IfcTank for supported property sets, materials, composition, and ports.
 */
 class IfcTankType extends IfcFlowStorageDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcTankTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the type of tank.
    */
    PredefinedType: IfcTankTypeEnum
}

export default IfcTankType