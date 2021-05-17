// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialLayerWithOffsets

import { IfcLayerSetDirectionEnum, IfcLengthMeasure, IfcNonNegativeLengthMeasure, IfcLogical, IfcLabel, IfcText, IfcInteger } from '../types'
import { IfcMaterial, IfcMaterialLayer } from './'

/** IfcMaterialLayerWithOffsets is a specialization of IfcMaterialLayer enabling definition of offset values along edges (within the material layer set usage in parent layer set)
 *
 * It defines the assignment of two offset values for a material layer in its intended use within a material layer set.
 *
 * Offsets are applied to the edges of layered elements (that is, in directions perpendicular to the layer set direction).
 *
 * Offsets shall not be used in layer set direction, that is, for modelling gaps (or overlaps) between layers; gaps shall be modeled as layers with appropriate material assignment for the void.
 */
 class IfcMaterialLayerWithOffsets extends IfcMaterialLayer {
    constructor(Material:IfcMaterial, LayerThickness:IfcNonNegativeLengthMeasure, IsVentilated:IfcLogical, Name:IfcLabel, Description:IfcText, Category:IfcLabel, Priority:IfcInteger, OffsetDirection:IfcLayerSetDirectionEnum, OffsetValues:Array<IfcLengthMeasure>) {
        super(Material, LayerThickness, IsVentilated, Name, Description, Category, Priority)
        this.OffsetDirection = OffsetDirection
        this.OffsetValues = OffsetValues
    }
    /** Orientation of the offset; shall be perpendicular to the parent layer set direction.
    */
    OffsetDirection: IfcLayerSetDirectionEnum
    /** The numerical value of layer offset, in the direction of the axis assigned by the attribute OffsetDirection.
     * The OffsetValues[1] identifies the offset from the lower position along the axis direction (normally the start of the standard extrusion), the OffsetValues[2] identifies the offset from the upper position along the axis direction (normally the end of the standard extrusion).
    */
    OffsetValues: Array<IfcLengthMeasure>
}

export default IfcMaterialLayerWithOffsets