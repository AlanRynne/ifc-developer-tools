// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcClassificationReference

import { IfcClassification, IfcExternalReference } from './'
import { IfcLabel, IfcIdentifier } from '../types'

/** An IfcClassificationReference is a reference into a classification system or source (see IfcClassification) for a specific classification key (or notation)
 *
 * The inherited attributes have the following meaning:The IfcClassificationReference can either be assigned directly to the IfcClassification, such as if no classification hierarchy has to be included, or it references the parent classification notation, if the fully classification hierarchy is included in the data set.
 *
 * The first is refered to as "lightweight classification", and the second as "full classification".
 *
 * The attribute ReferencedSource then holds the following information (choice by IfcClassificationReferenceSelect):
 */
 class IfcClassificationReference extends IfcExternalReference {
    constructor(Location:IfcLabel, ItemReference:IfcIdentifier, Name:IfcLabel, ReferencedSource:IfcClassification) {
        super(Location, ItemReference, Name)
        this.ReferencedSource = ReferencedSource
    }
    /** The classification system or source that is referenced.
     * IFC4 CHANGE Data type changed to IfcClassificationReferenceSelect.
    */
    ReferencedSource?: IfcClassification
}

export default IfcClassificationReference