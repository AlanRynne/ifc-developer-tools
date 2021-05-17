// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcingMesh

import { IfcPositiveLengthMeasure, IfcAreaMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcReinforcingElement } from './'

/** A reinforcing mesh is a series of longitudinal and transverse wires or bars of various gauges, arranged at right angles to each other and welded at all points of intersection; usually used for concrete slab reinforcement.
 *
 * It is also known as welded wire fabric.
 *
 * In scope are plane meshes as well as bent meshes
 *
 * Geometry Use DefinitionPlacement and representation are defined at the supertype IfcElementComponent
 *
 * The representation map of a mapped 'Outline' representation should contain a representation of type 'Curve3D' which holds an IfcPolyline
 *
 * The representation map of a mapped 'Body' representation should contain a representation of type 'AdvancedSweptSolid' which holds multiple IfcSweptDiskSolid (including subtype IfcSweptDiskSolidPolygonal).
 */
 class IfcReinforcingMesh extends IfcReinforcingElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, SteelGrade:IfcLabel, MeshLength:IfcPositiveLengthMeasure, MeshWidth:IfcPositiveLengthMeasure, LongitudinalBarNominalDiameter:IfcPositiveLengthMeasure, TransverseBarNominalDiameter:IfcPositiveLengthMeasure, LongitudinalBarCrossSectionArea:IfcAreaMeasure, TransverseBarCrossSectionArea:IfcAreaMeasure, LongitudinalBarSpacing:IfcPositiveLengthMeasure, TransverseBarSpacing:IfcPositiveLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag, SteelGrade)
        this.MeshLength = MeshLength
        this.MeshWidth = MeshWidth
        this.LongitudinalBarNominalDiameter = LongitudinalBarNominalDiameter
        this.TransverseBarNominalDiameter = TransverseBarNominalDiameter
        this.LongitudinalBarCrossSectionArea = LongitudinalBarCrossSectionArea
        this.TransverseBarCrossSectionArea = TransverseBarCrossSectionArea
        this.LongitudinalBarSpacing = LongitudinalBarSpacing
        this.TransverseBarSpacing = TransverseBarSpacing
    }
    /** Deprecated. IFC4 CHANGE Attribute deprecated.
     * Use respective attribute at IfcReinforcingMeshType instead.
    */
    MeshLength?: IfcPositiveLengthMeasure
    /** Deprecated. IFC4 CHANGE Attribute deprecated.
     * Use respective attribute at IfcReinforcingMeshType instead.
    */
    MeshWidth?: IfcPositiveLengthMeasure
    /** Deprecated. IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcReinforcingMeshType instead.
    */
    LongitudinalBarNominalDiameter: IfcPositiveLengthMeasure
    /** Deprecated. IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcReinforcingMeshType instead.
    */
    TransverseBarNominalDiameter: IfcPositiveLengthMeasure
    /** Deprecated. IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcReinforcingMeshType instead.
    */
    LongitudinalBarCrossSectionArea: IfcAreaMeasure
    /** Deprecated. IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcReinforcingMeshType instead.
    */
    TransverseBarCrossSectionArea: IfcAreaMeasure
    /** Deprecated. IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcReinforcingMeshType instead.
    */
    LongitudinalBarSpacing: IfcPositiveLengthMeasure
    /** Deprecated. IFC4 CHANGE Attribute made optional and deprecated.
     * Use respective attribute at IfcReinforcingMeshType instead.
    */
    TransverseBarSpacing: IfcPositiveLengthMeasure
}

export default IfcReinforcingMesh