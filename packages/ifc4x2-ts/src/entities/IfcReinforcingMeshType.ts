// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcingMeshType

import { IfcReinforcingMeshTypeEnum, IfcPositiveLengthMeasure, IfcAreaMeasure, IfcLabel, IfcBendingParameterSelect, IfcGloballyUniqueId, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcReinforcingElementType } from './'

/** The reinforcing element type IfcReinforcingMeshType defines commonly shared information for occurrences of reinforcing meshs.
 *
 * The set of shared information may include: It is used to define a reinforcing mesh type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcReinforcingMeshType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcReinforcingMeshType are represented by instances of IfcReinforcingMesh
 *
 * Geometry Use DefinitionThe IfcReinforcingMeshType may define the shared geometric representation for many mesh occurrences.
 *
 * The RepresentationMaps attribute refers to a list of IfcRepresentationMap's, that allow for multiple geometric representations.
 */
 class IfcReinforcingMeshType extends IfcReinforcingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcReinforcingMeshTypeEnum, MeshLength:IfcPositiveLengthMeasure, MeshWidth:IfcPositiveLengthMeasure, LongitudinalBarNominalDiameter:IfcPositiveLengthMeasure, TransverseBarNominalDiameter:IfcPositiveLengthMeasure, LongitudinalBarCrossSectionArea:IfcAreaMeasure, TransverseBarCrossSectionArea:IfcAreaMeasure, LongitudinalBarSpacing:IfcPositiveLengthMeasure, TransverseBarSpacing:IfcPositiveLengthMeasure, BendingShapeCode:IfcLabel, BendingParameters:Array<IfcBendingParameterSelect>) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
        this.MeshLength = MeshLength
        this.MeshWidth = MeshWidth
        this.LongitudinalBarNominalDiameter = LongitudinalBarNominalDiameter
        this.TransverseBarNominalDiameter = TransverseBarNominalDiameter
        this.LongitudinalBarCrossSectionArea = LongitudinalBarCrossSectionArea
        this.TransverseBarCrossSectionArea = TransverseBarCrossSectionArea
        this.LongitudinalBarSpacing = LongitudinalBarSpacing
        this.TransverseBarSpacing = TransverseBarSpacing
        this.BendingShapeCode = BendingShapeCode
        this.BendingParameters = BendingParameters
    }
    /** Subtype of reinforcing mesh.
    */
    PredefinedType: IfcReinforcingMeshTypeEnum
    /** The overall length of the mesh measured in its longitudinal direction.
    */
    MeshLength?: IfcPositiveLengthMeasure
    /** The overall width of the mesh measured in its transversal direction.
    */
    MeshWidth?: IfcPositiveLengthMeasure
    /** The nominal diameter denoting the cross-section size of the longitudinal bars.
    */
    LongitudinalBarNominalDiameter?: IfcPositiveLengthMeasure
    /** The nominal diameter denoting the cross-section size of the transverse bars.
    */
    TransverseBarNominalDiameter?: IfcPositiveLengthMeasure
    /** The effective cross-section area of the longitudinal bars of the mesh.
    */
    LongitudinalBarCrossSectionArea?: IfcAreaMeasure
    /** The effective cross-section area of the transverse bars of the mesh.
    */
    TransverseBarCrossSectionArea?: IfcAreaMeasure
    /** The spacing between the longitudinal bars.
     * Note: an even distribution of bars is presumed; other cases are handled by classification or property sets.
    */
    LongitudinalBarSpacing?: IfcPositiveLengthMeasure
    /** The spacing between the transverse bars.
     * Note: an even distribution of bars is presumed; other cases are handled by classification or property sets.
    */
    TransverseBarSpacing?: IfcPositiveLengthMeasure
    /** If this mesh type is bent rather than planar, this attribute provides a shape code per a standard like ACI 315, ISO 3766, or a similar standard.
     * It is presumed that a single standard for defining the mesh bending is used throughout the project and that this standard is referenced from the IfcProject object through the IfcDocumentReference mechanism.
    */
    BendingShapeCode?: IfcLabel
    /** If this mesh type is bent rather than planar, this attribute provides bending shape parameters.
     * Their meaning is defined by the bending shape code and the respective standard.
    */
    BendingParameters?: Array<IfcBendingParameterSelect>
}

export default IfcReinforcingMeshType