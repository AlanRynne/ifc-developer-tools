// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAnnotationSurfaceOccurrence

import { IfcRepresentationItem, IfcPresentationStyleAssignment, IfcAnnotationOccurrence } from './'
import { IfcLabel } from '../types'

/**  */
 class IfcAnnotationSurfaceOccurrence extends IfcAnnotationOccurrence {
    constructor(Item:IfcRepresentationItem, Styles:Array<IfcPresentationStyleAssignment>, Name:IfcLabel) {
        super(Item, Styles, Name)

    }

}

export default IfcAnnotationSurfaceOccurrence