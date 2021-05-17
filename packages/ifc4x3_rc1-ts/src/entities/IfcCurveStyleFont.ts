// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurveStyleFont

import { IfcLabel } from '../types'
import { IfcCurveStyleFontPattern, IfcPresentationItem } from './'

/** 
 */
 class IfcCurveStyleFont extends IfcPresentationItem {
    constructor(Name:IfcLabel, PatternList:Array<IfcCurveStyleFontPattern>) {
        super()
        this.Name = Name
        this.PatternList = PatternList
    }
    /** Name that may be assigned with the curve font.
    */
    Name?: IfcLabel
    /** A list of curve font pattern entities, that contains the simple patterns used for drawing curves.
     * The patterns are applied in the order they occur in the list.
    */
    PatternList: Array<IfcCurveStyleFontPattern>
}

export default IfcCurveStyleFont