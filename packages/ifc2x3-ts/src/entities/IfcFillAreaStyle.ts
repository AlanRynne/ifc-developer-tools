// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFillAreaStyle

import { IfcFillStyleSelect, IfcLabel } from '../types'
import { IfcPresentationStyle } from './'

/** An IfcFillAreaStyle provides the style table for presentation information assigned to annotation fill areas or surfaces for hatching and tiling.
 *
 * The IfcFillAreaStyle defines hatches as model hatches, that is, the distance between hatch lines, or the curve patterns of hatch lines are given in model space dimensions (that have to be scaled using the target plot scale).
 *
 * The IfcFillAreaStyle allows for the following combinations of defining the style of hatching and tiling:Measures given to a hatch or tile pattern are given in global drawing length units
 *
 * The measure values for hatch or tile pattern apply to the model space with a target plot scale provided for the correct appearance in the default plot scale.
 *
 * For different scale and projection dependent fill area styles a different instance of IfcFillAreaStyle needs to be used by IfcPresentationStyleAssignment for different IfcGeometricRepresentationSubContext dependent representations
 *
 * An IfcFillAreaStyle can be assigned to IfcFillArea via the IfcPresentationStyleAssignment through an intermediate IfcStyledItem or subtype IfcAnnotationFillAreaOccurrence.
 */
 class IfcFillAreaStyle extends IfcPresentationStyle {
    constructor(Name:IfcLabel, FillStyles:Array<IfcFillStyleSelect>) {
        super(Name)
        this.FillStyles = FillStyles
    }
    /** The set of fill area styles to use in presenting visible curve segments, annotation fill areas or surfaces.
    */
    FillStyles: Array<IfcFillStyleSelect>
}

export default IfcFillAreaStyle