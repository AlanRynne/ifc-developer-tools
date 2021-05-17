// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcClassification

import { IfcLabel } from '../types'
import { IfcCalendarDate } from './'

/** An IfcClassification is used for the arrangement of objects into a class or category according to a common purpose or their possession of common characteristics.
 *
 * A classification in the sense of IfcClassification is taxonomy, or taxonomic scheme, arranged in a hierarchical structure.
 *
 * A category of objects relates to other categories in a generalization-specialization relationship.
 *
 * Therefore the classification items in an classification are organized in a tree structure
 *
 * The IfcClassification identifies the classification system or source to which a classification reference refers to.
 *
 * Each classification reference may reference an instance of IfcClassification.
 *
 * A classification system declared may be either formally published, or it may be a locally defined method of classifiying information
 *
 * There are two methods to define and reference a classification system:
 */
 class IfcClassification  {
    constructor(Source:IfcLabel, Edition:IfcLabel, EditionDate:IfcCalendarDate, Name:IfcLabel) {

        this.Source = Source
        this.Edition = Edition
        this.EditionDate = EditionDate
        this.Name = Name
    }
    /** Source (or publisher) for this classification.
     * that the source of the classification means the person or organization that was the original author or the person or organization currently acting as the publisher.
    */
    Source: IfcLabel
    /** The edition or version of the classification system from which the classification notation is derived.
     * the version labeling system is specific to the classification system.
     * IFC4 CHANGE The attribute has been changed to be optional.
    */
    Edition: IfcLabel
    /** The date on which the edition of the classification used became valid.
     * The indication of edition may be sufficient to identify the classification source uniquely but the edition date is provided as an optional attribute to enable more precise identification where required.
     * IFC4 CHANGE The data type has been changed to IfcDate, the date string according to ISO8601.
    */
    EditionDate?: IfcCalendarDate
    /** The name or label by which the classification used is normally known.
     * Examples of names include CI/SfB, Masterformat, BSAB, Uniclass, STABU, DIN276, DIN277 etc.
    */
    Name: IfcLabel
}

export default IfcClassification