// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcClassification

import { IfcLabel, IfcDate, IfcText, IfcURIReference, IfcIdentifier } from '../types'
import { IfcExternalInformation } from './'

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
 class IfcClassification extends IfcExternalInformation {
    constructor(Source:IfcLabel, Edition:IfcLabel, EditionDate:IfcDate, Name:IfcLabel, Description:IfcText, Location:IfcURIReference, ReferenceTokens:Array<IfcIdentifier>) {
        super()
        this.Source = Source
        this.Edition = Edition
        this.EditionDate = EditionDate
        this.Name = Name
        this.Description = Description
        this.Location = Location
        this.ReferenceTokens = ReferenceTokens
    }
    /** Source (or publisher) for this classification.
     * that the source of the classification means the person or organization that was the original author or the person or organization currently acting as the publisher.
    */
    Source?: IfcLabel
    /** The edition or version of the classification system from which the classification notation is derived.
     * the version labeling system is specific to the classification system.
     * IFC4 CHANGE The attribute has been changed to be optional.
    */
    Edition?: IfcLabel
    /** The date on which the edition of the classification used became valid.
     * The indication of edition may be sufficient to identify the classification source uniquely but the edition date is provided as an optional attribute to enable more precise identification where required.
     * IFC4 CHANGE The data type has been changed to IfcDate, the date string according to ISO8601.
    */
    EditionDate?: IfcDate
    /** The name or label by which the classification used is normally known.
     * Examples of names include CI/SfB, Masterformat, BSAB, Uniclass, STABU, DIN276, DIN277 etc.
    */
    Name: IfcLabel
    /** Additional description provided for the classification.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Description?: IfcText
    /** Resource identifier or locator, provided as URI, URN or URL, of the classification.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Location?: IfcURIReference
    /** The delimiter tokens that are used to mark the boundaries of individual facets (substrings) in a classification reference.
     * This typically applies then the IfcClassification is used in conjuction with IfcClassificationReference's.
     * If only one ReferenceToken is provided, it applies to all boundaries of individual facets, if more than one ReferenceToken are provided, the first token applies to the first boundary, the second token to the second boundary, and the nth token to the nth and any additional boundary.
     * Tokens are typically recommended within the classification itself and each token will have a particular role.
     * EXAMPLE 1 To indicate that the facet delimiter used for DIN277-2 reference key "2.1" ("Office rooms") is ".", a single ReferenceToken ['.'] is provided.
     * To indicate that the facet delimiter used for Omniclass Table 13 (space by function) reference key "13-15 11 34 11" ("Office") are "-" and " ", two ReferenceToken's ['-', ' '] are provided.
     * EXAMPLE 2 The use of ReferenceTokens can also be extended to include masks.
     * The use need to be agreed in view definitions or implementer agreements that stipulates a "mask syntax" that should be used.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    ReferenceTokens?: Array<IfcIdentifier>
}

export default IfcClassification