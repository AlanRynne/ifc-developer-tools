// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesClassification

import { IfcClassificationNotationSelect, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcRoot, IfcRelAssociates } from './'

/** The objectified relationship IfcRelAssociatesClassification handles the assignment of a classification item (items of the select IfcClassificationSelect) to objects occurrences (subtypes of IfcObject) or object types (subtypes of IfcTypeObject)
 *
 * The relationship is used to assign a classification item, or a classification system itself to objects.
 *
 * Depending on the type of the RelatingClassification it is either:The inherited attribute RelatedObjects define the objects or object types to which the classification is applied.
 *
 * The attribute RelatingClassification is the reference to a classification, applied to the object(s).
 *
 * A single RelatingClassification can thereby be applied to one or multiple objects.
 */
 class IfcRelAssociatesClassification extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcRoot>, RelatingClassification:IfcClassificationNotationSelect) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingClassification = RelatingClassification
    }
    /** Classification applied to the objects.
    */
    RelatingClassification: IfcClassificationNotationSelect
}

export default IfcRelAssociatesClassification