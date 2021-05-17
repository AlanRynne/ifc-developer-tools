// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcClassificationReference

import { IfcClassificationReferenceSelect, IfcText, IfcIdentifier, IfcURIReference, IfcLabel } from '../types'
import { IfcExternalReference } from './'

/** An IfcClassificationReference is a reference into a classification system or source (see IfcClassification) for a specific classification key (or notation)
 *
 * The inherited attributes have the following meaning:The IfcClassificationReference can either be assigned directly to the IfcClassification, such as if no classification hierarchy has to be included, or it references the parent classification notation, if the fully classification hierarchy is included in the data set.
 *
 * The first is refered to as "lightweight classification", and the second as "full classification".
 *
 * The attribute ReferencedSource then holds the following information (choice by IfcClassificationReferenceSelect):
 */
 class IfcClassificationReference extends IfcExternalReference {
    constructor(Location:IfcURIReference, Identification:IfcIdentifier, Name:IfcLabel, ReferencedSource:IfcClassificationReferenceSelect, Description:IfcText, Sort:IfcIdentifier) {
        super(Location, Identification, Name)
        this.ReferencedSource = ReferencedSource
        this.Description = Description
        this.Sort = Sort
    }
    /** The classification system or source that is referenced.
     * IFC4 CHANGE Data type changed to IfcClassificationReferenceSelect.
    */
    ReferencedSource?: IfcClassificationReferenceSelect
    /** Description of the classification reference for informational purposes.
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Description?: IfcText
    /** Optional identifier to sort the set of classification references within the referenced source (either a classification facet of higher level, or the classification system itself).
     * IFC4 CHANGE New attribute added at the end of the attribute list.
    */
    Sort?: IfcIdentifier
}

export default IfcClassificationReference