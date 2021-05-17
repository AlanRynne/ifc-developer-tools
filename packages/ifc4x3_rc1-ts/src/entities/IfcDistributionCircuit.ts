// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionCircuit

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcDistributionSystemEnum } from '../types'
import { IfcOwnerHistory, IfcDistributionSystem } from './'

/** A distribution circuit is a partition of a distribution system that is conditionally switched such as an electrical circuit.
 *
 * Composition Use DefinitionAn IfcDistributionCircuit may aggregate an IfcDistributionSystem using the IfcRelAggregates relationship where RelatingObject refers to the IfcDistributionSystem and RelatedObjects includes one or more IfcDistributionCircuit groups.
 *
 * An IfcDistributionCircuit may be aggregated into sub-circuits using the IfcRelAggregates relationship where RelatingObject refers to the parent IfcDistributionCircuit and RelatedObjects refers to one or more IfcDistributionCircuit sub-circuits.
 *
 * Assignment Use DefinitionAn IfcDistributionCircuit should be assigned to an IfcDistributionPort on an IfcFlowController element indicating the host or origination of the system using the IfcRelAssignsToProduct relationship
 *
 * Each device whose operation is conditional based upon the state of the circuit is assigned to the IfcDistributionCircuit via the IfcRelAssignsToGroup relationship.
 *
 * An IfcDistributionElement may belong to multiple systems or circuits, however only one IfcDistributionSystem or IfcDistributionCircuit of a particular PredefinedType.
 */
 class IfcDistributionCircuit extends IfcDistributionSystem {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, LongName:IfcLabel, PredefinedType:IfcDistributionSystemEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, LongName, PredefinedType)

    }

}

export default IfcDistributionCircuit