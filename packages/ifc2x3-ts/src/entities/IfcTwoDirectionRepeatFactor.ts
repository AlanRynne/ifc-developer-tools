// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTwoDirectionRepeatFactor

import { IfcVector, IfcOneDirectionRepeatFactor } from './'

/**  */
 class IfcTwoDirectionRepeatFactor extends IfcOneDirectionRepeatFactor {
    constructor(RepeatFactor:IfcVector, SecondRepeatFactor:IfcVector) {
        super(RepeatFactor)
        this.SecondRepeatFactor = SecondRepeatFactor
    }

    SecondRepeatFactor: IfcVector
}

export default IfcTwoDirectionRepeatFactor