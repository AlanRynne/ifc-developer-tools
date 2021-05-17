// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcShapeModel

import { IfcRepresentationContext, IfcRepresentationItem, IfcRepresentation } from './'
import { IfcLabel } from '../types'

/** IfcShapeModel represents the concept of a particular geometric and/or topological representation of a product's shape or a product component's shape within a representation context.
 *
 * This representation context has to be a geometric representation context (with the exception of topology representations without associated geometry).
 *
 * The two subtypes are IfcShapeRepresentation to cover geometric models that represent a shape, and IfcTopologyRepresentation to cover the conectivity of a product or product component.
 *
 * The topology may or may not have geometry associated
 *
 * The IfcShapeModel can be a shape representation (geometric and/or topologogical) of a product (via IfcProductDefinitionShape), or a shape representation (geometric and/or topologogical) of a component of a product shape (via IfcShapeAspect).
 */
abstract class IfcShapeModel extends IfcRepresentation {
    constructor(ContextOfItems:IfcRepresentationContext, RepresentationIdentifier:IfcLabel, RepresentationType:IfcLabel, Items:Array<IfcRepresentationItem>) {
        super(ContextOfItems, RepresentationIdentifier, RepresentationType, Items)

    }

}

export default IfcShapeModel