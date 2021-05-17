// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBoundingBox

import { IfcCartesianPoint, IfcGeometricRepresentationItem } from './'
import { IfcPositiveLengthMeasure } from '../types'

/** The IfcBoundingBox defines an orthogonal box oriented parallel to the axes of the object coordinate system in which it is defined.
 *
 * It is defined by a Corner being a three-dimensional Cartesian point and three length measures defining the X, Y and Z parameters of the box in the direction of the positive axes.
 */
 class IfcBoundingBox extends IfcGeometricRepresentationItem {
    constructor(Corner:IfcCartesianPoint, XDim:IfcPositiveLengthMeasure, YDim:IfcPositiveLengthMeasure, ZDim:IfcPositiveLengthMeasure) {
        super()
        this.Corner = Corner
        this.XDim = XDim
        this.YDim = YDim
        this.ZDim = ZDim
    }
    /** Location of the bottom left corner (having the minimum values).
    */
    Corner: IfcCartesianPoint
    /** Length attribute (measured along the edge parallel to the X Axis)
    */
    XDim: IfcPositiveLengthMeasure
    /** Width attribute (measured along the edge parallel to the Y Axis)
    */
    YDim: IfcPositiveLengthMeasure
    /** Height attribute (measured along the edge parallel to the Z Axis).
    */
    ZDim: IfcPositiveLengthMeasure
}

export default IfcBoundingBox