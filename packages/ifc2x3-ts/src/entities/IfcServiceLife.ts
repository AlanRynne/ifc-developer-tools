// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcServiceLife

import { IfcServiceLifeTypeEnum, IfcTimeMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/**  */
 class IfcServiceLife extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ServiceLifeType:IfcServiceLifeTypeEnum, ServiceLifeDuration:IfcTimeMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.ServiceLifeType = ServiceLifeType
        this.ServiceLifeDuration = ServiceLifeDuration
    }

    ServiceLifeType: IfcServiceLifeTypeEnum

    ServiceLifeDuration: IfcTimeMeasure
}

export default IfcServiceLife