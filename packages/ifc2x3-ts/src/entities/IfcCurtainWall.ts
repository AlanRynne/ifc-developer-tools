// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCurtainWall

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** A curtain wall is an exterior wall of a building which is an assembly of components, hung from the edge of the floor/roof structure rather than bearing on a floor.
 *
 * Curtain wall is represented as a building element assembly and implemented as a subtype of IfcBuildingElement that uses an IfcRelAggregates relationship
 *
 * The geometric representation of IfcCurtainWall is given by the IfcProductDefinitionShape, allowing multiple geometric representations.
 *
 * Independent 'Body' geometric representation, as described below, should only be used when the IfcCurtainWall is not defined as an aggregate.
 *
 * If defined as an aggregate, the geometric representation is the sum of the representations of the components within the aggregate
 *
 * The geometric representation of IfcCurtainWall is defined using the following multiple shape representations for its definition:
 */
 class IfcCurtainWall extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcCurtainWall