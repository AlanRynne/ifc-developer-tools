// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpaceType

import { IfcSpaceTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcSpatialStructureElementType } from './'

/** A space represents an area or volume bounded actually or theoretically.
 *
 * Spaces are areas or volumes that provide for certain functions within a building
 *
 * The IfcSpaceType defines a list of commonly shared defines commonly shared information for occurrences of spaces.
 *
 * The set of shared information may include: It is used to define an space specification (i.e. the specific space information, that is common to all occurrences of that space type.
 *
 * Space types may be exchanged without being already assigned to occurrences.
 *
 * The occurrences of IfcSpaceType are represented by instances of IfcSpace.
 */
 class IfcSpaceType extends IfcSpatialStructureElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcSpaceTypeEnum, LongName:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
        this.LongName = LongName
    }
    /** Predefined types to define the particular type of space.
     * There may be property set definitions available for each predefined type.
    */
    PredefinedType: IfcSpaceTypeEnum
    /** Long name for a space type, used for informal purposes.
     * It should be used, if available, in conjunction with the inherited Name attribute.
     * In many scenarios the Name attribute refers to the short name or number of a space type, and the LongName refers to the full descriptive name.
     * IFC4 CHANGE New attribute added at the end of entity definition.
    */
    LongName?: IfcLabel
}

export default IfcSpaceType