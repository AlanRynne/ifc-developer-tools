// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignmentCurve

import { IfcAlignment2DHorizontal, IfcAlignment2DVertical, IfcBoundedCurve } from './'
import { IfcLabel } from '../types'

/** An IfcAlignmentCurve describes a 3D curve based on a 2D vertical curve defined along the path of a 2D horizontal curve.
 */
 class IfcAlignmentCurve extends IfcBoundedCurve {
    constructor(Horizontal:IfcAlignment2DHorizontal, Vertical:IfcAlignment2DVertical, Tag:IfcLabel) {
        super()
        this.Horizontal = Horizontal
        this.Vertical = Vertical
        this.Tag = Tag
    }
    /** The horizontal component of the curve.
    */
    Horizontal: IfcAlignment2DHorizontal
    /** The vertical component of the curve, which is defined relative to the horizontal curve.
    */
    Vertical?: IfcAlignment2DVertical
    /** Optional identifier of the curve, which may be used to correlate points from a variable cross-section.
    */
    Tag?: IfcLabel
}

export default IfcAlignmentCurve