// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceStyleShading

import { IfcColourRgb, IfcPresentationItem } from './'
import { IfcNormalisedRatioMeasure } from '../types'

/** The IfcSurfaceStyleShading allows for colour information and transparency used for shading and simple rendering.
 *
 * The surface colour is used for colouring or simple shading of the assigned surfaces and the transparency for identifying translucency, where 0.0 is completely opaque, and 1.0 is completely transparent.
 */
 class IfcSurfaceStyleShading extends IfcPresentationItem {
    constructor(SurfaceColour:IfcColourRgb, Transparency:IfcNormalisedRatioMeasure) {
        super()
        this.SurfaceColour = SurfaceColour
        this.Transparency = Transparency
    }
    /** The colour used to render the surface.
     * The surface colour for visualisation is defined by specifying the intensity of red, green and blue.
    */
    SurfaceColour: IfcColourRgb
    /** The transparency field specifies how "clear" an object is, with 1.0 being completely transparent, and 0.0 completely opaque.
     * If not given, the value 0.0 (opaque) is assumed.
     * The definition of 1 being transparent and 0 being opaque is the opposite of the definition in alpha channels, where 0.0 is completely transparent and 1.0 is completely opaque.
     * This definition is due to upward compatibility to previous versions of this standard in different to the definition in IfcIndexedColourMap.
    */
    Transparency?: IfcNormalisedRatioMeasure
}

export default IfcSurfaceStyleShading