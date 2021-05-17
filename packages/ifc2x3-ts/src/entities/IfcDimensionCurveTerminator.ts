// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDimensionCurveTerminator

import { IfcDimensionExtentUsage, IfcLabel } from '../types'
import { IfcRepresentationItem, IfcPresentationStyleAssignment, IfcAnnotationCurveOccurrence, IfcTerminatorSymbol } from './'

/**  */
 class IfcDimensionCurveTerminator extends IfcTerminatorSymbol {
    constructor(Item:IfcRepresentationItem, Styles:Array<IfcPresentationStyleAssignment>, Name:IfcLabel, AnnotatedCurve:IfcAnnotationCurveOccurrence, Role:IfcDimensionExtentUsage) {
        super(Item, Styles, Name, AnnotatedCurve)
        this.Role = Role
    }

    Role: IfcDimensionExtentUsage
}

export default IfcDimensionCurveTerminator