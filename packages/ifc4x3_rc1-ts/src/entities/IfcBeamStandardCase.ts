// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBeamStandardCase

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier, IfcBeamTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBeam } from './'

/** The standard beam, IfcBeamStandardCase, defines a beam with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation.
 *
 * The IfcBeamStandardCase handles all cases of beams, that:Geometric RepresentationsThe geometric representation of IfcBeamStandardCase is defined using the following multiple shape representations for its definition:
 */
 class IfcBeamStandardCase extends IfcBeam {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcBeamTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, PredefinedType)

    }

}

export default IfcBeamStandardCase