// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFeatureElementAddition

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFeatureElement } from './'

/** A feature element addition is a specialization of the general feature element, that represents an existence dependent element which modifies the shape and appearance of the associated master element.
 *
 * The IfcFeatureElementAddition offers the ability to handle shape modifiers as semantic objects within the IFC object model that add to the shape of the master element.
 *
 * The IfcFeatureElementAddition is associated to its master element by virtue of the objectified relationship IfcRelProjectsElement.
 *
 * This relationship implies a Boolean 'union' operation between the shape of the master element and the shape of the addition feature.
 *
 * The local placement for IfcFeatureElementAddition is defined in its supertype IfcProduct.
 *
 * It is defined by the IfcLocalPlacement, which defines the local coordinate system that is referenced by all geometric representations.
 *
 * The local placement is always defined in relation to the local placement of the element to which the feature element is added:
 */
abstract class IfcFeatureElementAddition extends IfcFeatureElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcFeatureElementAddition