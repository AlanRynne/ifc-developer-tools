// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcChamferEdgeFeature

import { IfcPositiveLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcEdgeFeature } from './'

/**  */
 class IfcChamferEdgeFeature extends IfcEdgeFeature {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, FeatureLength:IfcPositiveLengthMeasure, Width:IfcPositiveLengthMeasure, Height:IfcPositiveLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, FeatureLength)
        this.Width = Width
        this.Height = Height
    }

    Width?: IfcPositiveLengthMeasure

    Height?: IfcPositiveLengthMeasure
}

export default IfcChamferEdgeFeature