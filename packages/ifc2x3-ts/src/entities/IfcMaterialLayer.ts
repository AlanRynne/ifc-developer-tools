// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialLayer

import { IfcMaterial } from './'
import { IfcPositiveLengthMeasure, IfcLogical } from '../types'

/** IfcMaterialLayer is a single and identifiable part of an element which is constructed of a number of layers (one or more).
 *
 * Each IfcMaterialLayer has a constant thickness and is located relative to the referencing IfcMaterialLayerSet along the material layer set base (MlsBase)
 *
 * Air gaps within a material layer set are represented as an IfcMaterialLayer with the attribute IsVentilated having the value TRUE or UNKNOWN.
 *
 * Such air gaps shall be interpreted as voids (not having a material)
 *
 * The IfcMaterialLayer may have a material layer name which may differ from the IfcMaterial name referenced.
 */
 class IfcMaterialLayer  {
    constructor(Material:IfcMaterial, LayerThickness:IfcPositiveLengthMeasure, IsVentilated:IfcLogical) {

        this.Material = Material
        this.LayerThickness = LayerThickness
        this.IsVentilated = IsVentilated
    }
    /** Optional reference to the material from which the layer is constructed.
     * Note that if this value is not given, it does not denote a layer with no material (an air gap), it only means that the material is not specified at that point.
    */
    Material?: IfcMaterial
    /** The thickness of the material layer.
     * The meaning of "thickness" depends on its usage.
     * In case of building elements elements utilizing IfcMaterialLayerSetUsage, the dimension is measured along the positive LayerSetDirection as specified in IfcMaterialLayerSetUsage.
     * The attribute value can be 0. for material thicknesses very close to zero, such as for a membrane.
     * Material layers with thickess 0. may not be rendered in the geometric representation.
     * IFC4 CHANGE The attribute datatype has been changed to IfcNonNegativeLengthMeasure allowing for 0. as thickness.
    */
    LayerThickness: IfcPositiveLengthMeasure
    /** Indication of whether the material layer represents an air layer (or cavity).
     * set to TRUE if the material layer is an air gap and provides air exchange from the layer to the outside air.
     * set to UNKNOWN if the material layer is an air gap and does not provide air exchange (or when this information about air exchange of the air gap is not available).
     * set to FALSE if the material layer is a solid material layer (the default).
    */
    IsVentilated?: IfcLogical
}

export default IfcMaterialLayer