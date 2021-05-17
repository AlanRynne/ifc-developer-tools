// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAppliedValue

import { IfcLabel, IfcText, IfcAppliedValueSelect, IfcDateTimeSelect } from '../types'
import { IfcMeasureWithUnit } from './'

/** This entity captures a value driven by a formula, with additional qualifications including unit basis, valid date range, and categorization
 *
 * The extent of the IfcAppliedValue is determined by the AppliedValue attribute which may be defined either as an IfcMeasureWithUnit or as an IfcMonetaryMeasure or as an IfcRatioMeasure via the IfcAppliedValueSelect type.
 *
 * Optionally, an IfcAppliedValue may have an applicable date.
 *
 * This is intended to fix the date on which the value became relevant for use.
 *
 * It may be the date on which the value was set in the model or it may be a prior or future date when the value becomes operable.
 *
 * Similarly, an IfcAppliedValue may have a 'fixed until' date.
 *
 * This is intended to fix the date on which the value ceases to be relevant for use
 *
 * An instance of IfcAppliedValue may have a unit basis asserted.
 *
 * This is defined as an IfcMeasureWithUnit that determines the extent of the unit value for application purposes.
 *
 * It is assumed that when this attribute is asserted, then the value given to IfcAppliedValue is that for unit quantity.
 *
 * This is not enforced within the schema and thus needs to be controlled within an application
 *
 * Applied values may be referenced from a document (such as a price list).
 *
 * The relationship between one or more occurrences of IfcAppliedValue (or its subtypes) is achieved through the use of the IfcExternalReferenceRelationship in which the document provides the IfcExternalReferenceRelationship
 *
 * RelatingExtReference and the value occurrences are the IfcExternalReferenceRelationship.RelatedResourceObjects.
 */
abstract class IfcAppliedValue  {
    constructor(Name:IfcLabel, Description:IfcText, AppliedValue:IfcAppliedValueSelect, UnitBasis:IfcMeasureWithUnit, ApplicableDate:IfcDateTimeSelect, FixedUntilDate:IfcDateTimeSelect) {

        this.Name = Name
        this.Description = Description
        this.AppliedValue = AppliedValue
        this.UnitBasis = UnitBasis
        this.ApplicableDate = ApplicableDate
        this.FixedUntilDate = FixedUntilDate
    }
    /** A name or additional clarification given to a cost value.
    */
    Name?: IfcLabel
    /** The description that may apply additional information about a cost value.
    */
    Description?: IfcText
    /** The extent or quantity or amount of an applied value.
    */
    AppliedValue?: IfcAppliedValueSelect
    /** The number and unit of measure on which the unit cost is based.
     * Note: As well as the normally expected units of measure such as length, area, volume etc., costs may be based on units of measure which need to be defined e.g. sack, drum, pallet, item etc. Unit costs may be based on quantities greater (or lesser) than a unitary value of the basis measure.
     * For instance, timber may have a unit cost rate per X meters where X > 1; similarly for cable, piping and many other items.
     * The basis number may be either an integer or a real value.
     * Note: This attribute should be asserted for all circumstances where the cost to be applied is per unit quantity.
     * It may be asserted even for circumstances where an item price is used, in which case the unit cost basis should be by item (or equivalent definition).
    */
    UnitBasis?: IfcMeasureWithUnit
    /** The date on or from which an applied value is applicable.
     * IFC4 CHANGE Type changed from IfcDateTimeSelect.
    */
    ApplicableDate?: IfcDateTimeSelect
    /** The date until which applied value is applicable.
     * IFC4 CHANGE Type changed from IfcDateTimeSelect.
    */
    FixedUntilDate?: IfcDateTimeSelect
}

export default IfcAppliedValue