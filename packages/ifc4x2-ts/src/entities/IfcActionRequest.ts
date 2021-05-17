// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcActionRequest

import { IfcActionRequestTypeEnum, IfcLabel, IfcText, IfcGloballyUniqueId, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/** A request is the act or instance of asking for something, such as a request for information, bid submission, or performance of work
 *
 * Requests may take many forms depending on the need including fault reports for maintenance, requests for small works, and purchase requests (where these are to be made through a help desk or buying function).
 */
 class IfcActionRequest extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, PredefinedType:IfcActionRequestTypeEnum, Status:IfcLabel, LongDescription:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification)
        this.PredefinedType = PredefinedType
        this.Status = Status
        this.LongDescription = LongDescription
    }
    /** Identifies the predefined type of sources through which a request can be made.
     * IFC4 CHANGE The attribute has been added.
    */
    PredefinedType?: IfcActionRequestTypeEnum
    /** The status currently assigned to the request.
     * Possible values include: Hold: wait to see if further requests are received before deciding on action NoAction: no action is required on this request Schedule: plan action to take place as part of maintenance or other task planning/scheduling Urgent: take action immediately IFC4 CHANGE The attribute has been added.
    */
    Status?: IfcLabel
    /** Detailed description of the permit.
     * IFC4 CHANGE The attribute has been added.
    */
    LongDescription?: IfcText
}

export default IfcActionRequest