// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuildingElementProxy

import { IfcBuildingElementProxyTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** The IfcBuildingElementProxy is a proxy definition that provides the same functionality as subtypes of IfcBuildingElement, but without having a predefined meaning of the special type of building element, it represents
 *
 * Proxies can also be used as spatial place holders or provisions, that are later replaced by special types of elements
 *
 * One use of the proxy object is a provision for voids, i.e. where a particular volume of space is requested by an engineering function that might later be accepted or rejected.
 *
 * If accepted it is transformed into a void within a building element, like a wall opening, or a slab opening.
 *
 * The provision for voids is exchanged as an IfcBuildingElementProxy with the PredefinedType = ProvisionForVoid.
 *
 * Such proxy shall have a swept solid geometry, where the profile of the swept solid lies on/near the surface of the referred building element and the extrusion depths is equal to or bigger then (in case of round or otherwise irregular element shape) the thickness of the building element.
 *
 * The appropriate property set should be attached
 *
 * In addition to the provision for voids, the building element proxy can also represent a provision for space, often the necessary space allocation for mechanical equipment that will be determined in a later design phase.
 *
 * The provision for space is exchanged as an IfcBuildingElementProxy with the PredefinedType = ProvisionForSpace.
 *
 * Other usages of IfcBuildingElementProxy include:
 */
 class IfcBuildingElementProxy extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcBuildingElementProxyTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a building element proxy that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcBuildingElementProxyType is assigned, providing its own IfcBuildingElementProxyType.PredefinedType.
     * IFC4 CHANGE The attribute CompositionType has been replaced by PredefinedType, being a superset of the enumerators.
    */
    PredefinedType?: IfcBuildingElementProxyTypeEnum
}

export default IfcBuildingElementProxy