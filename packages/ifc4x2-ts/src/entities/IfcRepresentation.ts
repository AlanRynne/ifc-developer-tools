// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRepresentation

import { IfcRepresentationContext, IfcRepresentationItem } from './'
import { IfcLabel } from '../types'

/** The IfcRepresentation defines the general concept of representing product properties and in particular the product shape.
 *
 * Representation Use Definition Each representation, either IfcShapeRepresentation, or IfcTopologyRepresentation shall have a well defined:
 */
abstract class IfcRepresentation  {
    constructor(ContextOfItems:IfcRepresentationContext, RepresentationIdentifier:IfcLabel, RepresentationType:IfcLabel, Items:Array<IfcRepresentationItem>) {

        this.ContextOfItems = ContextOfItems
        this.RepresentationIdentifier = RepresentationIdentifier
        this.RepresentationType = RepresentationType
        this.Items = Items
    }
    /** Definition of the representation context for which the different subtypes of representation are valid.
    */
    ContextOfItems: IfcRepresentationContext
    /** The optional identifier of the representation as used within a project.
    */
    RepresentationIdentifier?: IfcLabel
    /** The description of the type of a representation context.
     * The representation type defines the type of geometry or topology used for representing the product representation.
     * More information is given at the subtypes IfcShapeRepresentation and IfcTopologyRepresentation.
     * The supported values for context type are to be specified by implementers agreements.
    */
    RepresentationType?: IfcLabel
    /** Set of geometric representation items that are defined for this representation.
    */
    Items: Array<IfcRepresentationItem>
}

export default IfcRepresentation