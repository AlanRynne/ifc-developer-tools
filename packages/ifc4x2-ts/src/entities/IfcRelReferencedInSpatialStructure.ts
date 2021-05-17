// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelReferencedInSpatialStructure

import { IfcProduct, IfcSpatialElement, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The objectified relationship, IfcRelReferencedInSpatialStructure is used to assign elements in addition to those levels of the project spatial structure, in which they are referenced, but not primarily contained.
 *
 * Any element can be referenced to zero, one or several levels of the spatial structure.
 *
 * Whereas the IfcRelContainsInSpatialStructure relationship is required to be hierarchical (an element can only be contained in exactly one spatial structure element), the IfcRelReferencedInSpatialStructure is not restricted to be hierarchical
 *
 * Predefined spatial structure elements to which elements can be assigned areElements can also be references in a spatial zone that is provided as IfcSpatialZone
 *
 * Figure 170 shows the use of IfcRelContainedInSpatialStructure and IfcRelReferencedInSpatialStructure to assign an IfcCurtainWall to two different levels within the spatial structure.
 *
 * It is primarily contained within the ground floor, and additionally referenced within the first and second floor.
 */
 class IfcRelReferencedInSpatialStructure extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedElements:Array<IfcProduct>, RelatingStructure:IfcSpatialElement) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedElements = RelatedElements
        this.RelatingStructure = RelatingStructure
    }
    /** Set of products, which are referenced within this level of the spatial structure hierarchy.
     * Referenced elements are contained elsewhere within the spatial structure, they are referenced additionally by this spatial structure element, e.g., because they span several stories.
    */
    RelatedElements: Array<IfcProduct>
    /** Spatial structure element, within which the element is referenced.
     * Any element can be contained within zero, one or many elements of the project spatial and zoning structure.
     * IFC4 CHANGE The attribute RelatingStructure as been promoted to the new supertype IfcSpatialElement with upward compatibility for file based exchange.
    */
    RelatingStructure: IfcSpatialElement
}

export default IfcRelReferencedInSpatialStructure