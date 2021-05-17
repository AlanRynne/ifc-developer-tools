// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTable

import { IfcLabel } from '../types'
import { IfcTableRow, IfcTableColumn } from './'

/** An IfcTable is a data structure for the provision of information in the form of rows and columns.
 *
 * Each instance may have IfcTableColumn instances that define the name, description and units for each column.
 *
 * The rows of information are stored as a list of IfcTableRow objects
 *
 * Limitation: For backwards compatibility, the rows of an IfcTable object are constrained to have the same number of cells.
 *
 * The first row of the table provides the number of cells.
 *
 * All other rows are forced to include the same number of cells.
 *
 * This is enforced by the WR2
 *
 * Figure 446 illustrates table use
 *
 * Figure 447 depicts how tables were structured prior to IFC4.
 */
 class IfcTable  {
    constructor(Name:IfcLabel, Rows:Array<IfcTableRow>, Columns:Array<IfcTableColumn>) {

        this.Name = Name
        this.Rows = Rows
        this.Columns = Columns
    }
    /** 
    */
    Name?: IfcLabel
    /** Reference to information content of rows.
    */
    Rows?: Array<IfcTableRow>
    /** The column information associated with this table.
    */
    Columns?: Array<IfcTableColumn>
}

export default IfcTable