// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBridgePart

import { IfcBridgePartTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcElementCompositionEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFacilityPart } from './'

/** In a bridge, BridgePart as subtype of FacilityPart represents the parts in breakdown structure according to local practices (e.g. Superstructure, Substructure, Foundation), and these can also be broken down further (e.g. Substructure as whole can be COMPLEX, while each abutment and pier would be ELEMENT, and a pier can be composed of separate towers (PARTIAL).
 */
 class IfcBridgePart extends IfcFacilityPart {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum, PredefinedType:IfcBridgePartTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName, CompositionType)
        this.PredefinedType = PredefinedType
    }
    /** 
    */
    PredefinedType?: IfcBridgePartTypeEnum
}

export default IfcBridgePart