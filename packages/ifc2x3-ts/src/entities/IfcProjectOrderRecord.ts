// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProjectOrderRecord

import { IfcRelAssignsToProjectOrder, IfcOwnerHistory, IfcControl } from './'
import { IfcProjectOrderRecordTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/**  */
 class IfcProjectOrderRecord extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Records:Array<IfcRelAssignsToProjectOrder>, PredefinedType:IfcProjectOrderRecordTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.Records = Records
        this.PredefinedType = PredefinedType
    }

    Records: Array<IfcRelAssignsToProjectOrder>

    PredefinedType: IfcProjectOrderRecordTypeEnum
}

export default IfcProjectOrderRecord