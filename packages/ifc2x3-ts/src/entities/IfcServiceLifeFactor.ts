// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcServiceLifeFactor

import { IfcServiceLifeFactorTypeEnum, IfcMeasureValue, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition } from './'

/**  */
 class IfcServiceLifeFactor extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, PredefinedType:IfcServiceLifeFactorTypeEnum, UpperValue:IfcMeasureValue, MostUsedValue:IfcMeasureValue, LowerValue:IfcMeasureValue) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.PredefinedType = PredefinedType
        this.UpperValue = UpperValue
        this.MostUsedValue = MostUsedValue
        this.LowerValue = LowerValue
    }

    PredefinedType: IfcServiceLifeFactorTypeEnum

    UpperValue?: IfcMeasureValue

    MostUsedValue: IfcMeasureValue

    LowerValue?: IfcMeasureValue
}

export default IfcServiceLifeFactor