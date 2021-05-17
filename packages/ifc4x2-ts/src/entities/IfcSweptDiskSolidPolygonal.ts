// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSweptDiskSolidPolygonal

import { IfcPositiveLengthMeasure, IfcParameterValue } from '../types'
import { IfcCurve, IfcSweptDiskSolid } from './'

/** The IfcSweptDiskSolidPolygonal is a IfcSweptDiskSolid where the Directrix is restricted to be provided by an poly line only.
 *
 * An optional FilletRadius attribute can be asserted, it is then applied as a fillet to all transitions between the segments of the poly line
 *
 * Informal Propositions:
 */
 class IfcSweptDiskSolidPolygonal extends IfcSweptDiskSolid {
    constructor(Directrix:IfcCurve, Radius:IfcPositiveLengthMeasure, InnerRadius:IfcPositiveLengthMeasure, StartParam:IfcParameterValue, EndParam:IfcParameterValue, FilletRadius:IfcPositiveLengthMeasure) {
        super(Directrix, Radius, InnerRadius, StartParam, EndParam)
        this.FilletRadius = FilletRadius
    }
    /** The fillet that is equally applied to all transitions between the segments of the IfcPolyline, providing the geometric representation for the Directrix.
     * If omited, no fillet is applied to the segments.
    */
    FilletRadius?: IfcPositiveLengthMeasure
}

export default IfcSweptDiskSolidPolygonal