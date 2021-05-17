// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelProjectsElement

import { IfcElement, IfcFeatureElementAddition, IfcOwnerHistory, IfcRelDecomposes } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The IfcRelProjectsElement is an objectified relationship between an element and one projection element that creates a modifier to the shape of the element.
 *
 * The relationship is defined to be a 1:1 relationship, if an element has more than one projection, several relationship objects have to be used, each pointing to a different projection element.
 *
 * The IfcRelProjectsElement establishes an aggregation relationship between the main element and a sub ordinary addition feature
 *
 * The IfcRelProjectsElement implies a Boolean operation of addition for the geometric bodies of the element and the feature element.
 *
 * As with all decomposition relationships it determines:
 */
 class IfcRelProjectsElement extends IfcRelDecomposes {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingElement:IfcElement, RelatedFeatureElement:IfcFeatureElementAddition) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingElement = RelatingElement
        this.RelatedFeatureElement = RelatedFeatureElement
    }
    /** Element at which a projection is created by the associated IfcProjectionElement.
    */
    RelatingElement: IfcElement
    /** Reference to the IfcFeatureElementAddition that defines an addition to the volume of the element, by using a Boolean addition operation.
     * An example is a projection at the associated element.
    */
    RelatedFeatureElement: IfcFeatureElementAddition
}

export default IfcRelProjectsElement