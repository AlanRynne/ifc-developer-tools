// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterial

import { IfcLabel } from '../types'

/** IfcMaterial is a homogeneous or inhomogeneous substance that can be used to form elements (physical products or their components)
 *
 * IfcMaterial is the basic entity for material designation and definition; this includes identification by name and classification (via reference to an external classification), as well as association of material properties (isotropic or anisotropic) defined by (subtypes of) IfcMaterialProperties.
 *
 * An instance of IfcMaterial may be associated to an element or element type using the IfcRelAssociatesMaterial relationship.
 *
 * The assignment might either be direct as a single material information, or viaAn IfcMaterial may also have presentation information associated.
 *
 * Such presentation information is provided by IfcMaterialDefinitionRepresentation, associating curve styles, hatching definitions or surface colouring/rendering information to a material.
 */
 class IfcMaterial  {
    constructor(Name:IfcLabel) {

        this.Name = Name
    }
    /** Name of the material.
     * EXAMPLE A view definition may require Material
     * Name to uniquely specify e.g. concrete or steel grade, in which case the attribute Material
     * Category could take the value 'Concrete' or 'Steel'.
     * Material grade may have different meaning in different view definitions, e.g. strength grade for structural design and analysis, or visible appearance grade in architectural application.
     * Also, more elaborate material grade definition may be associated as classification via inverse attribute HasExternalReferences.
    */
    Name: IfcLabel
}

export default IfcMaterial