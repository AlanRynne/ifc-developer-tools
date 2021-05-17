// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOpeningElement

import { IfcOpeningElementTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFeatureElementSubtraction } from './'

/** The opening element stands for opening, recess or chase, all reflecting voids.
 *
 * It represents a void within any element that has physical manifestation.
 *
 * Openings can be inserted into walls, slabs, beams, columns, or other elements
 *
 * The IFC specification provides two entities for opening elements:There are two different types of opening elements:The attribute PredefinedType should be used to capture the differences,An IfcOpeningElement has to be inserted into an IfcElement by using the IfcRelVoidsElement relationship.
 *
 * It may be filled by an IfcDoor, IfcWindow, or another filling element by using the relationship IfcRelFillsElements.
 *
 * Depending on the type of the IfcShapeRepresentation of the IfcOpeningElement the voiding relationship implies:The IfcOpeningElement shall not participate in the containment relationship, i.e. it is not linked directly to the spatial structure of the project.
 *
 * It has a mandatory VoidsElements inverse relationship pointing to the IfcElement that is contained in the spatial structure.
 */
 class IfcOpeningElement extends IfcFeatureElementSubtraction {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, PredefinedType:IfcOpeningElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.PredefinedType = PredefinedType
    }
    /** Predefined generic type for an opening that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * IFC4 CHANGE The attribute has been added at the end of the entity definition.
    */
    PredefinedType?: IfcOpeningElementTypeEnum
}

export default IfcOpeningElement