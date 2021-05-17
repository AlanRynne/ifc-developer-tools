// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBearingType

import { IfcBearingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** 
 */
 class IfcBearingType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcBearingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a bearing element from which the type required may be set.
    */
    PredefinedType: IfcBearingTypeEnum
}

export default IfcBearingType