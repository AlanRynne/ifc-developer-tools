// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcShapeRepresentation

import { IfcRepresentationContext, IfcRepresentationItem, IfcShapeModel } from './'
import { IfcLabel } from '../types'

/** The IfcShapeRepresentation represents the concept of a particular geometric representation of a product or a product component within a specific geometric representation context.
 *
 * The inherited attribute RepresentationType is used to define the geometric model used for the shape representation (e.g. 'SweptSolid', or 'Brep'), the inherited attribute RepresentationIdentifier is used to denote the kind of the representation captured by the IfcShapeRepresentation (e.g. 'Axis', 'Body', etc.).Several representation identifiers for shape representation are included as predefined values for RepresentationIdentifier.
 *
 * Table 707 indicates the defined list of values for RepresentationIdentifier
 *
 * Several representation types for shape representation are included as predefined values for RepresentationType.
 *
 * Table 708 indicates the defined list of values for RepresentationType.
 */
 class IfcShapeRepresentation extends IfcShapeModel {
    constructor(ContextOfItems:IfcRepresentationContext, RepresentationIdentifier:IfcLabel, RepresentationType:IfcLabel, Items:Array<IfcRepresentationItem>) {
        super(ContextOfItems, RepresentationIdentifier, RepresentationType, Items)

    }

}

export default IfcShapeRepresentation