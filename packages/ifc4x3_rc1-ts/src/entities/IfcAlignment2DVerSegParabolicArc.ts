// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DVerSegParabolicArc

import { IfcPositiveLengthMeasure, IfcBoolean, IfcLabel, IfcLengthMeasure, IfcRatioMeasure } from '../types'
import { IfcAlignment2DVerticalSegment } from './'

/** The vertical parabolic segment is defined as a parabola using the inherited attributes from IfcAlignment2DVerticalSegment and the following additional curve parameters ParabolaConstant as the minimum radius of the parabolic arc at its apex, and IsConvex to indicate the whether the parabolic arc defined a sag or a crest
 *
 * The parabolic arc is described by (see figure 1):The following equations are used for any point along the parabola:
 */
 class IfcAlignment2DVerSegParabolicArc extends IfcAlignment2DVerticalSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, StartDistAlong:IfcLengthMeasure, HorizontalLength:IfcPositiveLengthMeasure, StartHeight:IfcLengthMeasure, StartGradient:IfcRatioMeasure, ParabolaConstant:IfcPositiveLengthMeasure, IsConvex:IfcBoolean) {
        super(TangentialContinuity, StartTag, EndTag, StartDistAlong, HorizontalLength, StartHeight, StartGradient)
        this.ParabolaConstant = ParabolaConstant
        this.IsConvex = IsConvex
    }
    /** Parabola constant (determining the “steepness” of the parabola).
     * The parabola constant is provided by the “minimum parabola radius”, the true radius of a parabola at its vertical axis (the zero-gradient point of the parabola).
     * The minimum radius is twice the focal length of the parabola (the distance between the focal point and the vertex).
    */
    ParabolaConstant: IfcPositiveLengthMeasure
    /** Orientation of the parabolic arc, convex (Boolean=”true”) means decreasing gradient along the arc at the beginning such as at the crest of a hill, concave (Boolean=”false”) means increasing gradient along the arc at the beginning such as at the base of a valley.
    */
    IsConvex: IfcBoolean
}

export default IfcAlignment2DVerSegParabolicArc