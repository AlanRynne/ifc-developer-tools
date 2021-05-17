// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDoor

import { IfcPositiveLengthMeasure, IfcDoorTypeEnum, IfcDoorTypeOperationEnum, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** The door is a building element that is predominately used to provide controlled access for people and goods.
 *
 * It includes constructions with hinged, pivoted, sliding, and additionally revolving and folding operations.
 *
 * A door consists of a lining and one or several panels
 *
 * The IfcDoor defines a particular occurrence of a door inserted in the spatial context of a project.
 *
 * A door can:This specification provides two entities for door occurrences:The actual parameters of the door and/or its shape are defined by the IfcDoor as the occurrence definition (or project instance), or by the IfcDoorType as the specific definition (or project type).
 *
 * The following parameters are given:The geometric representation of IfcDoor is given by the IfcProductDefinitionShape, allowing multiple geometric representations.
 *
 * The IfcDoor may get its parameter and shape from the IfcDoorType.
 *
 * If an IfcRepresentationMap (a block definition) is defined for the IfcDoorType, then the IfcDoor inserts it through the IfcMappedItem
 *
 * The geometric representation of IfcDoor is defined using the following (potentially multiple) IfcShapeRepresentation's for its IfcProductDefinitionShape:In addition the parametric representation of a (limited) door shape is available by applying the parameters from IfcDoorType referencing IfcDoorLiningProperties and IfcDoorPanelProperties.
 *
 * The purpose of the parameter is described at those entities and below (door opening operation by door type)
 *
 * The overall size of the IfcDoor to be used to apply the lining or panel parameter provided by the IfcDoorType is determined by the IfcShapeRepresentation with the RepresentationIdentifier = 'Profile'.
 */
 class IfcDoor extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, OverallHeight:IfcPositiveLengthMeasure, OverallWidth:IfcPositiveLengthMeasure, PredefinedType:IfcDoorTypeEnum, OperationType:IfcDoorTypeOperationEnum, UserDefinedOperationType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.OverallHeight = OverallHeight
        this.OverallWidth = OverallWidth
        this.PredefinedType = PredefinedType
        this.OperationType = OperationType
        this.UserDefinedOperationType = UserDefinedOperationType
    }
    /** Overall measure of the height, it reflects the Z Dimension of a bounding box, enclosing the body of the door opening.
     * If omitted, the OverallHeight should be taken from the geometric representation of the IfcOpening in which the door is inserted.
     * The body of the door might be taller then the door opening (e.g. in cases where the door lining includes a casing).
     * In these cases the OverallHeight shall still be given as the door opening height, and not as the total height of the door lining.
    */
    OverallHeight?: IfcPositiveLengthMeasure
    /** Overall measure of the width, it reflects the X Dimension of a bounding box, enclosing the body of the door opening.
     * If omitted, the OverallWidth should be taken from the geometric representation of the IfcOpening in which the door is inserted.
     * The body of the door might be wider then the door opening (e.g. in cases where the door lining includes a casing).
     * In these cases the OverallWidth shall still be given as the door opening width, and not as the total width of the door lining.
    */
    OverallWidth?: IfcPositiveLengthMeasure
    /** Predefined generic type for a door that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcDoorType is assigned, providing its own IfcDoorType.PredefinedType.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PredefinedType?: IfcDoorTypeEnum
    /** Type defining the general layout and operation of the door type in terms of the partitioning of panels and panel operations.
     * The OperationType shall only be used, if no type object IfcDoorType is assigned, providing its own IfcDoorType.OperationType.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    OperationType?: IfcDoorTypeOperationEnum
    /** Designator for the user defined operation type, shall only be provided, if the value of OperationType is set to USERDEFINED.
    */
    UserDefinedOperationType?: IfcLabel
}

export default IfcDoor