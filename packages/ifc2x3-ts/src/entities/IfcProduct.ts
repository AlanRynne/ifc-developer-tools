// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProduct

import { IfcObjectPlacement, IfcProductRepresentation, IfcOwnerHistory, IfcObject } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The IfcProduct is an abstract representation of any object that relates to a geometric or spatial context.
 *
 * An IfcProduct occurs at a specific location in space if it has a geometric representation assigned.
 *
 * It can be placed relatively to other products, but ultimately relative to the project coordinate system.
 *
 * The ObjectPlacement attribute establishes the coordinate system in which all points and directions used by the geometric representation items under Representation are founded.
 *
 * The Representation is provided by an IfcProductDefinitionShape being either a geometric shape representation, or a topology representation (with or without underlying geometry of the topological items)
 *
 * Products include manufactured, supplied or created objects (referred to as elements) for incorporation into an AEC/FM project.
 *
 * This also includes objects that are created indirectly by other products, as spaces are defined by bounding elements.
 *
 * Products can be designated for permanent use or temporary use, an example for the latter is formwork.
 *
 * Products are defined by their properties and representations
 *
 * In addition to physical products (covered by the subtype IfcElement) and spatial items (covered by the subtype IfcSpatialElement) the IfcProduct also includes non-physical items, that relate to a geometric or spatial contexts, such as grid, port, annotation, structural actions, etc
 *
 * Any instance of IfcProduct defines a particular occurrence of a product, the common type information, that relates to many similar (or identical) occurrences of IfcProduct, is handled by the IfcTypeProduct (and its subtypes), assigned to one or many occurrences of IfcProduct by using the objectified relationship IfcRelDefinesByType.
 *
 * The IfcTypeProduct may provide, in addition to common properties, also a common geometric representation for all occurrences
 *
 * On a generic level products can be assigned to processes, controls, resources, project by using the relationship objects that refer to the corresponding object:
 */
abstract class IfcProduct extends IfcObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.ObjectPlacement = ObjectPlacement
        this.Representation = Representation
    }
    /** Placement of the product in space, the placement can either be absolute (relative to the world coordinate system), relative (relative to the object placement of another product), or constraint (e.g. relative to grid axes).
     * It is determined by the various subtypes of IfcObjectPlacement, which includes the axis placement information to determine the transformation for the object coordinate system.
    */
    ObjectPlacement?: IfcObjectPlacement
    /** Reference to the representations of the product, being either a representation (IfcProductRepresentation) or as a special case a shape representations (IfcProductDefinitionShape).
     * The product definition shape provides for multiple geometric representations of the shape property of the object within the same object coordinate system, defined by the object placement.
    */
    Representation?: IfcProductRepresentation
}

export default IfcProduct