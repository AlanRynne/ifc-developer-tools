// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPermeableCoveringProperties

import { IfcPermeableCoveringOperationEnum, IfcWindowPanelPositionEnum, IfcPositiveLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcShapeAspect, IfcOwnerHistory, IfcPropertySetDefinition } from './'

/** This entity is a description of a panel within a door or window (as fillers for opening) which allows for air flow.
 *
 * It is given by its properties (IfcPermeableCoveringProperties).
 *
 * A permeable covering is a casement, such as a component, fixed or opening, consisting essentially of a frame and the infilling.
 *
 * The infilling is normally a grill, a louver or a screen.
 *
 * The way of operation is defined in the operation type
 *
 * The IfcPermeableCoveringProperties are included in the list of properties (HasPropertySets) of the IfcWindowStyle or the IfcDoorStyle.
 *
 * More information about the permeable covering can be included in the same list of the window or door style using the IfcPropertySet for dynamic extensions.
 *
 * This particularly applies for additional properties for the various operation typesThe IfcPermeableCoveringProperties does not hold a geometric representation.
 *
 * However it defines parameters which can be used to create the shape of the IfcWindowStyle (which is inserted by the IfcWindow into the spatial context of the project), or of the IfcDoorStyle (which is inserted by the IfcDoor)
 *
 * The parameters at the IfcPermeableCoveringProperties define a standard permeable covering.
 *
 * The outer boundary of the panel is determined by the occurrence parameter assigned to the IfcWindow or IfcDoor.
 *
 * It has to take the lining parameter into account as well.
 *
 * The position of the permeable covering within the overall window or door is determined by the PanelPosition attribute
 *
 * Figure 298 illustrates the panel applied to the position within the lining, as defined by the panel position attribute.
 *
 * The following parameters apply to that panel: FrameDepth, FrameThickness.
 */
 class IfcPermeableCoveringProperties extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, OperationType:IfcPermeableCoveringOperationEnum, PanelPosition:IfcWindowPanelPositionEnum, FrameDepth:IfcPositiveLengthMeasure, FrameThickness:IfcPositiveLengthMeasure, ShapeAspectStyle:IfcShapeAspect) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.OperationType = OperationType
        this.PanelPosition = PanelPosition
        this.FrameDepth = FrameDepth
        this.FrameThickness = FrameThickness
        this.ShapeAspectStyle = ShapeAspectStyle
    }
    /** Types of permeable covering operations.
     * Also used to assign standard symbolic presentations according to national building standards.
    */
    OperationType: IfcPermeableCoveringOperationEnum
    /** Position of this permeable covering panel within the overall window or door type.
    */
    PanelPosition: IfcWindowPanelPositionEnum
    /** Depth of panel frame (used to include the permeable covering), measured from front face to back face horizontally (i.e. perpendicular to the window or door (elevation) plane.
    */
    FrameDepth?: IfcPositiveLengthMeasure
    /** Width of panel frame (used to include the permeable covering), measured from inside of panel (at permeable covering) to outside of panel (at lining), i.e. parallel to the window or door (elevation) plane.
    */
    FrameThickness?: IfcPositiveLengthMeasure
    /** Optional link to a shape aspect definition, which points to the part of the geometric representation of the window style, which is used to represent the permeable covering.
    */
    ShapeAspectStyle?: IfcShapeAspect
}

export default IfcPermeableCoveringProperties