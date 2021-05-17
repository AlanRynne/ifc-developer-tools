// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOpeningStandardCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcOpeningElementTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcOpeningElement } from './'

/** The standard opening, IfcOpeningStandardCase, defines an opening with certain constraints for the dimension parameters, position within the voided element, and with certain constraints for the geometric representation.
 *
 * The IfcOpeningStandardCase handles all cases of openings, that:
 */
 class IfcOpeningStandardCase extends IfcOpeningElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcOpeningElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, PredefinedType)

    }

}

export default IfcOpeningStandardCase