// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceFeature

import { IfcSurfaceFeatureTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFeatureElement } from './'

/** A surface feature is a modification at (onto, or into) of the surface of an element.
 *
 * Parts of the surface of the entire surface may be affected.
 *
 * The volume and mass of the element may be increased, remain unchanged, or be decreased by the surface feature, depending on manufacturing technology.
 *
 * However, any increase or decrease of volume is small compared to the total volume of the element
 *
 * The standard use of instances of IfcSurfaceFeature is as a part of element type objects (instances of subtypes of IfcElementType).
 *
 * The part–whole relationship is established by an aggregation relationship object, expressing the decomposition of an element type into one or more additive elements (element parts) and zero or more feature elements
 *
 * Containment Use Definition:Surface features shall have no spatial containment relationship to the spatial structure since they are dependent on element types without spatial containment relationships or on an element occurrence with own spatial containment relationship
 *
 * Geometry use definition:The geometric representation of IfcSurfaceFeatureElement is given by the IfcProductDefinitionShape, allowing multiple geometric representation
 *
 * Local PlacementThe local placement for IfcSurfaceFeatureElement is defined in its supertype IfcProduct.
 *
 * It is defined by the IfcLocalPlacement, which defines the local coordinate system that is referenced by all geometric representations
 *
 * Shape representationDifferent shape representations may be used, depending on the nature of the feature and information requirements:Higher-level parameters (geometric and non-geometric) may be provided by property sets based on local agreements.
 */
 class IfcSurfaceFeature extends IfcFeatureElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcSurfaceFeatureTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Indicates the kind of surface feature.
    */
    PredefinedType?: IfcSurfaceFeatureTypeEnum
}

export default IfcSurfaceFeature