// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEdgeFeature

import { IfcPositiveLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFeatureElementSubtraction } from './'

/**  */
abstract class IfcEdgeFeature extends IfcFeatureElementSubtraction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, FeatureLength:IfcPositiveLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.FeatureLength = FeatureLength
    }

    FeatureLength?: IfcPositiveLengthMeasure
}

export default IfcEdgeFeature