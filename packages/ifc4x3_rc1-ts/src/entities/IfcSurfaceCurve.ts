// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceCurve

import { IfcCurve, IfcPcurve } from './'
import { IfcPreferredSurfaceCurveRepresentation } from '../types'

/** An IfcSurfaceCurve is a 3-dimensional curve that has additional representations provided by one or two pcurves
 *
 * Informal Propositions:
 */
 class IfcSurfaceCurve extends IfcCurve {
    constructor(Curve3D:IfcCurve, AssociatedGeometry:Array<IfcPcurve>, MasterRepresentation:IfcPreferredSurfaceCurveRepresentation) {
        super()
        this.Curve3D = Curve3D
        this.AssociatedGeometry = AssociatedGeometry
        this.MasterRepresentation = MasterRepresentation
    }
    /** The curve which is the three-dimensional representation of the surface curve.
    */
    Curve3D: IfcCurve
    /** A list of one or two pcurves which define the surface or surfaces associated with the surface curve.
     * Two elements in this list indicate that the curve has two surface associations which need not be two distinct surfaces.
     * Being a pcurve, it also associates a basis curve in the parameter space of this surface as an alternative representation of the surface curve.
    */
    AssociatedGeometry: Array<IfcPcurve>
    /** The defines the curve used to determine the unique parametrisation of the IfcSurfaceCurve.
     * The master_representation takes one of the values Curve3D, PCurve_S1 or PCurve_S2 to indicate a preference for the 3D curve, or the first or second pcurve, in the associated geometry list, respectively.
     * Multiple representations provide the ability to communicate data in more than one form, even though the data is expected to be geometrically identical.
     * The master representation attribute acknowledges the impracticality of ensuring that multiple forms are indeed identical and allows the indication of a preferred form.
     * This would probably be determined by the creator of the data.
     * All characteristics, such as parametrisation, domain, and results of evaluation, for an entity having multiple representations, are derived from the master representation.
     * Any use of the other representations is a compromise for practical considerations.
    */
    MasterRepresentation: IfcPreferredSurfaceCurveRepresentation
}

export default IfcSurfaceCurve