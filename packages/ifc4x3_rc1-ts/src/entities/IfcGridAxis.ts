// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGridAxis

import { IfcLabel, IfcBoolean } from '../types'
import { IfcCurve } from './'

/** An individual axis, IfcGridAxis, is defined in the context of a design grid.
 *
 * The axis definition is based on a curve of dimensionality 2.
 *
 * The grid axis is positioned within the XY plane of the position coordinate system defined by the IfcGrid
 *
 * The standard geometric representation of IfcGridAxis is defined using a 2D curve entity.
 *
 * Grid axes are normally defined by an offset to another axis.
 *
 * The IfcOffsetCurve2D supports this concept.
 *
 * Each grid axis has a sense given by the parameterization of the curve.
 *
 * The attribute SameSense is an indicator of whether or not the sense of the grid axis agrees with, or opposes, that of the underlying curve.
 */
 class IfcGridAxis  {
    constructor(AxisTag:IfcLabel, AxisCurve:IfcCurve, SameSense:IfcBoolean) {

        this.AxisTag = AxisTag
        this.AxisCurve = AxisCurve
        this.SameSense = SameSense
    }
    /** The tag or name for this grid axis.
    */
    AxisTag?: IfcLabel
    /** Underlying curve which provides the geometry for this grid axis.
    */
    AxisCurve: IfcCurve
    /** Defines whether the original sense of curve is used or whether it is reversed in the context of the grid axis.
    */
    SameSense: IfcBoolean
}

export default IfcGridAxis