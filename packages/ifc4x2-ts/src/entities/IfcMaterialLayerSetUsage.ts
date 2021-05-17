// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialLayerSetUsage

import { IfcMaterialLayerSet, IfcMaterialUsageDefinition } from './'
import { IfcLayerSetDirectionEnum, IfcDirectionSenseEnum, IfcLengthMeasure, IfcPositiveLengthMeasure } from '../types'

/** The IfcMaterialLayerSetUsage determines the usage of IfcMaterialLayerSet in terms of its location and orientation relative to the associated element geometry.
 *
 * The location of material layer set shall be compatible with the building element geometry (that is, material layers shall fit inside the element geometry).
 *
 * The rules to ensure the compatibility depend on the type of the building element
 *
 * The IfcMaterialLayerSetUsage is always assigned to an individual occurrence object (and only to relevant subtypes of IfcElement).
 *
 * The IfcMaterialLayerSet, referenced by ForLayerSet, can however be shared among several occurrence objects.
 *
 * If the element type is available (in other words, an instance of the relevant subtype of IfcElementType exists), then the IfcMaterialLayerSet can be assigned to the element type.
 *
 * The assignment between a subtype of IfcElement and the IfcMaterialLayerSetUsage is handled by IfcRelAssociatesMaterial
 *
 * Attribute use definitionThe IfcMaterialLayerSetUsage is primarily intended to be associated with planar building elements having a constant thickness.
 *
 * With further agreements on the interpretation of LayerSetDirection, the usage can be extended also to other cases, for example to curved building elements, provided that the material layer thicknesses are constant
 *
 * Generally, an element may be layered in any of its primary directions, denoted by its x, y or z axis.
 *
 * The geometry use definitions at each specific type of building element will determine the applicable LayerSetDirection
 *
 * The following examples illustrate how the IfcMaterialLayerSetUsage attributes (LayerSetDirection, DirectionSense, OffsetFromReferenceLine) can be used in different cases.
 *
 * Normative material use definitions are documented at each element (how these shall be used)
 *
 * Figure 388 shows an example of the use of IfcMaterialLayerSetUsage aligned to the axis of a wall
 *
 * Figure 389 shows an example of the use of IfcMaterialLayerSetUsage aligned to a slab
 *
 * Figure 390 shows an example of the use of IfcMaterialLayerSetUsage aligned to a roof slab with non-perpendicular extrusion.
 */
 class IfcMaterialLayerSetUsage extends IfcMaterialUsageDefinition {
    constructor(ForLayerSet:IfcMaterialLayerSet, LayerSetDirection:IfcLayerSetDirectionEnum, DirectionSense:IfcDirectionSenseEnum, OffsetFromReferenceLine:IfcLengthMeasure, ReferenceExtent:IfcPositiveLengthMeasure) {
        super()
        this.ForLayerSet = ForLayerSet
        this.LayerSetDirection = LayerSetDirection
        this.DirectionSense = DirectionSense
        this.OffsetFromReferenceLine = OffsetFromReferenceLine
        this.ReferenceExtent = ReferenceExtent
    }
    /** The IfcMaterialLayerSet set to which the usage is applied.
    */
    ForLayerSet: IfcMaterialLayerSet
    /** Orientation of the material layer set relative to element reference geometry.
     * The meaning of the value of this attribute shall be specified in the geometry use section for each element.
     * For extruded shape representation, direction can be given along the extrusion path (e.g. for slabs) or perpendicular to it (e.g. for walls).
     * The LayerSetDirection for IfcWallStandardCase shall be AXIS2 (i.e. the y-axis) and for IfcSlabStandardCase and IfcPlateStandardCase it shall be AXIS3 (i.e. the z-axis).
     * Whether the material layers of the set being used shall 'grow' into the positive or negative direction of the given axis, shall be defined by DirectionSense attribute.
    */
    LayerSetDirection: IfcLayerSetDirectionEnum
    /** Denotes whether the material layer set is oriented in positive or negative sense along the specified axis (defined by LayerSetDirection).
     * "Positive" means that the consecutive layers (the IfcMaterialLayer instances in the list of IfcMaterialLayerSet
     * MaterialLayers) are placed face-by-face in the direction of the positive axis as established by LayerSetDirection: for AXIS2 it would be in +y, for AXIS3 it would be +z.
     * "Negative" means that the layers are placed face-by-face in the direction of the negative LayerSetDirection.
     * In both cases, starting at the material layer set base line.
     * the material layer set base line (MlsBase) is located by OffsetFromReferenceLine, and may be on the positive or negative side of the element reference line (or plane); positive or negative for MlsBase placement does not depend on the DirectionSense attribute, but on the relevant element axis.
    */
    DirectionSense: IfcDirectionSenseEnum
    /** Offset of the material layer set base line (MlsBase) from reference geometry (line or plane) of element.
     * The offset can be positive or negative, unless restricted for a particular building element type in its use definition or by implementer agreement.
     * A positive value means, that the MlsBase is placed on the positive side of the reference line or plane, on the axis established by LayerSetDirection (in case of AXIS2 into the direction of +y, or in case of AXIS2 into the direction of +z).
     * A negative value means that the MlsBase is placed on the negative side, as established by LayerSetDirection (in case of AXIS2 into the direction of -y).
     * the positive or negative sign in the offset only affects the MlsBase placement, it does not have any effect on the application of DirectionSense for orientation of the material layers; also DirectionSense does not change the MlsBase placement.
    */
    OffsetFromReferenceLine: IfcLengthMeasure
    /** Extent of the extrusion of the elements body shape representation to which the IfcMaterialLayerSetUsage applies.
     * It is used as the reference value for the upper OffsetValues[2] provided by the IfcMaterialLayerSetWithOffsets subtype for included material layers.
     * IFC4 CHANGE New attribute added to the end of attribute list.
     * The attribute ReferenceExtent shall be asserted, if an IfcMaterialLayerSetWithOffsets is included in the ForLayerSet
     * MaterialLayers list of material layers.
     * The ReferenceExtent for IfcWallStandardCase is the reference height starting at z=0 being the XY plane of the object coordinate system.
    */
    ReferenceExtent?: IfcPositiveLengthMeasure
}

export default IfcMaterialLayerSetUsage