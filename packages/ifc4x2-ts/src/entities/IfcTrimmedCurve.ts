// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTrimmedCurve

import { IfcCurve, IfcBoundedCurve } from './'
import { IfcTrimmingSelect, IfcBoolean, IfcTrimmingPreference } from '../types'

/** An IfcTrimmedCurve is a bounded curve that is trimmed at both ends.
 *
 * The trimming points may be provided by a Cartesian point or by a parameter value, based on the parameterization of the BasisCurve.
 *
 * The SenseAgreement attribute indicates whether the direction of the IfcTrimmedCurve agrees with or is opposed to the direction of the BasisCurve
 *
 * Figure 382 shows the four arcs (dashed blue and green lines with arrow showing different orientations) that can be defined by the same BasisCurve (of type IfcCircle) and the same trimming points (given by Cartesian points and parameter values) by using different assignments to Trim1 and Trim2 and SenseAgreement
 *
 * Informal Propositions:
 */
 class IfcTrimmedCurve extends IfcBoundedCurve {
    constructor(BasisCurve:IfcCurve, Trim1:Array<IfcTrimmingSelect>, Trim2:Array<IfcTrimmingSelect>, SenseAgreement:IfcBoolean, MasterRepresentation:IfcTrimmingPreference) {
        super()
        this.BasisCurve = BasisCurve
        this.Trim1 = Trim1
        this.Trim2 = Trim2
        this.SenseAgreement = SenseAgreement
        this.MasterRepresentation = MasterRepresentation
    }
    /** The curve to be trimmed.
     * For curves with multiple representations any parameter values given as Trim1 or Trim2 refer to the master representation of the BasisCurve only.
    */
    BasisCurve: IfcCurve
    /** The first trimming point which may be specified as a Cartesian point, as a real parameter or both.
    */
    Trim1: Array<IfcTrimmingSelect>
    /** The second trimming point which may be specified as a Cartesian point, as a real parameter or both.
    */
    Trim2: Array<IfcTrimmingSelect>
    /** Flag to indicate whether the direction of the trimmed curve agrees with or is opposed to the direction of the basis curve.
    */
    SenseAgreement: IfcBoolean
    /** Where both parameter and point are present at either end of the curve this indicates the preferred form.
    */
    MasterRepresentation: IfcTrimmingPreference
}

export default IfcTrimmedCurve