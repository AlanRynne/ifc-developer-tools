// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPresentationStyle

import { IfcLabel } from '../types'

/** The IfcPresentationStyle is an abstract generalization of style table for presentation information assigned to geometric representation items.
 *
 * It includes styles for curves, areas, surfaces, and text.
 *
 * Style information may include colour, hatching, rendering, and text fonts
 *
 * The different styles may include length measures (directly as a length measure with infered unit, or indirectly as a ratio in relation to another length measure).
 *
 * They may apply to curve pattern, hatch line distances, text spacing and font sizes.
 *
 * The attribute ModelOrDraughting determines whether those length measures are provided as model or draughting measures
 *
 * Each subtype of IfcPresentationStyle is assigned to the IfcGeometricRepresentationItem's through an intermediate IfcStyledItem.
 */
abstract class IfcPresentationStyle  {
    constructor(Name:IfcLabel) {

        this.Name = Name
    }
    /** Name of the presentation style.
    */
    Name?: IfcLabel
}

export default IfcPresentationStyle