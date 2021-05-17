// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelDefinesByObject

import { IfcObject, IfcOwnerHistory, IfcRelDefines } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The objectified relationship IfcRelDefinesByObject defines the relationship between an object taking part in an object type decomposition and an object occurrences taking part in an occurrence decomposition of that type
 *
 * The IfcRelDefinesByObject is a 1-to-N relationship, as it allows for the assignment of one declaring object information to a single or to many reflected objects.
 *
 * Those objects then share the same object property sets and, for subtypes of IfcProduct, the eventually assigned representation maps
 *
 * Only objects that take part in a type decomposition and in an occurrence decomposition of the same type can be connected by the IfcRelDefinesByObject relationship.
 *
 * The IfcRelDefinesByObject links the decomposed object type part, also called the "declaring part" with the occurrence of that part inside the occurrence of the decomposed type, also called the "reflected part", as shown in Figure 137.
 *
 * The IfcRelDefinesByObject can be used together with the shape representations of the product type as shown in Figure 138.
 *
 * The IfcShapeRepresentation of the "declaring part" is referenced by the "reflected part".
 *
 * The IfcObjectPlacement of the model occurrence (the whole) determines the position within the project context.
 */
 class IfcRelDefinesByObject extends IfcRelDefines {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObject>, RelatingObject:IfcObject) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedObjects = RelatedObjects
        this.RelatingObject = RelatingObject
    }
    /** Objects being part of an object occurrence decomposition, acting as the "reflecting parts" in the relationship.
    */
    RelatedObjects: Array<IfcObject>
    /** Object being part of an object type decomposition, acting as the "declaring part" in the relationship.
    */
    RelatingObject: IfcObject
}

export default IfcRelDefinesByObject