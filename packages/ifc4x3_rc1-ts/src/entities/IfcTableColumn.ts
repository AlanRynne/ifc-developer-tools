// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTableColumn

import { IfcIdentifier, IfcLabel, IfcText, IfcUnit } from '../types'
import { IfcReference } from './'

/** An IfcTableColumn is a data structure that captures column information for use in an IfcTable.
 *
 * Each instance defines the identifier, name, description, and units of measure that are applicable to the columnar data associated with the IfcTableRow objects.
 *
 * The use of IfcTableColumn supersedes the IsHeading flag associated with IfcTableRow.
 */
 class IfcTableColumn  {
    constructor(Identifier:IfcIdentifier, Name:IfcLabel, Description:IfcText, Unit:IfcUnit, ReferencePath:IfcReference) {

        this.Identifier = Identifier
        this.Name = Name
        this.Description = Description
        this.Unit = Unit
        this.ReferencePath = ReferencePath
    }
    /** The Identifier identifies the column within the table.
     * If provided, it must be unique within the table.
     * Columns may be cross-referenced across multiple tables by sharing the same column identifier.
    */
    Identifier?: IfcIdentifier
    /** The Name is a human-readable caption for the table column.
     * It is not necessarilly unique.
    */
    Name?: IfcLabel
    /** The Description provides human-readable text describing the table column.
    */
    Description?: IfcText
    /** The Unit indicates the unit of measure to be used for this column's data.
     * If not provided, then project default units are assumed.
     * If ReferencePath is provided, the the unit must be of the same measure as the referenced attribute.
    */
    Unit?: IfcUnit
    /** The ReferencePath indicates a relative path to the object and attribute for which data within this column is to be applied.
     * For constraints, such path is relative to the IfcObjectDefinition associated by IfcRelAssociatesConstraint.RelatedObjects.
     * For a constraint to be satisified, exactly one row of the table must match the referenced object for all columns where the ReferencePath attribute is set.
    */
    ReferencePath?: IfcReference
}

export default IfcTableColumn