// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBeam

import { IfcBeamTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuiltElement } from './'

/** An IfcBeam is a horizontal, or nearly horizontal, structural member that is capable of withstanding load primarily by resisting bending.
 *
 * It represents such a member from an architectural point of view.
 *
 * It is not required to be load bearing.
 *
 * The camber of a beam may be defined by assigning a StructuralCurveMember with displacement coordinates.
 *
 * Multiple sets of camber ordinates may be provided that are qualified by the particular load case, where full dead load would typically be used for fabrication, and other scenarios used for other loading conditions such as during construction.
 *
 * There are two entities for beam occurrences:
 */
 class IfcBeam extends IfcBuiltElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcBeamTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for a beam that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * The PredefinedType shall only be used, if no IfcBeamType is assigned, providing its own IfcBeamType.PredefinedType.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PredefinedType?: IfcBeamTypeEnum
}

export default IfcBeam