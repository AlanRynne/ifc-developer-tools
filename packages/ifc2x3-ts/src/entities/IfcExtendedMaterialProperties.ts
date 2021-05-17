// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExtendedMaterialProperties

import { IfcProperty, IfcMaterial, IfcMaterialProperties } from './'
import { IfcText, IfcLabel } from '../types'

/**  */
 class IfcExtendedMaterialProperties extends IfcMaterialProperties {
    constructor(Material:IfcMaterial, ExtendedProperties:Array<IfcProperty>, Description:IfcText, Name:IfcLabel) {
        super(Material)
        this.ExtendedProperties = ExtendedProperties
        this.Description = Description
        this.Name = Name
    }

    ExtendedProperties: Array<IfcProperty>

    Description?: IfcText

    Name: IfcLabel
}

export default IfcExtendedMaterialProperties