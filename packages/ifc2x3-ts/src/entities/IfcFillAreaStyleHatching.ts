// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFillAreaStyleHatching

import { IfcCurveStyle, IfcCartesianPoint, IfcGeometricRepresentationItem } from './'
import { IfcHatchLineDistanceSelect, IfcPlaneAngleMeasure } from '../types'

/** The IfcFillAreaStyleHatching is used to define simple, vector-based hatching patterns, based on styled straight lines.
 *
 * The curve font, color and thickness is given by the HatchLineAppearance, the angle by the HatchLineAngle and the distance to the next hatch line by StartOfNextHatchLine, being either an offset distance or a vector
 *
 * For better control of the hatching appearance, when using hatch lines with other fonts then continuous, the PatternStart allows to offset the start of the curve font pattern along the reference hatch line (if not given, the PatternStart is at zero distance from the virtual point of origin).
 *
 * If the reference hatch line does not go through the origin (of the virtual hatching coordinate system), it can be offset by using the PatternStart 
 *
 * Figure 393 illustrates hatch attributes.
 */
 class IfcFillAreaStyleHatching extends IfcGeometricRepresentationItem {
    constructor(HatchLineAppearance:IfcCurveStyle, StartOfNextHatchLine:IfcHatchLineDistanceSelect, PointOfReferenceHatchLine:IfcCartesianPoint, PatternStart:IfcCartesianPoint, HatchLineAngle:IfcPlaneAngleMeasure) {
        super()
        this.HatchLineAppearance = HatchLineAppearance
        this.StartOfNextHatchLine = StartOfNextHatchLine
        this.PointOfReferenceHatchLine = PointOfReferenceHatchLine
        this.PatternStart = PatternStart
        this.HatchLineAngle = HatchLineAngle
    }
    /** The curve style of the hatching lines.
     * Any curve style pattern shall start at the origin of each hatch line.
    */
    HatchLineAppearance: IfcCurveStyle
    /** A repetition factor that determines the distance between adjacent hatch lines.
     * The factor can either be defined by a parallel offset, or by a repeat factor provided by IfcVector.
     * IFC2x3 CHANGE The attribute type of StartOfNextHatchLine has changed to a SELECT of IfcPositiveLengthMeasure (new) and IfcOneDirectionRepeatFactor.
     * IFC4 CHANGE The attribute type of StartOfNextHatchLine has changed to a SELECT of IfcPositiveLengthMeasure (new) and IfcVector.
    */
    StartOfNextHatchLine: IfcHatchLineDistanceSelect
    /** A Cartesian point which defines the offset of the reference hatch line from the origin of the (virtual) hatching coordinate system.
     * The origin is used for mapping the fill area style hatching onto an annotation fill area or surface.
     * The reference hatch line would then appear with this offset from the fill style target point.
     * If not given the reference hatch lines goes through the origin of the (virtual) hatching coordinate system.
     * IFC2x3 CHANGE The usage of the attribute PointOfReferenceHatchLine has changed to not provide the Cartesian point which is the origin for mapping, but to provide an offset to the origin for the mapping.
     * The attribute has been made OPTIONAL.
    */
    PointOfReferenceHatchLine?: IfcCartesianPoint
    /** A distance along the reference hatch line which is the start point for the curve style font pattern of the reference hatch line.
     * If not given, the start point of the curve style font pattern is at the (virtual) hatching coordinate system.
     * IFC2x2 Add2 CHANGE The attribute PatternStart has been made OPTIONAL.
    */
    PatternStart?: IfcCartesianPoint
    /** A plane angle measure determining the direction of the parallel hatching lines.
    */
    HatchLineAngle: IfcPlaneAngleMeasure
}

export default IfcFillAreaStyleHatching