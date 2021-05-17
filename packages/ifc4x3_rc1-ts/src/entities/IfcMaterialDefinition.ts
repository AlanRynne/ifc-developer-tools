// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialDefinition



/** IfcMaterialDefinition is a general supertype for all material related information items in IFC that have common material related properties that may include association of material with some shape parameters or assignments to identified parts of a component
 *
 * There are three ways of assigning materials to a single component or multiple components; they are characterized as:Each instantiable subtype of IfcMaterialDefinition may have material properties assigned, or have an external classification of its definition.
 *
 * It can be assigned to either a subtype of IfcElement, or a subtype of IfcElementType by using the objectified relationship IfcRelAssociatesMaterial.
 */
abstract class IfcMaterialDefinition  {
    constructor() {


    }

}

export default IfcMaterialDefinition