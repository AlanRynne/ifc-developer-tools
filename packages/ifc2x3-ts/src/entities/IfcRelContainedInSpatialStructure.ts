// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelContainedInSpatialStructure

import { IfcProduct, IfcSpatialStructureElement, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** This objectified relationship, IfcRelContainedInSpatialStructure, is used to assign elements to a certain level of the spatial project structure.
 *
 * Any element can only be assigned once to a certain level of the spatial structure.
 *
 * The question, which level is relevant for which type of element, can only be answered within the context of a particular project and might vary within the various regions
 *
 * The containment relationship of an element within a spatial structure has to be a hierarchical relationship; an element can only be contained within a single spatial structure element.
 *
 * The reference relationship between an element and the spatial structure need not be hierarchical; that is, an element can reference many spatial structure elements
 *
 * Predefined spatial structure elements to which elements can be assigned areOccurrences of the same element type can be assigned to different spatial structure elements depending on the context of the occurrence
 *
 * Figure 168 shows the use of IfcRelContainedInSpatialStructure to assign a stair and two walls to two different levels within the spatial structure.
 */
 class IfcRelContainedInSpatialStructure extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedElements:Array<IfcProduct>, RelatingStructure:IfcSpatialStructureElement) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedElements = RelatedElements
        this.RelatingStructure = RelatingStructure
    }
    /** Set of products, which are contained within this level of the spatial structure hierarchy.
     * IFC2x CHANGE The data type has been changed from IfcElement to IfcProduct with upward compatibility
    */
    RelatedElements: Array<IfcProduct>
    /** Spatial structure element, within which the element is contained.
     * Any element can only be contained within one element of the project spatial structure.
     * IFC4 CHANGE The attribute RelatingStructure as been promoted to the new supertype IfcSpatialElement with upward compatibility for file based exchange.
    */
    RelatingStructure: IfcSpatialStructureElement
}

export default IfcRelContainedInSpatialStructure