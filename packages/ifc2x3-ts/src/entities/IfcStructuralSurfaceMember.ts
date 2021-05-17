// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralSurfaceMember

import { IfcStructuralSurfaceTypeEnum, IfcPositiveLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralMember } from './'

/** Instances of IfcStructuralSurfaceMember describe face members, that is, structural analysis idealizations of slabs, walls, and shells.
 *
 * Surface members may be planar or curved
 *
 * Coordinate Systems:See definitions at IfcStructuralItem.
 *
 * The local coordinate system is established by the reference surface given by topology representation
 *
 * Material Use DefinitionThe material of direct instances IfcStructuralSurfaceMember (in contrast to instances of the subtype IfcStructuralSurfaceMemberVarying) is defined by IfcMaterial and attached by the IfcRelAssociatesMaterial.RelatingMaterial.
 *
 * It is accessible by the inverse HasAssociations relationship
 *
 * The material is specified minimally by a name which corresponds with an agreed upon standardized structural material designation.
 *
 * An external reference to the source which specifies the material designation should be provided.
 *
 * Alternatively, structural material properties may be provided by means of IfcMechanicalMaterialProperties and IfcExtendedMaterialProperties
 *
 * Direct instances of IfcStructuralSurfaceMember are assumed to be located centrically relative to their reference surface.
 *
 * Their depth is provided in the attribute Thickness.
 */
 class IfcStructuralSurfaceMember extends IfcStructuralMember {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, PredefinedType:IfcStructuralSurfaceTypeEnum, Thickness:IfcPositiveLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.PredefinedType = PredefinedType
        this.Thickness = Thickness
    }
    /** Type of member with respect to its load carrying behavior in this analysis idealization.
    */
    PredefinedType: IfcStructuralSurfaceTypeEnum
    /** Defines the typically understood thickness of the structural surface member, measured normal to its reference surface.
    */
    Thickness?: IfcPositiveLengthMeasure
}

export default IfcStructuralSurfaceMember