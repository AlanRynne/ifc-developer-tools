// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialList

import { IfcMaterial } from './'

/** IfcMaterialList is a list of the different materials that are used in an element.
 */
 class IfcMaterialList  {
    constructor(Materials:Array<IfcMaterial>) {

        this.Materials = Materials
    }
    /** Materials used in a composition of substances.
    */
    Materials: Array<IfcMaterial>
}

export default IfcMaterialList