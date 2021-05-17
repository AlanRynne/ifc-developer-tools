// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOneDirectionRepeatFactor

import { IfcVector, IfcGeometricRepresentationItem } from './'

/**  */
 class IfcOneDirectionRepeatFactor extends IfcGeometricRepresentationItem {
    constructor(RepeatFactor:IfcVector) {
        super()
        this.RepeatFactor = RepeatFactor
    }

    RepeatFactor: IfcVector
}

export default IfcOneDirectionRepeatFactor