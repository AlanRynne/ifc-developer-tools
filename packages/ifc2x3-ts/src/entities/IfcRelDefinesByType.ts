// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelDefinesByType

import { IfcTypeObject, IfcOwnerHistory, IfcObject, IfcRelDefines } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The objectified relationship IfcRelDefinesByType defines the relationship between an object type and object occurrences.
 *
 * The IfcRelDefinesByType is a 1-to-N relationship, as it allows for the assignment of one type information to a single or to many objects.
 *
 * Those objects then share the same object type, and the property sets and properties assigned to the object type
 *
 * The IfcRelDefinesByType links the object type definition with the object occurrence.
 *
 * Both may define properties by assigning an IfcPropertySet, including one or many subtypes of IfcProperty to either the object type or object occurrence, as shown in Figure 138
 *
 * There are several scenarios to define the same property set on the object type definition and object occurrence side:The following table provides an example of assigning
 */
 class IfcRelDefinesByType extends IfcRelDefines {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObject>, RelatingType:IfcTypeObject) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingType = RelatingType
    }
    /** Reference to the type (or style) information for that object or set of objects.
    */
    RelatingType: IfcTypeObject
}

export default IfcRelDefinesByType