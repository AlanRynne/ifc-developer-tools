// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCoolingTowerType

import { IfcCoolingTowerTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcEnergyConversionDeviceType } from './'

/** The energy conversion device type IfcCoolingTowerType defines commonly shared information for occurrences of cooling towers.
 *
 * The set of shared information may include: It is used to define a cooling tower type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcCoolingTowerType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcCoolingTowerType are represented by instances of IfcCoolingTower.
 *
 * Refer to the documentation at IfcCoolingTower for supported property sets, materials, composition, and ports.
 */
 class IfcCoolingTowerType extends IfcEnergyConversionDeviceType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCoolingTowerTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Defines the typical types of cooling towers (e.g., OpenTower, ClosedTower, CrossFlow, etc.).
    */
    PredefinedType: IfcCoolingTowerTypeEnum
}

export default IfcCoolingTowerType