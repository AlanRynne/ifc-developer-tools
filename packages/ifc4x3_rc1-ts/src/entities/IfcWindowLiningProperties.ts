// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWindowLiningProperties

import { IfcPositiveLengthMeasure, IfcNonNegativeLengthMeasure, IfcNormalisedRatioMeasure, IfcLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcShapeAspect, IfcOwnerHistory, IfcPreDefinedPropertySet } from './'

/** The window lining is the outer frame which enables the window to be fixed in position.
 *
 * The window lining is used to hold the window panels or other casements.
 *
 * The parameter of the IfcWindowLiningProperties define the geometrically relevant parameter of the lining
 *
 * The IfcWindowLiningProperties are included in the set of properties of IfcWindowStyle.HasPropertySets.
 *
 * More information about the window lining can be included in the same set of the IfcWindowType using another IfcPropertySet for dynamic extensions
 *
 * The IfcWindowLiningProperties does not hold a geometric representation.
 *
 * However it defines parameters which can be used to create the shape of the window type(which is inserted by the IfcWindow into the spatial context of the project) as shown in Figure 299.
 *
 * The parameters at the IfcWindowLiningProperties define a standard window lining, including (if given) a mullion and a transom (for horizontal and vertical splits).
 *
 * The outer boundary of the lining is determined by the 'Profile' shape representation assigned to the IfcWindow, which inserts the IfcWindowType.
 */
 class IfcWindowLiningProperties extends IfcPreDefinedPropertySet {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, LiningDepth:IfcPositiveLengthMeasure, LiningThickness:IfcNonNegativeLengthMeasure, TransomThickness:IfcNonNegativeLengthMeasure, MullionThickness:IfcNonNegativeLengthMeasure, FirstTransomOffset:IfcNormalisedRatioMeasure, SecondTransomOffset:IfcNormalisedRatioMeasure, FirstMullionOffset:IfcNormalisedRatioMeasure, SecondMullionOffset:IfcNormalisedRatioMeasure, ShapeAspectStyle:IfcShapeAspect, LiningOffset:IfcLengthMeasure, LiningToPanelOffsetX:IfcLengthMeasure, LiningToPanelOffsetY:IfcLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.LiningDepth = LiningDepth
        this.LiningThickness = LiningThickness
        this.TransomThickness = TransomThickness
        this.MullionThickness = MullionThickness
        this.FirstTransomOffset = FirstTransomOffset
        this.SecondTransomOffset = SecondTransomOffset
        this.FirstMullionOffset = FirstMullionOffset
        this.SecondMullionOffset = SecondMullionOffset
        this.ShapeAspectStyle = ShapeAspectStyle
        this.LiningOffset = LiningOffset
        this.LiningToPanelOffsetX = LiningToPanelOffsetX
        this.LiningToPanelOffsetY = LiningToPanelOffsetY
    }
    /** Depth of the window lining (dimension measured perpendicular to window elevation plane).
    */
    LiningDepth?: IfcPositiveLengthMeasure
    /** Thickness of the window lining as explained in the figure above.
     * If LiningThickness value is 0. (zero) it denotes a window without a lining (all other lining parameters shall be set to NIL in this case).
     * If the LiningThickness is NIL it denotes that the value is not available.
     * IFC4 CHANGE Data type modified to be IfcNonNegativeLengthMeasure.
    */
    LiningThickness?: IfcNonNegativeLengthMeasure
    /** Thickness of the transom (horizontal separator of window panels within a window), measured parallel to the window elevation plane.
     * The transom is part of the lining and the transom depth is assumed to be identical to the lining depth.
     * If the TransomThickness is set to zero (and the TransomOffset set to a positive length), then the window is divided vertically without a physical divider.
     * IFC4 CHANGE Data type changed to IfcNonNegativeLengthMeasure.
    */
    TransomThickness?: IfcNonNegativeLengthMeasure
    /** Thickness of the mullion (vertical separator of window panels within a window), measured parallel to the window elevation plane.
     * The mullion is part of the lining and the mullion depth is assumed to be identical to the lining depth.
     * If the MullionThickness is set to zero (and the MullionOffset set to a positive length), then the window is divided horizontally without a physical divider.
     * IFC4 CHANGE Data type changed to IfcNonNegativeLengthMeasure.
    */
    MullionThickness?: IfcNonNegativeLengthMeasure
    /** Offset of the transom centerline, measured along the z-axis of the window placement co-ordinate system.
     * An offset value = 0.5 indicates that the transom is positioned in the middle of the window.
    */
    FirstTransomOffset?: IfcNormalisedRatioMeasure
    /** Offset of the transom centerline for the second transom, measured along the x-axis of the window placement co-ordinate system.
     * An offset value = 0.666 indicates that the second transom is positioned at two/third of the window.
    */
    SecondTransomOffset?: IfcNormalisedRatioMeasure
    /** Offset of the mullion centerline, measured along the x-axis of the window placement co-ordinate system.
     * An offset value = 0.5 indicates that the mullion is positioned in the middle of the window.
    */
    FirstMullionOffset?: IfcNormalisedRatioMeasure
    /** Offset of the mullion centerline for the second mullion, measured along the x-axis of the window placement co-ordinate system.
     * An offset value = 0.666 indicates that the second mullion is positioned at two/third of the window.
    */
    SecondMullionOffset?: IfcNormalisedRatioMeasure
    /** Optional link to a shape aspect definition, which points to the part of the geometric representation of the window style, which is used to represent the lining.
     * IFC4 CHANGE The attribute is deprecated and shall no longer be used, i.e. the value shall be NIL ($).
    */
    ShapeAspectStyle?: IfcShapeAspect
    /** Offset of the window lining.
     * The offset is given as distance along the y axis of the local placement (perpendicular to the window plane).
     * IFC4 CHANGE New attribute added at the end of the entity definition.
    */
    LiningOffset?: IfcLengthMeasure
    /** Offset between the lining and the window panel measured along the x-axis of the local placement.
     * Should be smaller or equal to the LiningThickness.
     * IFC4 CHANGE New attribute added at the end of the entity definition.
    */
    LiningToPanelOffsetX?: IfcLengthMeasure
    /** Offset between the lining and the window panel measured along the y-axis of the local placement.
     * Should be smaller or equal to the IfcWindowPanelProperties.PanelThickness.
     * IFC4 CHANGE New attribute added at the end of the entity definition.
    */
    LiningToPanelOffsetY?: IfcLengthMeasure
}

export default IfcWindowLiningProperties