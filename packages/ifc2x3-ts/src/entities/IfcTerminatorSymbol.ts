// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTerminatorSymbol

import { IfcAnnotationCurveOccurrence, IfcRepresentationItem, IfcPresentationStyleAssignment, IfcAnnotationSymbolOccurrence } from './'
import { IfcLabel } from '../types'

/**  */
 class IfcTerminatorSymbol extends IfcAnnotationSymbolOccurrence {
    constructor(Item:IfcRepresentationItem, Styles:Array<IfcPresentationStyleAssignment>, Name:IfcLabel, AnnotatedCurve:IfcAnnotationCurveOccurrence) {
        super(Item, Styles, Name)
        this.AnnotatedCurve = AnnotatedCurve
    }

    AnnotatedCurve: IfcAnnotationCurveOccurrence
}

export default IfcTerminatorSymbol