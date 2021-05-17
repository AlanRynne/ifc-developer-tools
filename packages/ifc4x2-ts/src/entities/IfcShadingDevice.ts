// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcShadingDevice

import { IfcShadingDeviceTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** Shading devices are purpose built devices to protect from the sunlight, from natural light, or screening them from view.
 *
 * Shading devices can form part of the facade or can be mounted inside the building, they can be fixed or operable.
 */
 class IfcShadingDevice extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcShadingDeviceTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a shading device that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcShadingDeviceType is assigned, providing its own IfcShadingDeviceType.PredefinedType.
    */
    PredefinedType?: IfcShadingDeviceTypeEnum
}

export default IfcShadingDevice