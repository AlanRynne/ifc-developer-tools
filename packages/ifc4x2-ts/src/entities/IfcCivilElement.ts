// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCivilElement

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** An IfcCivilElement is a generalization of all elements within a civil engineering works that cannot be represented as BuildingElements, DistributionElements or GeographicElements.
 *
 * Depending on the context of the construction project, included building work, such as buildings or factories, are represented as a collection of IfcBuildingElement's, distribution systems, such as piping or drainage, are represented as a collection of IfcDistributionElement's, and other geographic elements, such as trees, light posts, traffic signs etc. are represented as IfcGeographicElement's
 *
 * Civil elements are typically horizontally organized using a spatial structure expressed by spatial zones, therefore IfcCivilElement is spatially contained by default within an IfcSpatialZone.
 */
 class IfcCivilElement extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcCivilElement