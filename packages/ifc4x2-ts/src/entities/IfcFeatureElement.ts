// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFeatureElement

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** A feature element is a generalization of all existence dependent elements which modify the shape and appearance of the associated master element.
 *
 * The IfcFeatureElement offers the ability to handle shape modifiers as semantic objects within the IFC object model
 *
 * In contrary to the aggregation, as used in IfcElementAssembly, that defines the aggregate as a container element, that has equally treated parts, the feature concept introduced by IfcFeatureElement defines the master element with subordinate parts as additions, or with voids or cut-outs as subtractions.
 */
abstract class IfcFeatureElement extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcFeatureElement