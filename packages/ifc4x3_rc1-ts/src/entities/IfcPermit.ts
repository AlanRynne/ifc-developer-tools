// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPermit

import { IfcPermitTypeEnum, IfcLabel, IfcText, IfcGloballyUniqueId, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/** A permit is a permission to perform work in places and on artifacts where regulatory, security or other access restrictions apply.
 */
 class IfcPermit extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, PredefinedType:IfcPermitTypeEnum, Status:IfcLabel, LongDescription:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, Identification)
        this.PredefinedType = PredefinedType
        this.Status = Status
        this.LongDescription = LongDescription
    }
    /** Identifies the predefined types of permit that can be granted.
     * IFC4 CHANGE The attribute has been added.
    */
    PredefinedType?: IfcPermitTypeEnum
    /** The status currently assigned to the permit.
     * IFC4 CHANGE The attribute has been added.
    */
    Status?: IfcLabel
    /** Detailed description of the request.
     * IFC4 CHANGE The attribute has been added.
    */
    LongDescription?: IfcText
}

export default IfcPermit