// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceStyleRefraction

import { IfcReal } from '../types'

/** IfcSurfaceStyleRefraction extends the surface style lighting, or the surface style rendering definition for properties for calculation of physically exact illuminance by adding seldomly used properties.
 *
 * Currently this includes the refraction index (by which the light ray refracts when passing through a prism) and the dispersion factor (or Abbe constant) which takes into account the wavelength dependency of the refraction.
 */
 class IfcSurfaceStyleRefraction  {
    constructor(RefractionIndex:IfcReal, DispersionFactor:IfcReal) {

        this.RefractionIndex = RefractionIndex
        this.DispersionFactor = DispersionFactor
    }
    /** The index of refraction for all wave lengths of light.
     * The refraction index is the ratio between the speed of light in a vacuum and the speed of light in the medium.
     * E.g. glass has a refraction index of 1.5, whereas water has an index of 1.33
    */
    RefractionIndex?: IfcReal
    /** The Abbe constant given as a fixed ratio between the refractive indices of the material at different wavelengths.
     * A low Abbe number means a high dispersive power.
     * In general this translates to a greater angular spread of the emergent spectrum.
    */
    DispersionFactor?: IfcReal
}

export default IfcSurfaceStyleRefraction