// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDoorLiningProperties

import { IfcPositiveLengthMeasure, IfcNonNegativeLengthMeasure, IfcLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcShapeAspect, IfcOwnerHistory, IfcPreDefinedPropertySet } from './'

/** The door lining is the frame which enables the door leaf to be fixed in position.
 *
 * The door lining is used to hang the door leaf.
 *
 * The parameters of the door lining define the geometrically relevant parameter of the lining
 *
 * The IfcDoorLiningProperties are included in the list of properties of IfcDoorType.HasPropertySets.
 *
 * More information about the door lining can be included in the same list of the IfcDoorTyype using another IfcPropertySet for dynamic extensions
 *
 * The IfcDoorLiningProperties does not hold its own geometric representation.
 *
 * However it defines parameters which can be used to create the shape of the door type (which is inserted by the IfcDoor into the spatial context of the project) as shown in Figure 296.
 *
 * The parameters of the IfcDoorLiningProperties define a standard door lining, including (if given) a threshold and a transom.
 *
 * The outer boundary of the lining is determined by the 'Profile' shape representation assigned to the IfcDoor, which inserts the IfcDoorType.
 */
 class IfcDoorLiningProperties extends IfcPreDefinedPropertySet {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, LiningDepth:IfcPositiveLengthMeasure, LiningThickness:IfcNonNegativeLengthMeasure, ThresholdDepth:IfcPositiveLengthMeasure, ThresholdThickness:IfcNonNegativeLengthMeasure, TransomThickness:IfcNonNegativeLengthMeasure, TransomOffset:IfcLengthMeasure, LiningOffset:IfcLengthMeasure, ThresholdOffset:IfcLengthMeasure, CasingThickness:IfcPositiveLengthMeasure, CasingDepth:IfcPositiveLengthMeasure, ShapeAspectStyle:IfcShapeAspect, LiningToPanelOffsetX:IfcLengthMeasure, LiningToPanelOffsetY:IfcLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.LiningDepth = LiningDepth
        this.LiningThickness = LiningThickness
        this.ThresholdDepth = ThresholdDepth
        this.ThresholdThickness = ThresholdThickness
        this.TransomThickness = TransomThickness
        this.TransomOffset = TransomOffset
        this.LiningOffset = LiningOffset
        this.ThresholdOffset = ThresholdOffset
        this.CasingThickness = CasingThickness
        this.CasingDepth = CasingDepth
        this.ShapeAspectStyle = ShapeAspectStyle
        this.LiningToPanelOffsetX = LiningToPanelOffsetX
        this.LiningToPanelOffsetY = LiningToPanelOffsetY
    }
    /** Depth of the door lining, measured perpendicular to the plane of the door lining.
     * If omitted (and with a given value to lining thickness) it indicates an adjustable depth (i.e. a depth that adjusts to the thickness of the wall into which the occurrence of this door style is inserted).
    */
    LiningDepth?: IfcPositiveLengthMeasure
    /** Thickness of the door lining as explained in the figure above.
     * If LiningThickness value is 0. (zero) it denotes a door without a lining (all other lining parameters shall be set to NIL in this case).
     * If the LiningThickness is NIL it denotes that the value is not available.
     * IFC4 CHANGE Data type modified to be IfcNonNegativeLengthMeasure.
    */
    LiningThickness?: IfcNonNegativeLengthMeasure
    /** Depth (dimension in plane perpendicular to door leaf) of the door threshold.
     * Only given if the door lining includes a threshold.
     * If omitted (and with a given value to threshold thickness) it indicates an adjustable depth (i.e. a depth that adjusts to the thickness of the wall into which the occurrence of this door style is inserted).
    */
    ThresholdDepth?: IfcPositiveLengthMeasure
    /** Thickness of the door threshold as explained in the figure above.
     * If ThresholdThickness value is 0. (zero) it denotes a door without a threshold (ThresholdDepth shall be set to NIL in this case).
     * If the ThresholdThickness is NIL it denotes that the information about a threshold is not available.
     * IFC4 CHANGE Data type modified to be IfcNonNegativeLengthMeasure.
    */
    ThresholdThickness?: IfcNonNegativeLengthMeasure
    /** Thickness (width in plane parallel to door leaf) of the transom (if provided - that is, if the TransomOffset attribute is set), which divides the door leaf from a glazing (or window) above.
     * If the TransomThickness is set to zero (and the TransomOffset set to a positive length), then the door is divided vertically into a leaf and transom window area without a physical frame.
     * IFC4 CHANGE Data type changed to IfcNonNegativeLengthMeasure.
    */
    TransomThickness?: IfcNonNegativeLengthMeasure
    /** Offset of the transom (if given) which divides the door leaf from a glazing (or window) above.
     * The offset is given from the bottom of the door opening.
    */
    TransomOffset?: IfcLengthMeasure
    /** Offset (dimension in plane perpendicular to door leaf) of the door lining.
     * The offset is given as distance to the x axis of the local placement.
    */
    LiningOffset?: IfcLengthMeasure
    /** Offset (dimension in plane perpendicular to door leaf) of the door threshold.
     * The offset is given as distance to the x axis of the local placement.
     * Only given if the door lining includes a threshold and the parameter is known.
    */
    ThresholdOffset?: IfcLengthMeasure
    /** Thickness of the casing (dimension in plane of the door leaf).
     * If given it is applied equally to all four sides of the adjacent wall.
    */
    CasingThickness?: IfcPositiveLengthMeasure
    /** Depth of the casing (dimension in plane perpendicular to door leaf).
     * If given it is applied equally to all four sides of the adjacent wall.
    */
    CasingDepth?: IfcPositiveLengthMeasure
    /** Pointer to the shape aspect, if given.
     * The shape aspect reflects the part of the door shape, which represents the door lining.
     * IFC4 CHANGE The attribute is deprecated and shall no longer be used, i.e. the value shall be NIL ($).
    */
    ShapeAspectStyle?: IfcShapeAspect
    /** Offset between the lining and the window panel measured along the x-axis of the local placement.
     * IFC4 CHANGE New attribute added at the end of the entity definition.
    */
    LiningToPanelOffsetX?: IfcLengthMeasure
    /** Offset between the lining and the door panel measured along the y-axis of the local placement.
     * IFC4 CHANGE New attribute added at the end of the entity definition.
    */
    LiningToPanelOffsetY?: IfcLengthMeasure
}

export default IfcDoorLiningProperties