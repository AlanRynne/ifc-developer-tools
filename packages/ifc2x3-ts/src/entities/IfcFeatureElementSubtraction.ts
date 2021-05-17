// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFeatureElementSubtraction

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFeatureElement } from './'

/** The IfcFeatureElementSubtraction is specialization of the general feature element, that represents an existence dependent elements which modifies the shape and appearance of the associated master element.
 *
 * The IfcFeatureElementSubtraction offers the ability to handle shape modifiers as semantic objects within the IFC object model that subtract from the shape of the master element
 *
 * The voiding relationship between a master element and a subtraction feature is geometrically resolved by a Boolean difference operation
 *
 * The local placement for IfcFeatureElementSubtraction is defined in its supertype IfcProduct.
 *
 * It is defined by the IfcLocalPlacement, which defines the local coordinate system that is referenced by all geometric representations.
 *
 * The local placement is always defined in relation to the local placement of the building element from which the feature element substration is substracted:
 */
abstract class IfcFeatureElementSubtraction extends IfcFeatureElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcFeatureElementSubtraction