// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcEnvironmentalImpactValue

import { IfcLabel, IfcEnvironmentalImpactCategoryEnum, IfcText, IfcAppliedValueSelect, IfcDateTimeSelect } from '../types'
import { IfcMeasureWithUnit, IfcAppliedValue } from './'

/**  */
 class IfcEnvironmentalImpactValue extends IfcAppliedValue {
    constructor(Name:IfcLabel, Description:IfcText, AppliedValue:IfcAppliedValueSelect, UnitBasis:IfcMeasureWithUnit, ApplicableDate:IfcDateTimeSelect, FixedUntilDate:IfcDateTimeSelect, ImpactType:IfcLabel, Category:IfcEnvironmentalImpactCategoryEnum, UserDefinedCategory:IfcLabel) {
        super(Name, Description, AppliedValue, UnitBasis, ApplicableDate, FixedUntilDate)
        this.ImpactType = ImpactType
        this.Category = Category
        this.UserDefinedCategory = UserDefinedCategory
    }

    ImpactType: IfcLabel

    Category: IfcEnvironmentalImpactCategoryEnum

    UserDefinedCategory?: IfcLabel
}

export default IfcEnvironmentalImpactValue