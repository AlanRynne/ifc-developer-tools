// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAnnotationFillAreaOccurrence

import { IfcPoint, IfcRepresentationItem, IfcPresentationStyleAssignment, IfcAnnotationOccurrence } from './'
import { IfcGlobalOrLocalEnum, IfcLabel } from '../types'

/**  */
 class IfcAnnotationFillAreaOccurrence extends IfcAnnotationOccurrence {
    constructor(Item:IfcRepresentationItem, Styles:Array<IfcPresentationStyleAssignment>, Name:IfcLabel, FillStyleTarget:IfcPoint, GlobalOrLocal:IfcGlobalOrLocalEnum) {
        super(Item, Styles, Name)
        this.FillStyleTarget = FillStyleTarget
        this.GlobalOrLocal = GlobalOrLocal
    }

    FillStyleTarget?: IfcPoint

    GlobalOrLocal?: IfcGlobalOrLocalEnum
}

export default IfcAnnotationFillAreaOccurrence