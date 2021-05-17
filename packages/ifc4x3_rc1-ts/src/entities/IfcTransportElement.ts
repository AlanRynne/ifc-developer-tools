// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTransportElement

import { IfcTransportElementTypeSelect, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** A transport element is a generalization of all transport related objects that move people, animals or goods within a building or building complex.
 *
 * The IfcTransportElement defines the occurrence of a transport element, that (if given), is expressed by the IfcTransportElementType.
 *
 * Depending on local classification systems transport elements and transportation systems in buildings are either considered as part of a building system, or as part of a building service system.
 *
 * Within IFC they are considered as part of a building system and may have to be mapped appropriately.
 */
 class IfcTransportElement extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcTransportElementTypeSelect) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic types for a transportation element that are specified in an enumeration.
     * There might be property sets defined specifically for each predefined type.
     * IFC4 CHANGE The attribute has been changed to be optional.
    */
    PredefinedType?: IfcTransportElementTypeSelect
}

export default IfcTransportElement