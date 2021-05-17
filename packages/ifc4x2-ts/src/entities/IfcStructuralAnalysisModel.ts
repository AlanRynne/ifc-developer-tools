// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralAnalysisModel

import { IfcAnalysisModelTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcAxis2Placement3D, IfcStructuralLoadGroup, IfcStructuralResultGroup, IfcObjectPlacement, IfcOwnerHistory, IfcSystem } from './'

/** The IfcStructuralAnalysisModel is used to assemble all information needed to represent a structural analysis model.
 *
 * It encompasses certain general properties (such as analysis type), references to all contained structural members, structural supports or connections, as well as loads and the respective load results
 *
 * Important functionalities for the description of an analysis model are derived from existing IFC entities:Informal Propositions:
 */
 class IfcStructuralAnalysisModel extends IfcSystem {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, PredefinedType:IfcAnalysisModelTypeEnum, OrientationOf2DPlane:IfcAxis2Placement3D, LoadedBy:Array<IfcStructuralLoadGroup>, HasResults:Array<IfcStructuralResultGroup>, SharedPlacement:IfcObjectPlacement) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.PredefinedType = PredefinedType
        this.OrientationOf2DPlane = OrientationOf2DPlane
        this.LoadedBy = LoadedBy
        this.HasResults = HasResults
        this.SharedPlacement = SharedPlacement
    }
    /** Defines the type of the structural analysis model.
    */
    PredefinedType: IfcAnalysisModelTypeEnum
    /** If the selected model type (PredefinedType) describes a 2D system, the orientation defines the analysis plane (P[1], P[2]) and the normal to the analysis plane (P[3]).
     * This is needed because structural items and activities are always defined in three-dimensional space even if they are meant to be analysed in a two-dimensional manner.
     * In case of predefined type IN_PLANE_LOADING_2D, the analysis is to be performed within the projection into the P[1], P[2] plane.
     * In case of predefined type OUT_PLANE_LOADING_2D, only the P[3] component of loads and their effects is meant to be analyzed.
     * This is used for beam grids and for typical slab analyses.
     * In case of predefined type LOADING_3D, OrientationOf2DPlane shall be omitted.
    */
    OrientationOf2DPlane?: IfcAxis2Placement3D
    /** References to all load groups to be analyzed.
    */
    LoadedBy?: Array<IfcStructuralLoadGroup>
    /** References to all result groups available for this structural analysis model.
    */
    HasResults?: Array<IfcStructuralResultGroup>
    /** Object placement which shall be common to all items and activities which are grouped into this instance of IfcStructuralAnalysisModel.
     * This placement establishes a coordinate system which is referred to as 'global coordinate system' in use definitions of various classes of structural items and activities.
     * Most commonly, but not necessarily, the SharedPlacement is an IfcLocalPlacement whose z axis is parallel with the z axis of the IfcProject's world coordinate system and directed like the WCS z axis (i.e. pointing "upwards") or directed against the WCS z axis (i.e. points "downwards").
     * Per informal proposition, this attribute is not optional as soon as at least one IfcStructuralItem is grouped into the instance of IfcStructuralAnalysisModel.
    */
    SharedPlacement?: IfcObjectPlacement
}

export default IfcStructuralAnalysisModel