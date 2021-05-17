// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelNests

import { IfcObjectDefinition, IfcOwnerHistory, IfcRelDecomposes } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The nesting relationship IfcRelNests is a special type of the general composition/decomposition (or whole/part) relationship IfcRelDecomposes.
 *
 * The nesting relationship can be applied to all non physical subtypes of object and object types, namely processes, controls (like cost items), and resources.
 *
 * It can also be applied to physical subtypes of object and object types, namely elements having ports.
 *
 * The nesting implies an order among the nested parts.
 *
 * Decompositions imply a dependency, i.e. the definition of the whole depends on the definition of the parts and the parts depend on the existence of the whole.
 *
 * The behaviour that is implied from the dependency has to be established inside the applications.
 */
 class IfcRelNests extends IfcRelDecomposes {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingObject:IfcObjectDefinition, RelatedObjects:Array<IfcObjectDefinition>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingObject = RelatingObject
        this.RelatedObjects = RelatedObjects
    }
    /** The object definition, either an non-product object type or a non-product object occurrence, that represents the nest.
     * It is the whole within the whole/part relationship.
     * IFC4 CHANGE The attribute has been demoted from the supertype IfcRelDecomposes and defines the ordered nesting relationship.
    */
    RelatingObject: IfcObjectDefinition
    /** The object definitions, either non-product object occurrences or non-product object types, that are being nestes.
     * They are defined as the parts in the ordered whole/part relationship - i.e. there is an implied order among the parts expressed by the position within the list of RelatedObjects.
     * IFC4 CHANGE The attribute has been demoted from the supertype IfcRelDecomposes and defines the ordered set of parts within the nest.
    */
    RelatedObjects: Array<IfcObjectDefinition>
}

export default IfcRelNests