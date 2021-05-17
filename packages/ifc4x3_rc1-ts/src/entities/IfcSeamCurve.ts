// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSeamCurve

import { IfcCurve, IfcPcurve, IfcSurfaceCurve } from './'
import { IfcPreferredSurfaceCurveRepresentation } from '../types'

/** An IfcSeamCurve is a 3-dimensional curve that has additional representations provided by exactly two distinct pcurves describing the same curve at the two extreme ends of a closed parametric surface
 *
 * Figure 381 shows an instance diagram explaining the use of IfcSeamCurve as a boundary curve of an IfcCylindricalSurface.
 */
 class IfcSeamCurve extends IfcSurfaceCurve {
    constructor(Curve3D:IfcCurve, AssociatedGeometry:Array<IfcPcurve>, MasterRepresentation:IfcPreferredSurfaceCurveRepresentation) {
        super(Curve3D, AssociatedGeometry, MasterRepresentation)

    }

}

export default IfcSeamCurve