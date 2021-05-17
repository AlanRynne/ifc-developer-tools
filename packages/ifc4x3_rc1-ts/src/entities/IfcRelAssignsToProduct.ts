// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToProduct

import { IfcProductSelect, IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectDefinition, IfcRelAssigns } from './'

/** The objectified relationship IfcRelAssignsToProduct handles the assignment of objects (subtypes of IfcObject) to a product (subtypes of IfcProduct).
 *
 * The Name attribute should be used to classify the usage of the IfcRelAssignsToProduct objectified relationship.
 *
 * The following Name values are proposed:
 */
 class IfcRelAssignsToProduct extends IfcRelAssigns {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingProduct:IfcProductSelect) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType)
        this.RelatingProduct = RelatingProduct
    }
    /** Reference to the product or product type to which the objects are assigned to.
     * IFC4 CHANGE Datatype expanded to include IfcProduct and IfcTypeProduct.
    */
    RelatingProduct: IfcProductSelect
}

export default IfcRelAssignsToProduct