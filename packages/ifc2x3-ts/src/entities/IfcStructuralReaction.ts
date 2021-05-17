// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralReaction

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralActivity } from './'

/** A structural reaction is a structural activity that results from a structural action imposed to a structural item or building element.
 *
 * Examples are support reactions, internal forces, and deflections
 *
 * Structural reactions are grouped into IfcStructuralResultGroups via the inverse relationship HasAssignments and an IfcRelAssignsToGroup relationship object.
 *
 * IfcStructuralResultGroup
 *
 * ResultGroupFor finally refers to the structural analysis model in which the results occur
 *
 * It is furthermore possible to establish relationships between reactions in one analysis model and actions which they cause in another analysis model.
 *
 * For example, a support reaction from one structural system may be taken over as a load onto another supporting structural system.
 *
 * This is expressed by means of the inverse relationship HasAssignments of the reaction and an IfcRelAssignsToProduct relationship object.
 *
 * IfcRelAssignsToProduct
 *
 * Name is set to 'Causes' and IfcRelAssignsToProduct
 *
 * RelatingProduct refers to an instance of a subtype of IfcStructuralAction.
 */
abstract class IfcStructuralReaction extends IfcStructuralActivity {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal)

    }

}

export default IfcStructuralReaction