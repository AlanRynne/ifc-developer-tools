// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DVerSegCircularArc

import { IfcPositiveLengthMeasure, IfcBoolean, IfcLabel, IfcLengthMeasure, IfcRatioMeasure } from '../types'
import { IfcAlignment2DVerticalSegment } from './'

/** The vertical circular arc segment is defined as an arc using the inherited attributes from IfcAlignment2DVerticalSegment and the following additional curve parameters Radius as the radius of the circular arc, and IsConvex to indicate the whether the circular arc defines a sag (i.e. concave, increasing gradiant) or a crest (i.e. convex, decreasing gradiant)
 *
 * The circular arc is described by:For crest curves (where IsConvex is True), the elevation of a point along the curve (relative to StartHeight) is defined as: For sag curves (where IsConvex is False), the elevation of a point along the curve (relative to StartHeight) is defined as:
 */
 class IfcAlignment2DVerSegCircularArc extends IfcAlignment2DVerticalSegment {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel, StartDistAlong:IfcLengthMeasure, HorizontalLength:IfcPositiveLengthMeasure, StartHeight:IfcLengthMeasure, StartGradient:IfcRatioMeasure, Radius:IfcPositiveLengthMeasure, IsConvex:IfcBoolean) {
        super(TangentialContinuity, StartTag, EndTag, StartDistAlong, HorizontalLength, StartHeight, StartGradient)
        this.Radius = Radius
        this.IsConvex = IsConvex
    }
    /** radius of the circular arc
    */
    Radius: IfcPositiveLengthMeasure
    /** Orientation of the circular arc, convex (Boolean=”true”) means decreasing gradient along the arc at the beginning such as at the crest of a hill, concave (Boolean=”false”) means increasing gradient along the arc at the beginning such as at the base of a valley.
    */
    IsConvex: IfcBoolean
}

export default IfcAlignment2DVerSegCircularArc