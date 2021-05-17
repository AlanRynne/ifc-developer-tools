// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCovering

import { IfcCoveringTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** A covering is an element which covers some part of another element and is fully dependent on that other element.
 *
 * The IfcCovering defines the occurrence of a covering type, that (if given) is expressed by the IfcCoveringType
 *
 * Coverings are elements with relationships to the covered element and the space on the other side, they may contain openings, assigned by IfcRelVoidsElement, material information, assigned by IfcRelAssociatesMaterial, and others
 *
 * Coverings can be assigned toThe following guideline shall apply:
 */
 class IfcCovering extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcCoveringTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined types to define the particular type of the covering.
     * There may be property set definitions available for each predefined type.
     * The PredefinedType shall only be used, if no IfcCoveringType is assigned, providing its own IfcCoveringType.PredefinedType.
    */
    PredefinedType?: IfcCoveringTypeEnum
}

export default IfcCovering