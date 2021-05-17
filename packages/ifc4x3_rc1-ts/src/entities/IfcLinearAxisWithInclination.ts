// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLinearAxisWithInclination

import { IfcCurve, IfcAxisLateralInclination, IfcGeometricRepresentationItem } from './'

/**  */
 class IfcLinearAxisWithInclination extends IfcGeometricRepresentationItem {
    constructor(Directrix:IfcCurve, Inclinating:IfcAxisLateralInclination) {
        super()
        this.Directrix = Directrix
        this.Inclinating = Inclinating
    }

    Directrix: IfcCurve

    Inclinating: IfcAxisLateralInclination
}

export default IfcLinearAxisWithInclination