// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialProperties

import { IfcMaterial } from './'

/** The IfcMaterialProperties assigns a set of material properties to associated material definitions.
 *
 * The set may be identified by a Name and a Description.
 *
 * The IfcProperty (instantiable subtypes) is used to express the individual material properties by name, description, value and unit.
 */
abstract class IfcMaterialProperties  {
    constructor(Material:IfcMaterial) {

        this.Material = Material
    }
    /** Reference to the material definition to which the set of properties is assigned.
     * IFC4 CHANGE The datatype has been changed to supertype IfcMaterialDefinition.
    */
    Material: IfcMaterial
}

export default IfcMaterialProperties