// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuildingElement

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** The building element comprises all elements that are primarily part of the construction of a built facility, i.e., its structural and space separating system.
 *
 * Building elements are all physically existent and tangible thingsThis IfcBuildingElement is a generalization of all elements that participate in a building system.
 *
 * Typical examples of IfcBuildingElement 's are (among others):The IfcBuildingElement is an abstract entity that cannot be instantiated.
 *
 * For arbitrary building elements, that cannot be expressed by a subtype of IfcBuildingElement, use IfcBuildingElementProxy.
 */
abstract class IfcBuildingElement extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcBuildingElement