// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRoundedEdgeFeature

import { IfcPositiveLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcEdgeFeature } from './'

/**  */
 class IfcRoundedEdgeFeature extends IfcEdgeFeature {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, FeatureLength:IfcPositiveLengthMeasure, Radius:IfcPositiveLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, FeatureLength)
        this.Radius = Radius
    }

    Radius?: IfcPositiveLengthMeasure
}

export default IfcRoundedEdgeFeature