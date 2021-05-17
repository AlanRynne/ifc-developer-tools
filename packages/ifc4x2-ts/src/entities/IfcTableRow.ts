// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTableRow

import { IfcValue, IfcBoolean } from '../types'

/** IfcTableRow contains data for a single row within an IfcTable.
 *
 * Limitation: For backward compatibility, all IfcTableRow objects referenced by an IfcTable shall have the same number of Row Cells.
 *
 * The actual number of Cells shall be taken from the number of cells of the first IfcTableRow for that table.
 *
 * The number of Cells is calculated by the derived attribute NumberOfCellsInRow in the associated IfcTable.
 */
 class IfcTableRow  {
    constructor(RowCells:Array<IfcValue>, IsHeading:IfcBoolean) {

        this.RowCells = RowCells
        this.IsHeading = IsHeading
    }
    /** The data value of the table cell..
    */
    RowCells?: Array<IfcValue>
    /** Flag which identifies if the row is a heading row or a row which contains row values.
     * - If the row is a heading, the flag takes the value = TRUE.
    */
    IsHeading?: IfcBoolean
}

export default IfcTableRow