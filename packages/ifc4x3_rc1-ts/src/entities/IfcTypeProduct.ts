// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTypeProduct

import { IfcRepresentationMap, IfcOwnerHistory, IfcPropertySetDefinition, IfcTypeObject } from './'
import { IfcLabel, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'

/** IfcTypeProduct defines a type definition of a product without being already inserted into a project structure (without having a placement), and not being included in the geometric representation context of the project.
 *
 * It is used to define a product specification, that is, the specific product information that is common to all occurrences of that product type
 *
 * An IfcTypeProduct may have a list of property set attached and an optional set of product representations.
 *
 * Values of these properties and the representation maps are common to all occurrences of that product type.
 *
 * The type-occurrence relationship is realized using the objectified relationship IfcRelDefinesByType
 *
 * The representations at the occurrence level (represented by subtypes of IfcProduct) can override the specific representations at the type level:An IfcTypeProduct may be exchanged without being already assigned to subtypes of IfcProduct.
 */
 class IfcTypeProduct extends IfcTypeObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets)
        this.RepresentationMaps = RepresentationMaps
        this.Tag = Tag
    }
    /** List of unique representation maps.
     * Each representation map describes a block definition of the shape of the product style.
     * By providing more than one representation map, a multi-view block definition can be given.
    */
    RepresentationMaps?: Array<IfcRepresentationMap>
    /** The tag (or label) identifier at the particular type of a product, e.g. the article number (like the EAN).
     * It is the identifier at the specific level.
    */
    Tag?: IfcLabel
}

export default IfcTypeProduct