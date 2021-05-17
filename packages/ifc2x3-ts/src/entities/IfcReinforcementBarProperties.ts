// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcementBarProperties

import { IfcAreaMeasure, IfcLabel, IfcReinforcingBarSurfaceEnum, IfcLengthMeasure, IfcPositiveLengthMeasure, IfcCountMeasure } from '../types'

/** IfcReinforcementProperties defines the set of properties for a specific combination of reinforcement bar steel grade, bar type and effective depth
 *
 * The total cross section area for the specific steel grade is always provided.
 *
 * Additionally also general reinforcing bar configurations as a count of bars may be provided as defined in attribute BarCount.
 *
 * In this case the nominal bar diameter should be identical for all given bars as defined in attribute NominalBarDiameter.
 */
 class IfcReinforcementBarProperties  {
    constructor(TotalCrossSectionArea:IfcAreaMeasure, SteelGrade:IfcLabel, BarSurface:IfcReinforcingBarSurfaceEnum, EffectiveDepth:IfcLengthMeasure, NominalBarDiameter:IfcPositiveLengthMeasure, BarCount:IfcCountMeasure) {

        this.TotalCrossSectionArea = TotalCrossSectionArea
        this.SteelGrade = SteelGrade
        this.BarSurface = BarSurface
        this.EffectiveDepth = EffectiveDepth
        this.NominalBarDiameter = NominalBarDiameter
        this.BarCount = BarCount
    }
    /** The total effective cross-section area of the reinforcement of a specific steel grade.
    */
    TotalCrossSectionArea: IfcAreaMeasure
    /** The nominal steel grade defined according to local standards.
    */
    SteelGrade: IfcLabel
    /** Indicator for whether the bar surface is plain or textured.
    */
    BarSurface?: IfcReinforcingBarSurfaceEnum
    /** The effective depth, i.e. the distance of the specific reinforcement cross section area or reinforcement configuration in a row, counted from a common specific reference point.
     * Usually the reference point is the upper surface (for beams and slabs) or a similar projection in a plane (for columns).
    */
    EffectiveDepth?: IfcLengthMeasure
    /** The nominal diameter defining the cross-section size of the reinforcing bar.
     * The bar diameter should be identical for all bars included in the specific reinforcement configuration.
    */
    NominalBarDiameter?: IfcPositiveLengthMeasure
    /** The number of bars with identical nominal diameter and steel grade included in the specific reinforcement configuration.
    */
    BarCount?: IfcCountMeasure
}

export default IfcReinforcementBarProperties