// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProjectionCurve

import { IfcRepresentationItem, IfcPresentationStyleAssignment, IfcAnnotationCurveOccurrence } from './'
import { IfcLabel } from '../types'

/**  */
 class IfcProjectionCurve extends IfcAnnotationCurveOccurrence {
    constructor(Item:IfcRepresentationItem, Styles:Array<IfcPresentationStyleAssignment>, Name:IfcLabel) {
        super(Item, Styles, Name)

    }

}

export default IfcProjectionCurve