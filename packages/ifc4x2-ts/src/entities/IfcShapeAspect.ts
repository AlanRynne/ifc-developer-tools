// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcShapeAspect

import { IfcShapeModel } from './'
import { IfcLabel, IfcText, IfcLogical, IfcProductRepresentationSelect } from '../types'

/** IfcShapeAspect allows for grouping of shape representation items that represent aspects (or components) of the shape of a product.
 *
 * Thereby shape representations of components of the product shape represent a distinctive part to a product that can be explicitly addressed
 *
 * The IfcShapeAspect's may have distinct material information or other distict characteristics that differs from other parts of the product shape representation
 *
 * Figure 439 indicates the association of material characteristics to shape aspects
 *
 * Informal Propositions:
 */
 class IfcShapeAspect  {
    constructor(ShapeRepresentations:Array<IfcShapeModel>, Name:IfcLabel, Description:IfcText, ProductDefinitional:IfcLogical, PartOfProductDefinitionShape:IfcProductRepresentationSelect) {

        this.ShapeRepresentations = ShapeRepresentations
        this.Name = Name
        this.Description = Description
        this.ProductDefinitional = ProductDefinitional
        this.PartOfProductDefinitionShape = PartOfProductDefinitionShape
    }
    /** List of shape representations.
     * Each member defines a valid representation of a particular type within a particular representation context as being an aspect (or part) of a product definition.
     * IFC2x3 CHANGE The data type has been changed from IfcShapeRepresentation to IfcShapeModel with upward compatibility
    */
    ShapeRepresentations: Array<IfcShapeModel>
    /** The word or group of words by which the shape aspect is known.
     * It is a tag to indicate the particular semantic of a component within the product definition shape, used to provide meaning.
     * Example: use the tag "Glazing" to define which component of a window shape defines the glazing area.
    */
    Name?: IfcLabel
    /** The word or group of words that characterize the shape aspect.
     * It can be used to add additional meaning to the name of the aspect.
    */
    Description?: IfcText
    /** An indication that the shape aspect is on the physical boundary of the product definition shape.
     * If the value of this attribute is TRUE, it shall be asserted that the shape aspect being identified is on such a boundary.
     * If the value is FALSE, it shall be asserted that the shape aspect being identified is not on such a boundary.
     * If the value is UNKNOWN, it shall be asserted that it is not known whether or not the shape aspect being identified is on such a boundary.
     * --- EXAMPLE: Would be FALSE for a center line, identified as shape aspect; would be TRUE for a cantilever.
     * ---
    */
    ProductDefinitional: IfcLogical
    /** Reference to the IfcProductDefinitionShape or the IfcRepresentationMap of which this shape is an aspect.
     * IFC4 CHANGE Data type modified to be IfcProductRepresentationSelect allowing the assignment also to IfcRepresentationMap.
    */
    PartOfProductDefinitionShape?: IfcProductRepresentationSelect
}

export default IfcShapeAspect