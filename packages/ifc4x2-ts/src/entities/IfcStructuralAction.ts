// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralAction

import { IfcBoolean, IfcGloballyUniqueId, IfcLabel, IfcText, IfcGlobalOrLocalEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcStructuralLoad, IfcStructuralActivity } from './'

/** A structural action is a structural activity that acts upon a structural item or building element
 *
 * Relationship use definitionStructural actions are grouped into either an IfcStructuralLoadGroup of predefined type LOAD_GROUP or, more often, an IfcStructuralLoadCase.
 *
 * This is accomplished via the inverse relationship HasAssignments and an IfcRelAssignsToGroup relationship object.
 *
 * IfcStructuralLoadGroup
 *
 * LoadGroupFor or IfcStructuralLoadCase
 *
 * LoadGroupFor respectively refers to the structural analysis model(s) in which the loads are used
 *
 * It is furthermore possible to establish relationships between actions in one analysis model and reactions in another analysis model which cause the actions.
 *
 * For example, a support reaction from one structural system may be taken over as a load onto another supporting structural system.
 *
 * This is expressed by means of the inverse relationship ReferencedBy of the action and an IfcRelAssignsToProduct relationship object.
 *
 * IfcRelAssignsToProduct
 *
 * Name is set to 'Causes' and IfcRelAssignsToProduct
 *
 * RelatedObjects refers to an instance of a subtype of IfcStructuralReaction.
 */
abstract class IfcStructuralAction extends IfcStructuralActivity {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, AppliedLoad:IfcStructuralLoad, GlobalOrLocal:IfcGlobalOrLocalEnum, DestabilizingLoad:IfcBoolean) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, AppliedLoad, GlobalOrLocal)
        this.DestabilizingLoad = DestabilizingLoad
    }
    /** Indicates if this action may cause a stability problem.
     * If it is 'FALSE', no further investigations regarding stability problems are necessary.
    */
    DestabilizingLoad?: IfcBoolean
}

export default IfcStructuralAction