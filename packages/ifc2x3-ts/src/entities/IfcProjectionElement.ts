// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProjectionElement

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFeatureElementAddition } from './'

/** The projection element is a specialization of the general feature element to represent projections applied to building elements.
 *
 * It represents a solid attached to any element that has physical manifestation
 *
 * An IfcProjectionElement has to be linked to a element (all subtypes of IfcElement) by using the IfcRelProjectsElement relationship.
 *
 * Its existence depends on the existence of the master element.
 *
 * The relationship implies a Boolean union operation between the volume of the projection element and the volume of the element
 *
 * The IfcProjectionElement shall not participate in the containment relationship, i.e. it is not linked directly to the spatial structure of the project.
 *
 * It has a mandatory ProjectsElements inverse relationship pointing to the IfcElement that is contained in the spatial structure.
 */
 class IfcProjectionElement extends IfcFeatureElementAddition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcProjectionElement