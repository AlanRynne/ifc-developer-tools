// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSlabElementedCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcSlabTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcSlab } from './'

/** The IfcSlabElementedCase defines a slab with certain constraints for the provision of its components.
 *
 * The IfcSlabElementedCase handles all cases of slabs, that are decomposed into parts: Voiding Use Definition:As shown in Figure 248, openings within the composite slab are directly assigned to IfcSlabElementedCase using IfcRelVoidsElement pointing to IfcOpeningElement and apply to all aggregated parts.
 *
 * If individual parts have cutting and other voiding features, then the decomposed parts have a separate voiding relationship IfcRelVoidsElement pointing to IfcVoidingFeature.
 */
 class IfcSlabElementedCase extends IfcSlab {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcSlabTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, PredefinedType)

    }

}

export default IfcSlabElementedCase