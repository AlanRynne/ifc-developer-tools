// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceStyle

import { IfcSurfaceSide, IfcSurfaceStyleElementSelect, IfcLabel } from '../types'
import { IfcPresentationStyle } from './'

/** IfcSurfaceStyle is an assignment of one or many surface style elements to a surface, defined by subtypes of IfcSurface, IfcFaceBasedSurfaceModel, IfcShellBasedSurfaceModel, or by subtypes of IfcSolidModel.
 *
 * The positive direction of the surface normal relates to the positive side.
 *
 * In case of solids the outside of the solid is to be taken as positive side.
 */
 class IfcSurfaceStyle extends IfcPresentationStyle {
    constructor(Name:IfcLabel, Side:IfcSurfaceSide, Styles:Array<IfcSurfaceStyleElementSelect>) {
        super(Name)
        this.Side = Side
        this.Styles = Styles
    }
    /** An indication of which side of the surface to apply the style.
    */
    Side: IfcSurfaceSide
    /** A collection of different surface styles.
    */
    Styles: Array<IfcSurfaceStyleElementSelect>
}

export default IfcSurfaceStyle