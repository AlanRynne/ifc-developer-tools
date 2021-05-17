// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralItem

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcProduct } from './'

/** The abstract entity IfcStructuralItem is the generalization of structural members and structural connections, that is, analysis idealizations of elements in the building model.
 *
 * It defines the relation between structural members and connections with structural activities (actions and reactions)
 *
 * Relationships between elements in the building model and structural items as their idealizations can be expressed by instances of IfcRelAssignsToProduct
 *
 * Coordinate Systems:The following coordinate systems are distinguished:Representation items in topology representations are always given within the ObjectPlacement, i.e. in so-called global coordinates (global with respect to the IfcStructuralAnalysisModel to which this item belongs).
 *
 * The usage of local coordinate systems is further defined in subtypes
 *
 * Topology Use Definitions:Instances of IfcStructuralItem shall have a topology representation.
 *
 * It includes a placement and a product representation.
 *
 * The IfcProductRepresentation shall be given by an item in a Representation of type IfcTopologyRepresentation
 *
 * Local PlacementThe local placement for IfcStructuralItem is defined in its supertype IfcProduct.
 *
 * It is defined by the IfcLocalPlacement, which establishes a global coordinate system which shall be common to all items and activities in an IfcStructuralAnalysisModel
 *
 * Topology RepresentationInstances of IfcStructuralItem shall have a topology representation given by an instance of a subtype of IfcTopologicalRepresentationItem, which should be the single item of IfcTopologyRepresentation.Items.
 *
 * Depending on the dimensionality of the structural item, one of the following types of toplogical representation items shall be used:The reference point, reference curve, or reference surface partially or completely defines the local coordinate system of the represented structural item according to the following rules.
 *
 * In all cases, The local x,y,z directions form a right-handed Cartesian coordinate system
 *
 * Structural point itemsStructural curve itemsStructural surface itemsInformal Propositions:
 */
abstract class IfcStructuralItem extends IfcProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)

    }

}

export default IfcStructuralItem