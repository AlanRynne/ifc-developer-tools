// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialConstituent

import { IfcLabel, IfcText, IfcNormalisedRatioMeasure } from '../types'
import { IfcMaterial, IfcMaterialDefinition } from './'

/** IfcMaterialConstituent is a single and identifiable part of an element which is constructed of a number of part (one or more) each having an individual material.
 *
 * The association of the material constituent to the part is provided by a keyword as value of the Name attribute.
 *
 * In order to identify and distinguish the part of the shape representation to which the material constituent applies the IfcProductDefinitionShape of the element has to include instances of IfcShapeAspect, using the same keyword for their Name attribute.
 */
 class IfcMaterialConstituent extends IfcMaterialDefinition {
    constructor(Name:IfcLabel, Description:IfcText, Material:IfcMaterial, Fraction:IfcNormalisedRatioMeasure, Category:IfcLabel) {
        super()
        this.Name = Name
        this.Description = Description
        this.Material = Material
        this.Fraction = Fraction
        this.Category = Category
    }
    /** The name by which the material constituent is known.
    */
    Name?: IfcLabel
    /** Definition of the material constituent in descriptive terms.
    */
    Description?: IfcText
    /** Reference to the material from which the constituent is constructed.
    */
    Material: IfcMaterial
    /** Optional provision of a fraction of the total amount (volume or weight) that applies to the IfcMaterialConstituentSet that is contributed by this IfcMaterialConstituent.
    */
    Fraction?: IfcNormalisedRatioMeasure
    /** Category of the material constituent, e.g. the role it has in the constituent set it belongs to.
    */
    Category?: IfcLabel
}

export default IfcMaterialConstituent