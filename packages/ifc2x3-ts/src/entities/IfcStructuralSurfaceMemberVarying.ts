// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralSurfaceMemberVarying

import { IfcPositiveLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcStructuralSurfaceTypeEnum } from '../types'
import { IfcShapeAspect, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralSurfaceMember } from './'

/** This entity describes surface members with varying section properties.
 *
 * The properties are provided by means of Pset_StructuralSurfaceMemberVaryingThickness via IfcRelDefinesByProperties, or by means of aggregation: An instance of IfcStructuralSurfaceMemberVarying may be composed of two or more instances of IfcStructuralSurfaceMember with differing section properties.
 *
 * These subordinate members relate to the instance of IfcStructuralSurfaceMemberVarying by IfcRelAggregates
 *
 * Coordinate Systems:See definitions at IfcStructuralItem and IfcStructuralSurfaceMember.
 *
 * The local coordinates of an aggregate are generally undefined since continuity of local coordinates of the parts is not ensured
 *
 * Material Use DefinitionIn case of aggregation, only the individual parts (direct instances of IfcStructuralSurfaceMember) carry material and thickness information.
 *
 * Otherwise, definitions at IfcStructuralSurfaceMember apply.
 */
 class IfcStructuralSurfaceMemberVarying extends IfcStructuralSurfaceMember {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, PredefinedType:IfcStructuralSurfaceTypeEnum, Thickness:IfcPositiveLengthMeasure, SubsequentThickness:Array<IfcPositiveLengthMeasure>, VaryingThicknessLocation:IfcShapeAspect) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, PredefinedType, Thickness)
        this.SubsequentThickness = SubsequentThickness
        this.VaryingThicknessLocation = VaryingThicknessLocation
    }
    /** undefined
    */
    SubsequentThickness: Array<IfcPositiveLengthMeasure>
    /** undefined
    */
    VaryingThicknessLocation: IfcShapeAspect
}

export default IfcStructuralSurfaceMemberVarying