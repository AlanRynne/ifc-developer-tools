// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDefinedSymbol

import { IfcDefinedSymbolSelect } from '../types'
import { IfcCartesianTransformationOperator2D, IfcGeometricRepresentationItem } from './'

/**  */
 class IfcDefinedSymbol extends IfcGeometricRepresentationItem {
    constructor(Definition:IfcDefinedSymbolSelect, Target:IfcCartesianTransformationOperator2D) {
        super()
        this.Definition = Definition
        this.Target = Target
    }

    Definition: IfcDefinedSymbolSelect

    Target: IfcCartesianTransformationOperator2D
}

export default IfcDefinedSymbol