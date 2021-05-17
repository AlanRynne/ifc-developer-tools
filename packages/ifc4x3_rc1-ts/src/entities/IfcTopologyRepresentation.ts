// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTopologyRepresentation

import { IfcRepresentationContext, IfcRepresentationItem, IfcShapeModel } from './'
import { IfcLabel } from '../types'

/** IfcTopologyRepresentation represents the concept of a particular topological representation of a product or a product component within a representation context.
 *
 * This representation context does not need to be (but may be) a geometric representation context.
 *
 * Several representation types for shape representation are included as predefined types: The representation type is given as a string value at the inherited attribute 'RepresentationType'.
 */
 class IfcTopologyRepresentation extends IfcShapeModel {
    constructor(ContextOfItems:IfcRepresentationContext, RepresentationIdentifier:IfcLabel, RepresentationType:IfcLabel, Items:Array<IfcRepresentationItem>) {
        super(ContextOfItems, RepresentationIdentifier, RepresentationType, Items)

    }

}

export default IfcTopologyRepresentation