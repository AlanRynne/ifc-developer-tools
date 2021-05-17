// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralActivity

import { IfcStructuralLoad, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcProduct } from './'
import { IfcGlobalOrLocalEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The abstract entity IfcStructuralActivity combines the definition of actions (such as forces, displacements, etc.) and reactions (support reactions, internal forces, deflections, etc.) which are specified by using the basic load definitions from the IfcStructuralLoadResource
 *
 * The differentiation between actions and reactions is realized by instantiating objects either from subclasses of IfcStructuralAction or IfcStructuralReaction respectively.
 *
 * They inherit commonly needed attributes from the abstract superclass IfcStructuralActivity, notably the relationship which connects actions or reactions with connections, analysis members, or elements (subtypes of IfcStructuralItem or IfcElement)
 *
 * Coordinate Systems:The following coordinate systems are distinguished:Representation items in topology representations are always given within the ObjectPlacement, i.e. in so-called global coordinates (global with respect to the IfcStructuralAnalysisModel to which this activity belongs).
 *
 * Locations of the load objects in the AppliedLoad attribute (if of type IfcStructuralLoadConfiguration) are always given in local coordinates
 *
 * Directions of the load objects in the AppliedLoad attribute refer to global or local coordinates according to the GlobalOrLocal attribute
 *
 * The ObjectPlacement and Representation are sometimes not explicitly instantiated; instead they may be implied as described below.
 *
 * Global and local coordinate systems are then determined in the same way as with explicit placement and representation
 *
 * Topology Use Definitions:Instances of IfcStructuralActivity which are connected with a structural item of same dimensionality, i.e.shall not have an ObjectPlacement nor a Representation.
 *
 * It is implied that the placement and representation of the IfcStructuralActivity is the same as the ones of the IfcStructuralItem
 *
 * Instances of IfcStructuralActivity which are connected withshall have a topology representation as specified below.
 *
 * It includes a placement and a product representation.
 *
 * The IfcProductRepresentation shall be given by an item in a Representation of type IfcTopologyRepresentation
 *
 * Instances of IfcStructuralActivity which are connected withshall have a shape representation as specified below.
 *
 * It includes a placement and a product representation.
 *
 * The IfcProductRepresentation shall be given by items in a Representation of type IfcShapeRepresentation.
 *
 * Shape representation and topology representation may be combined
 *
 * Local PlacementThe local placement for IfcStructuralActivity is defined in its supertype IfcProduct.
 *
 * It is defined by the IfcLocalPlacement, which establishes a global coordinate system which shall be common to all items and activities in an IfcStructuralAnalysisModel
 *
 * Topology RepresentationInstances of IfcStructuralActivity which act on parts of a surface item shall have a topology representation given by a face with underlying surface geometry, IfcFaceSurface, which should be the single item of IfcTopologyRepresentation.Items.
 *
 * The surface establishes a local coordinate system of the activity:Instances of IfcStructuralActivity which act on a curve on a surface item shall have a topology representation given by an edge (IfcEdge or subtype), which should be the single item of IfcTopologyRepresentation.Items.
 *
 * The curve geometry shall be compatible with the surface geometry of the connected item.
 *
 * In conjunction with this surface, the curve establishes a local coordinate system of the activity:Instances of IfcStructuralActivity which act on a single point on a curve or surface item shall have a topology representation given by an IfcVertexPoint, which should be the single item of IfcTopologyRepresentation.Items.
 *
 * The point geometry shall be compatible with the curve or surface geometry of the connected item.
 *
 * The local coordinate system of the activity is oriented by the curve or surface geometry of the connected item as described above for activities with edge or face topology
 *
 * Shape RepresentationInstances of IfcStructuralActivity which act on a surface item and are specified by isocontours (level sets) shall have a shape representation given by a set of curves on a surface, IfcPCurve.
 *
 * The basis surface shall comply with or preferably be identical with the surface of the structural item to which the activity is connected.
 *
 * The representation identifier and type of this geometric representation is:
 */
abstract class IfcStructuralActivity extends IfcProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.AppliedLoad = AppliedLoad
        this.GlobalOrLocal = GlobalOrLocal
    }
    /** Load or result resource object which defines the load type, direction, and load values.
     * In case of activities which are variably distributed over curves or surfaces, IfcStructuralLoadConfiguration is used which provides a list of load samples and their locations within the load distribution, measured in local coordinates of the curve or surface on which this activity acts.
     * The contents of this load or result distribution may be further restricted by definitions at subtypes of IfcStructuralActivity.
    */
    AppliedLoad: IfcStructuralLoad
    /** Indicates whether the load directions refer to the global coordinate system (global to the analysis model, i.e. as established by IfcStructuralAnalysisModel
     * SharedPlacement) or to the local coordinate system (local to the activity or connected item, as established by an explicit or implied representation and its parameter space).
     * , the informal definition of IfcRepresentationResource
     * IfcGlobalOrLocalEnum doe s not distinguish between "global coordinate system" and "world coordinate system".
     * On the other hand, this distinction is necessary in the IfcStructuralAnalysisDomain where the shared "global" coordinate system of an analysis model may very well not be the same as the project-wide world coordinate system.
     * In the scope of IfcStructuralActivity
     * GlobalOrLocal, the meaning of GLOBAL_COORDS is therefore not to be taken as world coordinate system but as the analysis model specific shared coordinate system.
     * In contrast, LOCAL_COORDS is to be taken as coordinates which are local to individual structural items and activities, as established by subclass-specific geometry use definitions.
    */
    GlobalOrLocal: IfcGlobalOrLocalEnum
}

export default IfcStructuralActivity