// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcClassificationItemRelationship

import { IfcClassificationItem } from './'

/**  */
 class IfcClassificationItemRelationship  {
    constructor(RelatingItem:IfcClassificationItem, RelatedItems:Array<IfcClassificationItem>) {

        this.RelatingItem = RelatingItem
        this.RelatedItems = RelatedItems
    }

    RelatingItem: IfcClassificationItem

    RelatedItems: Array<IfcClassificationItem>
}

export default IfcClassificationItemRelationship