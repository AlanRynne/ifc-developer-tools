// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDoorType

import { IfcDoorTypeEnum, IfcDoorTypeOperationEnum, IfcBoolean, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuiltElementType } from './'

/** The element type IfcDoorType defines commonly shared information for occurrences of doors.
 *
 * The set of shared information may include:A door type defines the particular parameter of the lining and one (or several) panels through the IfcDoorLiningProperties and the IfcDoorPanelProperties as predefined property sets applicable to doors only
 *
 * It is used to define a door specification, or door style (i.e. the specific product information that is common to all occurrences of that door type).
 *
 * Door types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcDoorType within building models are represented by instances of IfcDoor or IfcDoorStandardCase
 *
 * Operation type use definitionThe IfcDoorTypeOperationEnum defines the general layout of the door type and its symbolic presentation.
 *
 * Depending on the enumerator, the appropriate instances of IfcDoorLiningProperties and IfcDoorPanelProperties are attached in the list of HasPropertySets.
 *
 * The IfcDoorTypeOperationEnum mainly determines the hinge side (left hung, or right hung), the operation (swinging, sliding, folding, etc.) and the number of panels
 *
 * See geometry use definitions at IfcDoorTypeOperationEnum for the correct usage of opening symbols for different operation types
 *
 * Material Use DefinitionThe material of the IfcDoorType is defined by the IfcMaterialConstituentSet or as fall back by IfcMaterial and attached by the IfcRelAssociatesMaterial.RelatingMaterial.
 *
 * It is accessible by the inverse HasAssociations relationship
 *
 * The following keywords for IfcMaterialConstituentSet
 *
 * MaterialConstituents[n].Name shall be used:If the fall back single IfcMaterial is referenced, it applies to the lining and framing of the door
 *
 * Geometry Use Definitions:The IfcDoorType may define the common shape of door occurrences.
 *
 * The common shape can be defined by
 */
 class IfcDoorType extends IfcBuiltElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcDoorTypeEnum, OperationType:IfcDoorTypeOperationEnum, ParameterTakesPrecedence:IfcBoolean, UserDefinedOperationType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
        this.OperationType = OperationType
        this.ParameterTakesPrecedence = ParameterTakesPrecedence
        this.UserDefinedOperationType = UserDefinedOperationType
    }
    /** Identifies the predefined types of a door element from which the type required may be set.
    */
    PredefinedType: IfcDoorTypeEnum
    /** Type defining the general layout and operation of the door type in terms of the partitioning of panels and panel operations.
    */
    OperationType: IfcDoorTypeOperationEnum
    /** The Boolean value reflects, whether the parameter given in the attached lining and panel properties exactly define the geometry (TRUE), or whether the attached style shape take precedence (FALSE).
     * In the last case the parameter have only informative value.
     * If not provided, no such information can be infered.
    */
    ParameterTakesPrecedence?: IfcBoolean
    /** Designator for the user defined operation type, shall only be provided, if the value of OperationType is set to USERDEFINED.
    */
    UserDefinedOperationType?: IfcLabel
}

export default IfcDoorType