// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProjectOrder

import { IfcIdentifier, IfcProjectOrderTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/** A project order is a directive to purchase products and/or perform work, such as for construction or facilities management
 *
 * Project orders are typically formal contracts between two organizations, where cost and time information may be rigid or flexible according to contained schedule types and constraints.
 */
 class IfcProjectOrder extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ID:IfcIdentifier, PredefinedType:IfcProjectOrderTypeEnum, Status:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.ID = ID
        this.PredefinedType = PredefinedType
        this.Status = Status
    }
    /** undefined
    */
    ID: IfcIdentifier
    /** Predefined generic type for a project order that is specified in an enumeration.
     * There may be a property set given specificly for the predefined types.
     * IFC4 CHANGE The attribute has been made optional.
    */
    PredefinedType: IfcProjectOrderTypeEnum
    /** The current status of a project order
     * Examples of status values that might be used for a project order status include: PLANNED REQUESTED APPROVED ISSUED STARTED DELAYED DONE
    */
    Status?: IfcLabel
}

export default IfcProjectOrder