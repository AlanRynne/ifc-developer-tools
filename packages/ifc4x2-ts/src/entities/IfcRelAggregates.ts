// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAggregates

import { IfcObjectDefinition, IfcOwnerHistory, IfcRelDecomposes } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The aggregation relationship IfcRelAggregates is a special type of the general composition/decomposition (or whole/part) relationship IfcRelDecomposes.
 *
 * The aggregation relationship can be applied to all subtypes of IfcObjectDefinition
 *
 * In cases of aggregation of physical elements into a physical aggregate the shape representation of the whole (within the same representation identifier) can be taken from the sum of the shape representations of the parts
 *
 * Decompositions imply a dependency, implying that the whole depends on the definition of the parts and the parts depend on the existence of the whole.
 *
 * The behaviour that is implied from the dependency relationship has to be established inside the applications.
 */
 class IfcRelAggregates extends IfcRelDecomposes {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingObject:IfcObjectDefinition, RelatedObjects:Array<IfcObjectDefinition>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingObject = RelatingObject
        this.RelatedObjects = RelatedObjects
    }
    /** The object definition, either an object type or an object occurrence, that represents the aggregation.
     * It is the whole within the whole/part relationship.
     * IFC4 CHANGE The attribute has been demoted from the supertype IfcRelDecomposes and defines the non-ordered aggregation relationship.
    */
    RelatingObject: IfcObjectDefinition
    /** The object definitions, either object occurrences or object types, that are being aggregated.
     * They are defined as the parts in the whole/part relationship.
     * No order is implied between the parts.
     * IFC4 CHANGE The attribute has been demoted from the supertype IfcRelDecomposes and defines the non-ordered set of parts within the aggregation.
    */
    RelatedObjects: Array<IfcObjectDefinition>
}

export default IfcRelAggregates