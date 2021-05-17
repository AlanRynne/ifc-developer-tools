// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIShapeProfileDef

import { IfcPositiveLengthMeasure, IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcAxis2Placement2D, IfcParameterizedProfileDef } from './'

/** IfcIShapeProfileDef defines a section profile that provides the defining parameters of an 'I' or 'H' section.
 *
 * The I-shape profile has values for its overall depth, width and its web and flange thicknesses.
 *
 * Additionally a fillet radius, flange edge radius, and flange slope may be given.
 *
 * This profile definition represents an I-section which is symmetrical about its major and minor axes; top and bottom flanges are equal and centred on the web
 *
 * Figure 422 illustrates parameters of the I-shape profile definition.
 */
 class IfcIShapeProfileDef extends IfcParameterizedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D, OverallWidth:IfcPositiveLengthMeasure, OverallDepth:IfcPositiveLengthMeasure, WebThickness:IfcPositiveLengthMeasure, FlangeThickness:IfcPositiveLengthMeasure, FilletRadius:IfcPositiveLengthMeasure) {
        super(ProfileType, ProfileName, Position)
        this.OverallWidth = OverallWidth
        this.OverallDepth = OverallDepth
        this.WebThickness = WebThickness
        this.FlangeThickness = FlangeThickness
        this.FilletRadius = FilletRadius
    }
    /** Total extent of the width, defined parallel to the x axis of the position coordinate system.
    */
    OverallWidth: IfcPositiveLengthMeasure
    /** Total extent of the depth, defined parallel to the y axis of the position coordinate system.
    */
    OverallDepth: IfcPositiveLengthMeasure
    /** Thickness of the web of the I-shape.
     * The web is centred on the x-axis and the y-axis of the position coordinate system.
    */
    WebThickness: IfcPositiveLengthMeasure
    /** Flange thickness of the I-shape.
     * Both, the upper and the lower flanges have the same thickness and they are centred on the y-axis of the position coordinate system.
    */
    FlangeThickness: IfcPositiveLengthMeasure
    /** The fillet between the web and the flange.
     * 0 if sharp-edged, omitted if unknown.
    */
    FilletRadius?: IfcPositiveLengthMeasure
}

export default IfcIShapeProfileDef