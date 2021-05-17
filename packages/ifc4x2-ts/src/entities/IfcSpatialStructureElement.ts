// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpatialStructureElement

import { IfcElementCompositionEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcSpatialElement } from './'

/** A spatial structure element is the generalization of all spatial elements that might be used to define a spatial structure.
 *
 * That spatial structure is often used to provide a project structure to organize a building project
 *
 * A spatial project structure might define as many levels of decomposition as necessary for the building project.
 *
 * Elements within the spatial project structure are:or aggregations or parts thereof.
 *
 * The composition type declares an element to be either an element itself, or an aggregation (complex) or a decomposition (part).
 *
 * The interpretation of these types is given at each subtype of IfcSpatialStructureElement
 *
 * The IfcRelAggregates is defined as an 1-to-many relationship and used to establish the relationship between exactly two levels within the spatial project structure.
 *
 * Finally the highest level of the spatial structure is assigned to IfcProject using the IfcRelAggregates
 *
 * The subtypes of IfcSpatialStructureElement relate to other elements and systems by establishing the following relationships:The subtypes of IfcSpatialStructureElement relate to each other by using the IfcRelAggregates relationship to build the project spatial structure.
 *
 * Figure 191 shows the use of IfcRelAggregates to establish a spatial structure including site, building, building section and storey.
 *
 * More information is provided at the level of the subtypes
 *
 * Informal Propositions:
 */
abstract class IfcSpatialStructureElement extends IfcSpatialElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName)
        this.CompositionType = CompositionType
    }
    /** Denotes, whether the predefined spatial structure element represents itself, or an aggregate (complex) or a part (part).
     * The interpretation is given separately for each subtype of spatial structure element.
     * If no CompositionType is asserted, the dafault value 'ELEMENT' applies.
     * IFC4 CHANGE Attribute made optional.
    */
    CompositionType?: IfcElementCompositionEnum
}

export default IfcSpatialStructureElement