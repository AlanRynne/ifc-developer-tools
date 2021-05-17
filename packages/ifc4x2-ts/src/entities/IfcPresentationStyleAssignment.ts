// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPresentationStyleAssignment

import { IfcPresentationStyleSelect } from '../types'

/** Assignment of style information to a styled item.
 */
 class IfcPresentationStyleAssignment  {
    constructor(Styles:Array<IfcPresentationStyleSelect>) {

        this.Styles = Styles
    }
    /** A set of presentation styles that are assigned to styled items.
    */
    Styles: Array<IfcPresentationStyleSelect>
}

export default IfcPresentationStyleAssignment