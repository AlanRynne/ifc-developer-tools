// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelDecomposes

import { IfcObjectDefinition, IfcOwnerHistory, IfcRelationship } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The decomposition relationship, IfcRelDecomposes, defines the general concept of elements being composed or decomposed.
 *
 * The decomposition relationship denotes a whole/part hierarchy with the ability to navigate from the whole (the composition) to the parts and vice versa
 *
 * Decompositions may be constrained by requiring both, the whole and its parts, to be of the same type - thus establishing a nesting relationship.
 *
 * Or they may require some form of physical containment, thus establishing special types of aggregation relationships
 *
 * Decompositions imply a dependency, i.e. the definition of the whole depends on the definition of the parts and the parts depend on the existence of the whole.
 *
 * The decomposition relationship can be applied in a recursive manner, i.e. a decomposed element can be part in another decomposition.
 *
 * Cyclic references have to be prevented at application level.
 */
abstract class IfcRelDecomposes extends IfcRelationship {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingObject:IfcObjectDefinition, RelatedObjects:Array<IfcObjectDefinition>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingObject = RelatingObject
        this.RelatedObjects = RelatedObjects
    }
    /** undefined
    */
    RelatingObject: IfcObjectDefinition
    /** undefined
    */
    RelatedObjects: Array<IfcObjectDefinition>
}

export default IfcRelDecomposes