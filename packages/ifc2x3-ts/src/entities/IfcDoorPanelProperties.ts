// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDoorPanelProperties

import { IfcPositiveLengthMeasure, IfcDoorPanelOperationEnum, IfcNormalisedRatioMeasure, IfcDoorPanelPositionEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcShapeAspect, IfcOwnerHistory, IfcPropertySetDefinition } from './'

/** A door panel is normally a door leaf that opens to allow people or goods to pass.
 *
 * The parameters of the door panel define the geometrically relevant parameter of the panel,The IfcDoorPanelProperties are used to parametrically describe the shape and operation of door panels.
 *
 * The parametric definition can be added solely or additionally to the explicit shape representation of the door
 *
 * The IfcDoorType can define doors consisting of more then one panel.
 *
 * In this case, one instance of IfcDoorPanelProperties has to be included for each door panel.
 *
 * The PanelPosition attribute, in conjunction with the IfcDoorStyle
 *
 * OperationType attribute, determines to which panel the IfcDoorPanelProperties apply.
 *
 * The IfcDoorPanelProperties are included in the list of properties , given by attribute HasPropertySets of the IfcDoorType.
 *
 * More information about the door panel can be included in the same list of the IfcDoorStyle using the IfcPropertySet for dynamic extensions
 *
 * The IfcDoorPanelProperties does not hold a geometric representation.
 *
 * However it defines parameters which can be used to create the shape of the door type(which is inserted by the IfcDoor into the spatial context of the project) as shown in Figure 297
 *
 * The parameters of the IfcDoorPanelProperties define a standard door panel, including (if given) a proportional width to define non-uniform double swing (or sliding, or folding) doors.
 *
 * The outer boundary of the panel is determined by the 'Profile' shape representation assigned to the IfcDoor, which inserts the IfcDoorType.
 *
 * It has to take the lining parameter into account as well.
 */
 class IfcDoorPanelProperties extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, PanelDepth:IfcPositiveLengthMeasure, PanelOperation:IfcDoorPanelOperationEnum, PanelWidth:IfcNormalisedRatioMeasure, PanelPosition:IfcDoorPanelPositionEnum, ShapeAspectStyle:IfcShapeAspect) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.PanelDepth = PanelDepth
        this.PanelOperation = PanelOperation
        this.PanelWidth = PanelWidth
        this.PanelPosition = PanelPosition
        this.ShapeAspectStyle = ShapeAspectStyle
    }
    /** Depth of the door panel, measured perpendicular to the plane of the door leaf.
    */
    PanelDepth?: IfcPositiveLengthMeasure
    /** The PanelOperation defines the way of operation of that panel.
     * The PanelOperation of the door panel has to correspond with the OperationType of the IfcDoorStyle by which it is referenced.
    */
    PanelOperation: IfcDoorPanelOperationEnum
    /** Width of this panel, given as ratio relative to the total clear opening width of the door.
     * If omited, it defaults to 1. A value has to be provided for all doors with OperationType's at IfcDoorStyle defining a door with more then one panel.
    */
    PanelWidth?: IfcNormalisedRatioMeasure
    /** Position of this panel within the door.
     * The PanelPosition of the door panel has to correspond with the OperationType of the IfcDoorStyle by which it is referenced.
    */
    PanelPosition: IfcDoorPanelPositionEnum
    /** Pointer to the shape aspect, if given.
     * The shape aspect reflects the part of the door shape, which represents the door panel.
     * DEPRECATION The attribute is deprecated and shall no longer be used, i.e. the value shall be NIL ($).
    */
    ShapeAspectStyle?: IfcShapeAspect
}

export default IfcDoorPanelProperties