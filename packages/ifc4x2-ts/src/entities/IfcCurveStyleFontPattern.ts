// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurveStyleFontPattern

import { IfcLengthMeasure, IfcPositiveLengthMeasure } from '../types'
import { IfcPresentationItem } from './'

/** 
 */
 class IfcCurveStyleFontPattern extends IfcPresentationItem {
    constructor(VisibleSegmentLength:IfcLengthMeasure, InvisibleSegmentLength:IfcPositiveLengthMeasure) {
        super()
        this.VisibleSegmentLength = VisibleSegmentLength
        this.InvisibleSegmentLength = InvisibleSegmentLength
    }
    /** The length of the visible segment in the pattern definition.
     * For a visible segment representing a point, the value 0. should be assigned.
     * IFC2x3 CHANGE The datatype has been changed to IfcLengthMeasure with upward compatibility for file-based exchange.
    */
    VisibleSegmentLength: IfcLengthMeasure
    /** The length of the invisible segment in the pattern definition.
    */
    InvisibleSegmentLength: IfcPositiveLengthMeasure
}

export default IfcCurveStyleFontPattern