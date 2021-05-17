// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialClassificationRelationship

import { IfcClassificationNotationSelect } from '../types'
import { IfcMaterial } from './'

/** IfcMaterialClassificationRelationship is a relationship assigning classifications to materials.
 */
 class IfcMaterialClassificationRelationship  {
    constructor(MaterialClassifications:Array<IfcClassificationNotationSelect>, ClassifiedMaterial:IfcMaterial) {

        this.MaterialClassifications = MaterialClassifications
        this.ClassifiedMaterial = ClassifiedMaterial
    }
    /** The material classifications identifying the type of material.
    */
    MaterialClassifications: Array<IfcClassificationNotationSelect>
    /** Material being classified.
    */
    ClassifiedMaterial: IfcMaterial
}

export default IfcMaterialClassificationRelationship