// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialRelationship

import { IfcMaterial, IfcResourceLevelRelationship } from './'
import { IfcLabel, IfcText } from '../types'

/** IfcMaterialRelationship defines a relationship between part and whole in material definitions (as in composite materials).
 *
 * The parts, expressed by the set of RelatedMaterials, are material constituents of which a single material aggregate is composed.
 */
 class IfcMaterialRelationship extends IfcResourceLevelRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatingMaterial:IfcMaterial, RelatedMaterials:Array<IfcMaterial>, Expression:IfcLabel) {
        super(Name, Description)
        this.RelatingMaterial = RelatingMaterial
        this.RelatedMaterials = RelatedMaterials
        this.Expression = Expression
    }
    /** Reference to the relating material (the composite).
    */
    RelatingMaterial: IfcMaterial
    /** Reference to related materials (as constituents of composite material).
    */
    RelatedMaterials: Array<IfcMaterial>
    /** Information about the material relationship refering for example to the amount of related materials in the composite material.
     * Any formal meaning of the Expression string value has to be established in model view definitions or implementer agreements.
     * No such formal language is provided as part of this specification.
    */
    Expression?: IfcLabel
}

export default IfcMaterialRelationship