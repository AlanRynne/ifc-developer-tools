// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSymbolStyle

import { IfcSymbolStyleSelect, IfcLabel } from '../types'
import { IfcPresentationStyle } from './'

/**  */
 class IfcSymbolStyle extends IfcPresentationStyle {
    constructor(Name:IfcLabel, StyleOfSymbol:IfcSymbolStyleSelect) {
        super(Name)
        this.StyleOfSymbol = StyleOfSymbol
    }

    StyleOfSymbol: IfcSymbolStyleSelect
}

export default IfcSymbolStyle