// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWindowPanelProperties

import { IfcWindowPanelOperationEnum, IfcWindowPanelPositionEnum, IfcPositiveLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcShapeAspect, IfcOwnerHistory, IfcPropertySetDefinition } from './'

/** A window panel is a casement, that is, a component, fixed or opening, consisting essentially of a frame and the infilling.
 *
 * The infilling of a window panel is normally glazing.
 *
 * The way of operation is defined in the operation type
 *
 * The IfcWindowPanelProperties are used to parametrically describe the shape and operation of window panels.
 *
 * The parametric definition can be added solely or additionally to the explicit shape representation of the window
 *
 * The IfcWindowType can define windows consisting of more then one panel.
 *
 * In this case, one instance of IfcWindowPanelProperties has to be included for each window panel.
 *
 * The PanelPosition attribute, in conjunction with the IfcWindowType
 *
 * OperationType attribute, determines to which panel the IfcWindowPanelPropertiesapply.
 *
 * The IfcWindowPanelProperties are included in the list of properties (HasPropertySets) of the IfcWindowStyle.
 *
 * More information about the window panel can be included in the same list of the IfcWindowType using the IfcPropertySet for dynamic extensions
 *
 * The IfcWindowPanelProperties does not hold an own geometric representation.
 *
 * However it defines parameter, which can be used to create the shape of the IfcWindowType (which is inserted by the IfcWindow into the spatial context of the project).
 *
 * The parameters at the IfcWindowPanelProperties define a standard window panel.
 *
 * The outer boundary of the lining is determined by the 'Profile' shape representation assigned to the IfcWindow, which inserts the IfcWindowType.
 *
 * It has to take the lining parameter into account as well.
 *
 * The position of the window panel within the overall window is determined by the PanelPosition attribute
 *
 * As shown in Figure 300, the panel is applied to the position within the lining as defined by the panel position attribute.
 *
 * The following parameter apply to that panel: FrameDepth, FrameThickness.
 */
 class IfcWindowPanelProperties extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, OperationType:IfcWindowPanelOperationEnum, PanelPosition:IfcWindowPanelPositionEnum, FrameDepth:IfcPositiveLengthMeasure, FrameThickness:IfcPositiveLengthMeasure, ShapeAspectStyle:IfcShapeAspect) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.OperationType = OperationType
        this.PanelPosition = PanelPosition
        this.FrameDepth = FrameDepth
        this.FrameThickness = FrameThickness
        this.ShapeAspectStyle = ShapeAspectStyle
    }
    /** Types of window panel operations.
     * Also used to assign standard symbolic presentations according to national building standards.
    */
    OperationType: IfcWindowPanelOperationEnum
    /** Position of this panel within the overall window style.
    */
    PanelPosition: IfcWindowPanelPositionEnum
    /** Depth of panel frame, measured from front face to back face horizontally (i.e. perpendicular to the window (elevation) plane.
    */
    FrameDepth?: IfcPositiveLengthMeasure
    /** Width of panel frame, measured from inside of panel (at glazing) to outside of panel (at lining), i.e. parallel to the window (elevation) plane.
    */
    FrameThickness?: IfcPositiveLengthMeasure
    /** Optional link to a shape aspect definition, which points to the part of the geometric representation of the window style, which is used to represent the panel.
     * DEPRECATION The attribute is deprecated and shall no longer be used, i.e. the value shall be NIL ($).
    */
    ShapeAspectStyle?: IfcShapeAspect
}

export default IfcWindowPanelProperties