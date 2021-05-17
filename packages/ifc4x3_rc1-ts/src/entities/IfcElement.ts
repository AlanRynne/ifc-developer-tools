// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElement

import { IfcIdentifier, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcProduct } from './'

/** An element is a generalization of all components that make up an AEC product
 *
 * Elements are physically existent objects, although they might be void elements, such as holes.
 *
 * Elements either remain permanently in the AEC product, or only temporarily, as formwork does.
 *
 * Elements can be either assembled on site or pre-manufactured and built in on site
 *
 * The elements can be logically contained by a spatial structure element that constitutes a certain level within a project structure hierarchy (site, building, storey or space).
 *
 * This is done by using the IfcRelContainedInSpatialStructure relationship.
 *
 * An element can have material and quantity information assigned through the IfcRelAssociatesMaterial and IfcRelDefinesByProperties relationship
 *
 * In addition an element can be declared to be a specific occurrence of an element type (and thereby be defined by the element type properties) using the IfcRelDefinesByType relationship.
 *
 * An element can also be defined as an element assembly that is a group of semantically and topologically related elements that form a higher level part of the AEC product.
 *
 * Those element assemblies are defined by virtue of the IfcRelAggregates relationship
 *
 * Elements that performs the same function may be grouped by an "Element Group By Function".
 *
 * It is realized by an instance of IfcGroup with the ObjectType ='ElementGroupByFunction'.
 */
abstract class IfcElement extends IfcProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.Tag = Tag
    }
    /** The tag (or label) identifier at the particular instance of a product, e.g. the serial number, or the position number.
     * It is the identifier at the occurrence level.
    */
    Tag?: IfcIdentifier
}

export default IfcElement