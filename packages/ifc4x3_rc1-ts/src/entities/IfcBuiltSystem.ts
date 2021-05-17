// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuiltSystem

import { IfcBuiltSystemTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcSystem } from './'

/**  */
 class IfcBuiltSystem extends IfcSystem {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, PredefinedType:IfcBuiltSystemTypeEnum, LongName:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.PredefinedType = PredefinedType
        this.LongName = LongName
    }

    PredefinedType?: IfcBuiltSystemTypeEnum

    LongName?: IfcLabel
}

export default IfcBuiltSystem