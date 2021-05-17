// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPlateStandardCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcPlateTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcPlate } from './'

/** The standard plate, IfcPlateStandardCase, defines a plate with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation.
 *
 * The IfcPlateStandardCase handles all cases of plates, that:The definitions of plate openings and niches are the same as given at the supertype IfcPlate.
 *
 * The same agreements to the special types of plates, as defined in the PredefinedType attribute apply as well.
 */
 class IfcPlateStandardCase extends IfcPlate {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcPlateTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, PredefinedType)

    }

}

export default IfcPlateStandardCase