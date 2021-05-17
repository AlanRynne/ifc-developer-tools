// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSlabStandardCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcSlabTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcSlab } from './'

/** The standard slab, IfcSlabStandardCase, defines a slab with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation.
 *
 * The IfcSlabStandardCase handles all cases of slabs, that:The definitions of slab openings and niches are the same as given at the supertype IfcSlab.
 *
 * The same agreements to the special types of slabs, as defined in the PredefinedType attribute apply as well.
 */
 class IfcSlabStandardCase extends IfcSlab {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcSlabTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, PredefinedType)

    }

}

export default IfcSlabStandardCase