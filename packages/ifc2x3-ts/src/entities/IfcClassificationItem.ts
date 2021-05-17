// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcClassificationItem

import { IfcClassificationNotationFacet, IfcClassification } from './'
import { IfcLabel } from '../types'

/**  */
 class IfcClassificationItem  {
    constructor(Notation:IfcClassificationNotationFacet, ItemOf:IfcClassification, Title:IfcLabel) {

        this.Notation = Notation
        this.ItemOf = ItemOf
        this.Title = Title
    }

    Notation: IfcClassificationNotationFacet

    ItemOf?: IfcClassification

    Title: IfcLabel
}

export default IfcClassificationItem