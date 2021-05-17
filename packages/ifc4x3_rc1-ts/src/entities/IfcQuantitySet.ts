// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcQuantitySet

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition } from './'

/** IfcQuantitySet is the the abstract supertype for all quantity sets attached to objects.
 *
 * The quantity set is a container class that holds the individual quantities within a quantity tree.
 *
 * These quantities are interpreted according to their name attribute and classified according to their measure type.
 *
 * Some quantity sets are included in the IFC specification and have a predefined set of quantities indicated by assigning a significant name.
 *
 * These quantity sets are listed as "quantity sets" within this specification.
 *
 * Quantity sets applicable to certain objects are listed in the object specification
 *
 * An IfcPropertySetTemplate may define the underlying structure, i.e. the required name, the applicable object or object types to which the quantity set can be attached, and the individual quantities that maybe included.
 *
 * Quantity sets are related to other objects by using the relationship object that refers to the corresponding object:
 */
abstract class IfcQuantitySet extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcQuantitySet