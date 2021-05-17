// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPlate

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcBuildingElement } from './'

/** An IfcPlate is a planar and often flat part with constant thickness.
 *
 * A plate may carry loads between or beyond points of support, or provide stiffening.
 *
 * The location of the plate (being horizontal, vertical or sloped) is not relevant to its definition (in contrary to IfcWall and IfcSlab (as floor slab)).
 *
 * Plates are normally made of steel, other metallic material, or by glass panels.
 *
 * However the definition of IfcPlate is material independent and specific material information shall be handled by using IfcAssociatesMaterial to assign a material specification to the IfcPlate.
 *
 * An instance IfcPlate should preferably get its geometric representation and material assignment through the type definition by IfcPlateType assigned using the IfcRelDefinesByType relationship.
 *
 * This allows identical plates in a construction to be represented by the same instance of IfcPlateType
 *
 * A plate may have openings, such as voids or recesses.
 *
 * They are defined by an IfcOpeningElement attached to the plate using the inverse relationship HasOpenings pointing to IfcRelVoidsElement.
 *
 * The position number of a plate as often used in steel construction is assigned through the attribute IfcElement
 *
 * TagThe IFC specification provides two entities for plate occurrences:
 */
 class IfcPlate extends IfcBuildingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcPlate