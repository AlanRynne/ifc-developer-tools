// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertySet

import { IfcProperty, IfcOwnerHistory, IfcPropertySetDefinition } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The IfcPropertySet is a container that holds properties within a property tree.
 *
 * These properties are interpreted according to their name attribute.
 *
 * Each individual property has a significant name string.
 *
 * Some property sets are included in the specification of this standard and have a predefined set of properties indicated by assigning a significant name.
 *
 * These property sets are listed under "property sets" within this specification.
 *
 * Property sets applicable to certain objects are listed in the object specification.
 *
 * The naming convention "Pset_Xxx" applies to all those property sets that are defined as part of this specification and it shall be used as the value of the Name attribute
 *
 * In addition any user defined property set can be captured.
 *
 * Property sets that are not declared as part of the IFC specification shall have a Name value not including the "Pset_" prefix
 *
 * IfcPropertySet can be assigned to object occurrences and object types.
 *
 * An IfcPropertySet assigned to an object type is shared among all occurrences of the same object type
 *
 * An IfcPropertySetTemplate may define the underlying structure, i.e. the required name, the applicable object or object types to which the property set can be attached, and the individual properties that can be included.
 *
 * Property sets are related to other objects by using the relationship object that refers to the corresponding object:
 */
 class IfcPropertySet extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, HasProperties:Array<IfcProperty>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.HasProperties = HasProperties
    }
    /** Contained set of properties.
     * For property sets defined as part of the IFC Object model, the property objects within a property set are defined as part of the standard.
     * If a property is not contained within the set of predefined properties, its value has not been set at this time.
    */
    HasProperties: Array<IfcProperty>
}

export default IfcPropertySet