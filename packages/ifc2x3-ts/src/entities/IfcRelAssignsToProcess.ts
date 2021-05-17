// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToProcess

import { IfcProcess, IfcMeasureWithUnit, IfcOwnerHistory, IfcObjectDefinition, IfcRelAssigns } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'

/** The objectified relationship IfcRelAssignsToProcess handles the assignment of one or many objects to a process or activity.
 *
 * An object can be a product that is the item the process operates on.
 *
 * Processes and activities can operate on things other than products, and can operate in ways other than input and output
 *
 * The inherited attribute RelatedObjects gives the references to the objects, or object type, which the process operates on.
 *
 * The RelatingProcess is the process or process type, that operates on the object.
 *
 * The operation types are captured in the inherited attribute Name.
 */
 class IfcRelAssignsToProcess extends IfcRelAssigns {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingProcess:IfcProcess, QuantityInProcess:IfcMeasureWithUnit) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType)
        this.RelatingProcess = RelatingProcess
        this.QuantityInProcess = QuantityInProcess
    }
    /** Reference to the process to which the objects are assigned to.
     * IFC4 CHANGE Datatype expanded to include IfcProcess and IfcTypeProcess.
    */
    RelatingProcess: IfcProcess
    /** Quantity of the object specific for the operation by this process.
    */
    QuantityInProcess?: IfcMeasureWithUnit
}

export default IfcRelAssignsToProcess