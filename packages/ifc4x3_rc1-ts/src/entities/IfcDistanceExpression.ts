// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistanceExpression

import { IfcLengthMeasure, IfcBoolean } from '../types'
import { IfcGeometricRepresentationItem } from './'

/** 
 */
 class IfcDistanceExpression extends IfcGeometricRepresentationItem {
    constructor(DistanceAlong:IfcLengthMeasure, OffsetLateral:IfcLengthMeasure, OffsetVertical:IfcLengthMeasure, OffsetLongitudinal:IfcLengthMeasure, AlongHorizontal:IfcBoolean) {
        super()
        this.DistanceAlong = DistanceAlong
        this.OffsetLateral = OffsetLateral
        this.OffsetVertical = OffsetVertical
        this.OffsetLongitudinal = OffsetLongitudinal
        this.AlongHorizontal = AlongHorizontal
    }
    /** The distance along the basis curve, measured according to projection in the horizontal plane if AlongHorizontal is True, or according to 3D distance otherwise.
     * If the basis curve refers to IfcAlignmentCurve and AlongHorizontal is True, then this measurement directly corresponds to IfcAlignment2DHorizontal.
    */
    DistanceAlong: IfcLengthMeasure
    /** Offset horizontally perpendicular to the basis curve, where positive values indicate to the left of the basis curve as facing in the direction of the basis curve, and negative values indicate to the right.
     * If DistanceAlong coincides with a point of tangential discontinuity (within precision limits), then the tangent of the previous segment governs.
    */
    OffsetLateral?: IfcLengthMeasure
    /** Offset vertical to the basis curve where positive values indicate vertically upwards in global coordinates at DistanceAlong, regardless of the slope of the basis curve at such point.
    */
    OffsetVertical?: IfcLengthMeasure
    /** Offset parallel to the basis curve after applying DistanceAlong, OffsetLateral, and OffsetVertical to reach locations for the case of a tangentially discontinuous basis curve.
    */
    OffsetLongitudinal?: IfcLengthMeasure
    /** Indicates whether DistanceAlong is measured according to horizontal projection of distance (if True), or 3D distance (if False or unset).
    */
    AlongHorizontal?: IfcBoolean
}

export default IfcDistanceExpression