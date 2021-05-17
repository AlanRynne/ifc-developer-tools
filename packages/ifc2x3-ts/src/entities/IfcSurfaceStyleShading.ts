// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceStyleShading

import { IfcColourRgb } from './'

/** The IfcSurfaceStyleShading allows for colour information and transparency used for shading and simple rendering.
 *
 * The surface colour is used for colouring or simple shading of the assigned surfaces and the transparency for identifying translucency, where 0.0 is completely opaque, and 1.0 is completely transparent.
 */
 class IfcSurfaceStyleShading  {
    constructor(SurfaceColour:IfcColourRgb) {

        this.SurfaceColour = SurfaceColour
    }
    /** The colour used to render the surface.
     * The surface colour for visualisation is defined by specifying the intensity of red, green and blue.
    */
    SurfaceColour: IfcColourRgb
}

export default IfcSurfaceStyleShading