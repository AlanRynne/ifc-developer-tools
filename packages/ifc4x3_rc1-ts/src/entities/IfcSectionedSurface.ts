// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSectionedSurface

import { IfcCurve, IfcDistanceExpression, IfcProfileDef, IfcSurface } from './'
import { IfcBoolean } from '../types'

/**  */
 class IfcSectionedSurface extends IfcSurface {
    constructor(Directrix:IfcCurve, CrossSectionPositions:Array<IfcDistanceExpression>, CrossSections:Array<IfcProfileDef>, FixedAxisVertical:IfcBoolean) {
        super()
        this.Directrix = Directrix
        this.CrossSectionPositions = CrossSectionPositions
        this.CrossSections = CrossSections
        this.FixedAxisVertical = FixedAxisVertical
    }

    Directrix: IfcCurve

    CrossSectionPositions: Array<IfcDistanceExpression>

    CrossSections: Array<IfcProfileDef>

    FixedAxisVertical: IfcBoolean
}

export default IfcSectionedSurface