// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIntersectionCurve

import { IfcCurve, IfcPcurve, IfcSurfaceCurve } from './'
import { IfcPreferredSurfaceCurveRepresentation } from '../types'

/** An IfcIntersectionCurve is a 3-dimensional curve that has two additional representations provided by two pcurves defined within two distinct and intersecting surfaces.
 */
 class IfcIntersectionCurve extends IfcSurfaceCurve {
    constructor(Curve3D:IfcCurve, AssociatedGeometry:Array<IfcPcurve>, MasterRepresentation:IfcPreferredSurfaceCurveRepresentation) {
        super(Curve3D, AssociatedGeometry, MasterRepresentation)

    }

}

export default IfcIntersectionCurve