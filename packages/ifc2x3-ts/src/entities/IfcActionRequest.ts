// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcActionRequest

import { IfcIdentifier, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/** A request is the act or instance of asking for something, such as a request for information, bid submission, or performance of work
 *
 * Requests may take many forms depending on the need including fault reports for maintenance, requests for small works, and purchase requests (where these are to be made through a help desk or buying function).
 */
 class IfcActionRequest extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, RequestID:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.RequestID = RequestID
    }
    /** undefined
    */
    RequestID: IfcIdentifier
}

export default IfcActionRequest