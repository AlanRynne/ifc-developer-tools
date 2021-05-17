// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesMaterial

import { IfcMaterialSelect, IfcGloballyUniqueId, IfcLabel, IfcText, IfcDefinitionSelect } from '../types'
import { IfcOwnerHistory, IfcRelAssociates } from './'

/** IfcRelAssociatesMaterial is an objectified relationship between a material definition and elements or element types to which this material definition applies
 *
 * The material definition can be:Materials can be arranged by layers and applied to layered elements.
 *
 * Typical elements are walls and slabs
 *
 * Material can be applied to profiles.
 *
 * Typical elements using profile material are beam, column, memberMaterials can be arranged by identified parts of a component based element.
 *
 * Typical elements are dorrs/windows (with components such as lining, framing and glazing), or distribution elements
 *
 * As a fallback, or in cases where only a single material information is needed, material information can be directly associatedThe IfcRelAssociatesMaterial relationship is a special type of the IfcRelAssociates relationship.
 *
 * It can be applied to subtypes of IfcElement and subtypes of IfcElementType
 *
 * If both, the element occurrence (by an instance of IfcElement) and the element type (by an instance of IfcElementType, connected through IfcRelDefinesByType) have an associated material, then the material associated to the element occurrence overrides the material associated to the element type
 *
 * Informal Propositions:
 */
 class IfcRelAssociatesMaterial extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcDefinitionSelect>, RelatingMaterial:IfcMaterialSelect) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingMaterial = RelatingMaterial
    }
    /** Material definition assigned to the elements or element types.
    */
    RelatingMaterial: IfcMaterialSelect
}

export default IfcRelAssociatesMaterial