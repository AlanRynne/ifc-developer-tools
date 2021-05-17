// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcVoidingFeature

import { IfcVoidingFeatureTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFeatureElementSubtraction } from './'

/** A voiding feature is a modification of an element which reduces its volume.
 *
 * Such a feature may be manufactured in different ways, for example by cutting, drilling, or milling of members made of various materials, or by inlays into the formwork of cast members made of materials such as concrete
 *
 * The standard use of instances of IfcVoidingFeature is as a part of element type objects (instances of subtypes of IfcElementType).
 *
 * The part–whole relationship is established by an aggregation relationship object, expressing the decomposition of an element type into one or more additive elements (element parts) and zero or more feature elements
 *
 * Containment Use DefinitionVoiding features shall have no spatial containment relationship to the spatial structure since they are dependent on element types without spatial containment relationships or on an element occurrence with own spatial containment relationship.
 */
 class IfcVoidingFeature extends IfcFeatureElementSubtraction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcVoidingFeatureTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Qualifies the feature regarding its shape and configuration relative to the voided element.
    */
    PredefinedType?: IfcVoidingFeatureTypeEnum
}

export default IfcVoidingFeature