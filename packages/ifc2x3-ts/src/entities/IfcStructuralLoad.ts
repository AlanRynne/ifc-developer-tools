// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStructuralLoad

import { IfcLabel } from '../types'

/** This abstract entity is the supertype of all loads (actions or reactions) or of certain requirements resulting from structural analysis, or certain provisions which influence structural analysis.
 */
abstract class IfcStructuralLoad  {
    constructor(Name:IfcLabel) {

        this.Name = Name
    }
    /** Optionally defines a name for this load.
    */
    Name?: IfcLabel
}

export default IfcStructuralLoad