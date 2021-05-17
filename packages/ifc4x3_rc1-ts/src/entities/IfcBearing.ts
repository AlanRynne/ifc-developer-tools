// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBearing

import { IfcBearingTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** Type of building element that is usually used to transmit loads from superstructure to substructure, and usually allowing movement (displacement or rotation) in one or more degrees of freedom.
 *
 * It is typically a mechanical component procured as a whole and installed on site, but in simple cases it may be built on site (composed of other building elements, element components, etc.).
 */
 class IfcBearing extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcBearingTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a bearing that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcBearingType is assigned, providing its own IfcBearingType.PredefinedType.
    */
    PredefinedType?: IfcBearingTypeEnum
}

export default IfcBearing