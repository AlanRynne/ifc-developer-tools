// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialLayer

import { IfcMaterial, IfcMaterialDefinition } from './'
import { IfcNonNegativeLengthMeasure, IfcLogical, IfcLabel, IfcText, IfcInteger } from '../types'

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
 class IfcMaterialLayer extends IfcMaterialDefinition {
    constructor(Material:IfcMaterial, LayerThickness:IfcNonNegativeLengthMeasure, IsVentilated:IfcLogical, Name:IfcLabel, Description:IfcText, Category:IfcLabel, Priority:IfcInteger) {
        super()
        this.Material = Material
        this.LayerThickness = LayerThickness
        this.IsVentilated = IsVentilated
        this.Name = Name
        this.Description = Description
        this.Category = Category
        this.Priority = Priority
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
    LayerThickness: IfcNonNegativeLengthMeasure
    /** Indication of whether the material layer represents an air layer (or cavity).
     * set to TRUE if the material layer is an air gap and provides air exchange from the layer to the outside air.
     * set to UNKNOWN if the material layer is an air gap and does not provide air exchange (or when this information about air exchange of the air gap is not available).
     * set to FALSE if the material layer is a solid material layer (the default).
    */
    IsVentilated?: IfcLogical
    /** The name by which the material layer is known.
    */
    Name?: IfcLabel
    /** Definition of the material layer in more descriptive terms than given by attributes Name or Category.
    */
    Description?: IfcText
    /** Category of the material layer, e.g. the role it has in the layer set it belongs to (such as 'load bearing', 'thermal insulation' etc.). The list of keywords might be extended by model view definitions, however the following keywords shall apply in general: 'LoadBearing' — for all material layers having a load bearing function.
     * 'Insulation' — for all material layers having an insolating function.
     * 'Inner finish' — for the material layer being the inner finish.
     * 'Outer finish' — for the material layer being the outer finish.
    */
    Category?: IfcLabel
    /** The relative priority of the layer, expressed as normalised integer range [0..100].
     * Controls how layers intersect in connections and corners of building elements: a layer from one element protrudes into (i.e. displaces) a layer from another element in a joint of these elements if the former element's layer has higher priority than the latter.
     * The priority value for a material layer in an element has to be set and maintained by software applications in relation to the material layers in connected elements.
     * The layer priority at a connection may be overridden by the priority attributes of IfcRelConnectsPathElements if that relationship is used to establish a logical connection between two building elements having a layer structure.
    */
    Priority?: IfcInteger
}

export default IfcMaterialLayer