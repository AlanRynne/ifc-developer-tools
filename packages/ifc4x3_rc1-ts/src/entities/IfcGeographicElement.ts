// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGeographicElement

import { IfcGeographicElementTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** An IfcGeographicElement is a generalization of all elements within a geographical landscape.
 *
 * It includes occurrences of typical geographical elements, often referred to as features, such as trees or terrain.
 *
 * Common type information behind several occurrences of IfcGeographicElement is provided by the IfcGeographicElementType.
 */
 class IfcGeographicElement extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcGeographicElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic types for a geographic element that are specified in an enumeration.
     * There might be property sets defined specifically for each predefined type.
    */
    PredefinedType?: IfcGeographicElementTypeEnum
}

export default IfcGeographicElement