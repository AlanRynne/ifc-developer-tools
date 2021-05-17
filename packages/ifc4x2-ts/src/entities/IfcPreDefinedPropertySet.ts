// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPreDefinedPropertySet

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition } from './'

/** IfcPreDefinedPropertySet is a generalization of all statically defined property sets that are assigned to an object or type object.
 *
 * The statically or pre-defined property sets are entities with a fixed list of attributes having particular defined data types
 *
 * Property sets are related to other objects by using the relationship object that refers to the corresponding object:IfcPreDefinedPropertySet's can be assigned to objects and object types but do not have a defining property set template.
 */
abstract class IfcPreDefinedPropertySet extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcPreDefinedPropertySet