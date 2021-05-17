// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConnectedFaceSet

import { IfcFace, IfcTopologicalRepresentationItem } from './'

/** Informal Propositions:
 */
 class IfcConnectedFaceSet extends IfcTopologicalRepresentationItem {
    constructor(CfsFaces:Array<IfcFace>) {
        super()
        this.CfsFaces = CfsFaces
    }
    /** The set of faces arcwise connected along common edges or vertices.
    */
    CfsFaces: Array<IfcFace>
}

export default IfcConnectedFaceSet