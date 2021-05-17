// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionElement

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** This IfcDistributionElement is a generalization of all elements that participate in a distribution system.
 *
 * Typical examples of IfcDistributionElement's are (among others):The IfcDistributionElement is further specialized in the IFC specification.
 *
 * Direct instantiation of IfcDistributionElement without an assigned subtype of IfcDistributionElementType provides the meaning of an distribution element proxy.
 */
 class IfcDistributionElement extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcDistributionElement