// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWindowType

import { IfcWindowTypeEnum, IfcWindowTypePartitioningEnum, IfcBoolean, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** The element type IfcWindowType defines commonly shared information for occurrences of windows.
 *
 * The set of shared information may include:A window type defines the particular parameter of the lining and one (or several) panels through the IfcWindowLiningProperties and the IfcWindowPanelProperties as predefined property sets applicable to windows only
 *
 * It is used to define a window specification, or window style (the specific product information that is common to all occurrences of that window type).
 *
 * Window types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcWindowType within building models are represented by instances of IfcWindow or IfcWindowStandardCase
 *
 * Partitioning type use definitionThe IfcWindowTypePartitioningEnum defines the general layout of the window type and its symbolic presentation.
 *
 * Depending on the enumerator, the appropriate instances of IfcWindowLiningProperties and IfcWindowPanelProperties are attached in the list of HasPropertySets.
 *
 * The IfcWindowTypePartitioningEnum mainly determines the way of partitioning the window into individual window panels and thereby number and position of window panels
 *
 * See geometry use definitions at IfcWindowTypePartitioningEnum for the correct usage of panel partitioning and IfcWindowPanelProperties for the opening symbols for different panel operation types
 *
 * Material Use DefinitionThe material of the IfcWindowType is defined by the IfcMaterialConstituentSet or as fall back by IfcMaterial and attached by the IfcRelAssociatesMaterial.RelatingMaterial.
 *
 * It is accessible by the inverse HasAssociations relationship
 *
 * The following keywords for IfcMaterialConstituentSet
 *
 * MaterialConstituents[n].Name shall be used:If the fall back single IfcMaterial is referenced, it applies to the lining and framing of the window
 *
 * Geometry Use Definitions:The IfcWindowType may define the common shape of window occurrences.
 *
 * The common shape can be defined by
 */
 class IfcWindowType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcWindowTypeEnum, PartitioningType:IfcWindowTypePartitioningEnum, ParameterTakesPrecedence:IfcBoolean, UserDefinedPartitioningType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
        this.PartitioningType = PartitioningType
        this.ParameterTakesPrecedence = ParameterTakesPrecedence
        this.UserDefinedPartitioningType = UserDefinedPartitioningType
    }
    /** Identifies the predefined types of a window element from which the type required may be set.
    */
    PredefinedType: IfcWindowTypeEnum
    /** Type defining the general layout of the window type in terms of the partitioning of panels.
    */
    PartitioningType: IfcWindowTypePartitioningEnum
    /** The Boolean value reflects, whether the parameter given in the attached lining and panel properties exactly define the geometry (TRUE), or whether the attached style shape take precedence (FALSE).
     * In the last case the parameter have only informative value.
     * If not provided, no such information can be infered.
    */
    ParameterTakesPrecedence?: IfcBoolean
    /** Designator for the user defined partitioning type, shall only be provided, if the value of PartitioningType is set to USERDEFINED.
    */
    UserDefinedPartitioningType?: IfcLabel
}

export default IfcWindowType