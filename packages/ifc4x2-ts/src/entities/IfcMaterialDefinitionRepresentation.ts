// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialDefinitionRepresentation

import { IfcMaterial, IfcRepresentation, IfcProductRepresentation } from './'
import { IfcLabel, IfcText } from '../types'

/** IfcMaterialDefinitionRepresentation defines presentation information relating to IfcMaterial.
 *
 * It allows for multiple presentations of the same material for different geometric representation contexts.
 *
 * The IfcMaterialDefinitionRepresentation can apply Use definition
 */
 class IfcMaterialDefinitionRepresentation extends IfcProductRepresentation {
    constructor(Name:IfcLabel, Description:IfcText, Representations:Array<IfcRepresentation>, RepresentedMaterial:IfcMaterial) {
        super(Name, Description, Representations)
        this.RepresentedMaterial = RepresentedMaterial
    }
    /** Reference to the material to which the representation applies.
    */
    RepresentedMaterial: IfcMaterial
}

export default IfcMaterialDefinitionRepresentation