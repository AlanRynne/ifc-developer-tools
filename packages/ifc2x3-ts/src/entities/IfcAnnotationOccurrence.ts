// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAnnotationOccurrence

import { IfcRepresentationItem, IfcPresentationStyleAssignment, IfcStyledItem } from './'
import { IfcLabel } from '../types'

/**  */
abstract class IfcAnnotationOccurrence extends IfcStyledItem {
    constructor(Item:IfcRepresentationItem, Styles:Array<IfcPresentationStyleAssignment>, Name:IfcLabel) {
        super(Item, Styles, Name)

    }

}

export default IfcAnnotationOccurrence