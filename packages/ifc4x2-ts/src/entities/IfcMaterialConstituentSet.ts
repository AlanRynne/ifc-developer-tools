// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialConstituentSet

import { IfcLabel, IfcText } from '../types'
import { IfcMaterialConstituent, IfcMaterialDefinition } from './'

/** IfcMaterialConstituentSet is a collection of individual material constituents, each assigning a material to a part of an element.
 *
 * The parts are only identified by a keyword (as opposed to an IfcMaterialLayerSet or IfcMaterialProfileSet where each part has an individual shape parameter (layer thickness or layer profile).
 */
 class IfcMaterialConstituentSet extends IfcMaterialDefinition {
    constructor(Name:IfcLabel, Description:IfcText, MaterialConstituents:Array<IfcMaterialConstituent>) {
        super()
        this.Name = Name
        this.Description = Description
        this.MaterialConstituents = MaterialConstituents
    }
    /** The name by which the constituent set is known.
    */
    Name?: IfcLabel
    /** Definition of the material constituent set in descriptive terms.
    */
    Description?: IfcText
    /** Identification of the constituents from which the material constituent set is composed.
    */
    MaterialConstituents?: Array<IfcMaterialConstituent>
}

export default IfcMaterialConstituentSet