// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpatialZoneType

import { IfcSpatialZoneTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcSpatialElementType } from './'

/** The IfcSpatialZoneType defines a list of commonly shared property set definitions of a space and an optional set of product representations.
 *
 * It is used to define a space specification (i.e. the specific space information, that is common to all occurrences of that space type).
 *
 * A spatial zone type is used to define the common properties of a certain type of space that may be applied to many instances of that type to assign a specific style.
 *
 * Space types may be exchanged without being already assigned to occurrences.
 *
 * The occurrences of IfcSpatialZoneType are represented by instances of IfcSpatialZone.
 */
 class IfcSpatialZoneType extends IfcSpatialElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcSpatialZoneTypeEnum, LongName:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
        this.LongName = LongName
    }
    /** Predefined types to define the particular type of the spatial zone.
     * There may be property set definitions available for each predefined type.
    */
    PredefinedType: IfcSpatialZoneTypeEnum
    /** Long name for a spatial zone type, used for informal purposes.
     * It should be used, if available, in conjunction with the inherited Name attribute.
     * In many scenarios the Name attribute refers to the short name or number of a spatial zone, and the LongName refers to the full descriptive name.
    */
    LongName?: IfcLabel
}

export default IfcSpatialZoneType