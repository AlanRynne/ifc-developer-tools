// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelPositions

import { IfcPositioningElement, IfcProduct, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** An IfcRelPositions relationship defines the relationship that positions a product related to a positioning element..
 */
 class IfcRelPositions extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingPositioningElement:IfcPositioningElement, RelatedProducts:Array<IfcProduct>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingPositioningElement = RelatingPositioningElement
        this.RelatedProducts = RelatedProducts
    }
    /** Positioning element defining the source of the relative position.
    */
    RelatingPositioningElement: IfcPositioningElement
    /** Relatively positioned product.
    */
    RelatedProducts: Array<IfcProduct>
}

export default IfcRelPositions