// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSimplePropertyTemplate

import { IfcSimplePropertyTemplateTypeEnum, IfcLabel, IfcUnit, IfcStateEnum, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcPropertyEnumeration, IfcOwnerHistory, IfcPropertyTemplate } from './'

/** The IfcSimplePropertyTemplate defines the template for all dynamically extensible properties, either the subtypes of IfcSimpleProperty, or the subtypes of IfcPhysicalSimpleQuantity.
 *
 * The individual property templates are interpreted according to their Name attribute and may have a predefined template type, property units, and property measure types.
 *
 * The correct interpretation of the attributes:is determined by the TemplateType.
 *
 * The attributes Enumerators and Expression only apply to instances of IfcSimplePropertyTemplate having a particular TemplateType.
 *
 * The TemplateType also controls, which subtype of either IfcSimpleProperty or IfcPhysicalSimpleQuantity shall be used for property occurrences corresponding to this template
 *
 * The IfcSimplePropertyTemplate is part of the set of templates included in the IfcPropertySetTemplate.
 *
 * The template can be accessed throught the inverse attribute PartOfPsetTemplate The IfcPropertySetTemplate may define one or several instances of IfcPropertySet (or IfcElementQuantity).
 *
 * The definition assignment is established by the objectified relationship IfcRelDefinesByTemplate as shown in Figure 139.
 *
 * There is no direct link between an IfcSimplePropertyTemplate and a subtype of either IfcSimpleProperty or IfcPhysicalSimpleQuantity.
 *
 * The definition relationship between the template and the individual properties (or quantities) is established by the Name attributes.
 */
 class IfcSimplePropertyTemplate extends IfcPropertyTemplate {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, TemplateType:IfcSimplePropertyTemplateTypeEnum, PrimaryMeasureType:IfcLabel, SecondaryMeasureType:IfcLabel, Enumerators:IfcPropertyEnumeration, PrimaryUnit:IfcUnit, SecondaryUnit:IfcUnit, Expression:IfcLabel, AccessState:IfcStateEnum) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.TemplateType = TemplateType
        this.PrimaryMeasureType = PrimaryMeasureType
        this.SecondaryMeasureType = SecondaryMeasureType
        this.Enumerators = Enumerators
        this.PrimaryUnit = PrimaryUnit
        this.SecondaryUnit = SecondaryUnit
        this.Expression = Expression
        this.AccessState = AccessState
    }
    /** Property type defining whether the property template defines a property with a single value, a bounded value, a list value, a table value, an enumerated value, or a reference value.
     * Or the quantity type defining whether the template defines a quantity with a length, area, volume, weight or time value.
     * the value of this property determines the correct use of the PrimaryUnit, SecondaryUnit, PrimaryDataType, SecondaryDataType, and Expression attributes.
    */
    TemplateType?: IfcSimplePropertyTemplateTypeEnum
    /** Primary measure type assigned to the definition of the property.
     * It should be provided, if the PropertyType is set to: P_SINGLEVALUE: determining the measure type of IfcPropertySingleValue
     * NominalValue P_ENUMERATEDVALUE: determining the measure type of IfcPropertyEnumeratedValue
     * EnumerationValues P_BOUNDEDVALUE: determining the measure type of IfcPropertyBoundedValue
     * LowerBoundValue P_LISTVALUE: determining the measure type of IfcPropertyListValue
     * ListValues P_TABLEVALUE: determining the measure type of IfcPropertyTableValue
     * DefiningValues P_REFERENCEVALUE: determining the measure type of IfcPropertyTableValue
     * PropertyReference The value range of the measure type is within the select type IfcValue for all PropertyType's with the exeption of P_REFERENCEVALUE.
     * Here it is within the select type IfcObjectReferenceSelect.
    */
    PrimaryMeasureType?: IfcLabel
    /** Secondary measure type assigned to the definition of the property.
     * It should be provided, if the PropertyType is set to: P_BOUNDEDVALUE: determining the measure type of IfcPropertyBoundedValue
     * UpperBoundValue P_TABLEVALUE: determining the measure type of IfcPropertyTableValue
     * DefinedValues The value range of the measure type is within the select type IfcValue for all PropertyType's with the exeption of P_ENUMERATEDVALUE.
     * Here it is the comma delimited list of enumerators.
     * The measure type of IfcPropertyEnumeration
     * EnumerationValues is provided as PrimaryDataType.
    */
    SecondaryMeasureType?: IfcLabel
    /** Name of the property enumeration, and list of all valid enumerators being selectable values, assigned to the definition of the property.
     * This attribute shall only be provided, if the PropertyType is set to: P_ENUMERATEDVALUE
    */
    Enumerators?: IfcPropertyEnumeration
    /** Primary unit assigned to the definition of the property.
     * It should be provided, if the PropertyType is set to: P_SINGLEVALUE: determining the IfcPropertySingleValue
     * Unit P_ENUMERATEDVALUE: determining the IfcPropertyEnumeration
     * Unit P_BOUNDEDVALUE: determining the IfcPropertyBoundedValue
     * Unit P_LISTVALUE: determining the IfcPropertyListValue
     * Unit P_TABLEVALUE: determining the IfcPropertyTableValue
     * DefiningUnit
    */
    PrimaryUnit?: IfcUnit
    /** Secondary unit assigned to the definition of the property.
     * It should be provided, if the PropertyType is set to: P_TABLEVALUE: determining the IfcPropertyTableValue
     * DefinedUnit
    */
    SecondaryUnit?: IfcUnit
    /** The expression used to store additional information for the property template depending on the PropertyType.
     * It should the following definitions, if the PropertyType is set to: P_TABLEVALUE: the expression that could be evaluated to define the correlation between the defining values and the defined values.
     * Q_LENGTH, Q_AREA, Q_VOLUME, Q_COUNT, Q_WEIGTH, Q_TIME: the formula to be used to calculate the quantity No value shall be asserted if the PropertyType is not listed above.
    */
    Expression?: IfcLabel
    /** Information about the access state of the property.
     * It determines whether a property be viewed and/or modified by any receiving application without specific knowledge of it.
     * Attribute use definition for IfcStateEnum READWRITE: Properties of this template are readable and writable.
     * They may be viewed and modified by users of any application.
     * These are typical informational properties set by a user.
     * READONLY: Properties of this template are read-only.
     * They may be viewed but not modified by users of any application.
     * (Applications may generate such values).
     * These are typical automatically generated properties that should be displayed only, but not written back.
     * LOCKED: Properties of this template are locked.
     * They may only be accessed by the owning application (the publisher of the property set template).
     * These are typically application depended, internal properties that should not be published.
     * READWRITELOCKED: Properties of this template are locked, readable, and writable.
     * They may only be accessed by the owning application.
     * READONLYLOCKED: Properties of this template are locked and read-only.
     * They may only be accessed by the owning application.
    */
    AccessState?: IfcStateEnum
}

export default IfcSimplePropertyTemplate