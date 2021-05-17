// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFacilityPart

import { IfcFacilityPartTypeSelect, IfcFacilityUsageEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcElementCompositionEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcSpatialStructureElement } from './'

/** IfcFacilityPart provides for spatial breakdown of built facilities.
 *
 * It may be further specialised according to the type of facility being broken down, e.g. IfcBuildingStorey for IfcBuilding or IfcBridgePart for IfcBridge.
 */
 class IfcFacilityPart extends IfcSpatialStructureElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum, PredefinedType:IfcFacilityPartTypeSelect, UsageType:IfcFacilityUsageEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName, CompositionType)
        this.PredefinedType = PredefinedType
        this.UsageType = UsageType
    }
    /** undefined
    */
    PredefinedType: IfcFacilityPartTypeSelect
    /** undefined
    */
    UsageType: IfcFacilityUsageEnum
}

export default IfcFacilityPart