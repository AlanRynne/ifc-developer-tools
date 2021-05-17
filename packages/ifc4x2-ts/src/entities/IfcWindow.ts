// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWindow

import { IfcPositiveLengthMeasure, IfcWindowTypeEnum, IfcWindowTypePartitioningEnum, IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** The window is a building element that is predominately used to provide natural light and fresh air.
 *
 * It includes vertical opening but also horizontal opening such as skylights or light domes.
 *
 * It includes constructions with swinging, pivoting, sliding, or revolving panels and fixed panels.
 *
 * A window consists of a lining and one or several panels
 *
 * The IfcWindow defines a particular occurrence of a window inserted in the spatial context of a project.
 *
 * A window can:There are two entities for window occurrences:The actual parameter of the window and/or its shape is defined at the IfcWindow as the occurrence definition (or project instance), or by the IfcWindowType as the specific definition (or project type).
 *
 * The following parameters are given:Parameteric Representation using parameters at IfcWindowTypeThe parameters, which define the shape of the IfcWindow, are given at the IfcWindowType and the property sets, which are included in the IfcWindowType.
 *
 * The IfcWindow only defines the local placement.
 *
 * The overall size of the IfcWindow to be used to apply the lining or panel parameter provided by the IfcWindowType is determined by the IfcShapeRepresentation with the RepresentationIdentifier = 'Profile'.
 *
 * Only in case of an IfcWindow inserted into an IfcOpeningElement using the IfcRelFillsElement relatioship, having a horizontal extrusion (along the y-axis of the IfcDoor), the overall size is determined by the extrusion profile of the IfcOpeningElement
 *
 * Figure 270 illustrates the insertion of a window into the IfcOpeningElement by creating an instance of IfcWindow with PartitioningType = DoublePanelHorizontal.
 *
 * The parameters OverallHeight and OverallWidth show the extent of the window in the positive Z and X axis of the local placement of the window.
 *
 * The lining and the transom are created by the given parameters
 *
 * Figure 271 illustrates the final window (DoublePanelHorizontal) with first panel having PanelPosition = TOP, OperationType = BOTTOMHUNG and second panel having PanelPosition = BOTTOM and OperationType = TILTANDTURNLEFTHAND
 *
 * Window opening operation by window typeThe parameters that defines the shape of the IfcWindow, are given at the IfcWindowType and the property sets, which are included in the IfcWindowType.
 *
 * The IfcWindow only defines the local placement which determines the opening direction of the window.
 *
 * The overall layout of the IfcWindow is determined by its IfcWindowType.PartitioningType.
 *
 * Each window panel has its own operation type, provided by IfcWindowPanelProperties.OperationType.
 *
 * All window panels are assumed to open into the same direction (if relevant for the particular window panel operation.
 *
 * The hindge side (whether a window opens to the left or to the right) is determined by the IfcWindowPanelProperties
 *
 * OperationType.Figure 272 illustrates window operation types.
 */
 class IfcWindow extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, OverallHeight:IfcPositiveLengthMeasure, OverallWidth:IfcPositiveLengthMeasure, PredefinedType:IfcWindowTypeEnum, PartitioningType:IfcWindowTypePartitioningEnum, UserDefinedPartitioningType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.OverallHeight = OverallHeight
        this.OverallWidth = OverallWidth
        this.PredefinedType = PredefinedType
        this.PartitioningType = PartitioningType
        this.UserDefinedPartitioningType = UserDefinedPartitioningType
    }
    /** Overall measure of the height, it reflects the Z Dimension of a bounding box, enclosing the window opening.
     * If omitted, the OverallHeight should be taken from the geometric representation of the IfcOpening in which the window is inserted.
     * The body of the window might be taller then the window opening (for example in cases where the window lining includes a casing).
     * In these cases the OverallHeight shall still be given as the window opening height, and not as the total height of the window lining.
    */
    OverallHeight?: IfcPositiveLengthMeasure
    /** Overall measure of the width, it reflects the X Dimension of a bounding box, enclosing the window opening.
     * If omitted, the OverallWidth should be taken from the geometric representation of the IfcOpening in which the window is inserted.
     * The body of the window might be wider then the window opening (for example in cases where the window lining includes a casing).
     * In these cases the OverallWidth shall still be given as the window opening width, and not as the total width of the window lining.
    */
    OverallWidth?: IfcPositiveLengthMeasure
    /** Predefined generic type for a window that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcWindowType is assigned, providing its own IfcWindowType.PredefinedType.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PredefinedType?: IfcWindowTypeEnum
    /** Type defining the general layout of the window in terms of the partitioning of panels.
     * The PartitioningType shall only be used, if no type object IfcWindowType is assigned, providing its own IfcWindowType.PartitioningType.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PartitioningType?: IfcWindowTypePartitioningEnum
    /** Designator for the user defined partitioning type, shall only be provided, if the value of PartitioningType is set to USERDEFINED.
    */
    UserDefinedPartitioningType?: IfcLabel
}

export default IfcWindow