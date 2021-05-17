// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialLayerSet

import { IfcMaterialLayer } from './'
import { IfcLabel } from '../types'

/** The IfcMaterialLayerSet is a designation by which materials of an element constructed of a number of material layers is known and through which the relative positioning of individual layers can be expressed
 *
 * The Material Layer Set Base (MlsBase) describes the imaginary axis along which the material layers are positioned
 *
 * Attribute use definitionAs shown in Figure 385, each IfcMaterialLayerSet implicitly defines a material layer set base line (MlsBase), to which the start of the first IfcMaterialLayer is aligned.
 *
 * The total thickness of a layer set is calculated from the individual layer thicknesses, the first layer starting from the MlsBase and following layers being placed on top of the previous (no gaps or overlaps).
 */
 class IfcMaterialLayerSet  {
    constructor(MaterialLayers:Array<IfcMaterialLayer>, LayerSetName:IfcLabel) {

        this.MaterialLayers = MaterialLayers
        this.LayerSetName = LayerSetName
    }
    /** Identification of the IfcMaterialLayer’s from which the IfcMaterialLayerSet is composed.
    */
    MaterialLayers: Array<IfcMaterialLayer>
    /** The name by which the IfcMaterialLayerSet is known.
    */
    LayerSetName?: IfcLabel
}

export default IfcMaterialLayerSet