// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSurfaceStyleRendering

import { IfcColourOrFactor, IfcSpecularHighlightSelect, IfcReflectanceMethodEnum, IfcNormalisedRatioMeasure } from '../types'
import { IfcColourRgb, IfcSurfaceStyleShading } from './'

/** IfcSurfaceStyleRendering holds the properties for visualization related to a particular surface side style.
 *
 * It allows rendering properties to be defined by:
 */
 class IfcSurfaceStyleRendering extends IfcSurfaceStyleShading {
    constructor(SurfaceColour:IfcColourRgb, Transparency:IfcNormalisedRatioMeasure, DiffuseColour:IfcColourOrFactor, TransmissionColour:IfcColourOrFactor, DiffuseTransmissionColour:IfcColourOrFactor, ReflectionColour:IfcColourOrFactor, SpecularColour:IfcColourOrFactor, SpecularHighlight:IfcSpecularHighlightSelect, ReflectanceMethod:IfcReflectanceMethodEnum) {
        super(SurfaceColour, Transparency)
        this.DiffuseColour = DiffuseColour
        this.TransmissionColour = TransmissionColour
        this.DiffuseTransmissionColour = DiffuseTransmissionColour
        this.ReflectionColour = ReflectionColour
        this.SpecularColour = SpecularColour
        this.SpecularHighlight = SpecularHighlight
        this.ReflectanceMethod = ReflectanceMethod
    }
    /** The diffuse part of the reflectance equation can be given as either a colour or a scalar factor.
     * The diffuse colour field reflects all light sources depending on the angle of the surface with respect to the light source.
     * The more directly the surface faces the light, the more diffuse light reflects.
     * The diffuse factor field specifies how much diffuse light from light sources this surface shall reflect.
     * Diffuse light depends on the angle of the surface with respect to the light source.
     * The more directly the surface faces the light, the more diffuse light reflects.
     * The diffuse colour is then defined by surface colour * diffuse factor.
    */
    DiffuseColour?: IfcColourOrFactor
    /** The transmissive part of the reflectance equation can be given as either a colour or a scalar factor.
     * It only applies to materials which Transparency field is greater than zero.
     * The transmissive colour field specifies the colour that passes through a transparant material (like the colour that shines through a glass).
     * The transmissive factor defines the transmissive part, the transmissive colour is then defined by surface colour * transmissive factor.
    */
    TransmissionColour?: IfcColourOrFactor
    /** The diffuse transmission part of the reflectance equation can be given as either a colour or a scalar factor.
     * It only applies to materials whose Transparency field is greater than zero.
     * The diffuse transmission colour specifies how much diffuse light is reflected at the opposite side of the material surface.
     * The diffuse transmission factor field specifies how much diffuse light from light sources this surface shall reflect on the opposite side of the material surface.
     * The diffuse transmissive colour is then defined by surface colour * diffuse transmissive factor.
    */
    DiffuseTransmissionColour?: IfcColourOrFactor
    /** The reflection (or mirror) part of the reflectance equation can be given as either a colour or a scalar factor.
     * Applies to "glass" and "mirror" reflection models.
     * The reflection colour specifies the contribution made by light from the mirror direction, i.e. light being reflected from the surface.
     * The reflection factor specifies the amount of contribution made by light from the mirror direction.
     * The reflection colour is then defined by surface colour * reflection factor.
    */
    ReflectionColour?: IfcColourOrFactor
    /** The specular part of the reflectance equation can be given as either a colour or a scalar factor.
     * The specular colour determine the specular highlights (e.g., the shiny spots on an apple).
     * When the angle from the light to the surface is close to the angle from the surface to the viewer, the specular colour is added to the diffuse and ambient colour calculations.
     * The specular factor defines the specular part, the specular colour is then defined by surface colour * specular factor.
    */
    SpecularColour?: IfcColourOrFactor
    /** The exponent or roughness part of the specular reflectance.
    */
    SpecularHighlight?: IfcSpecularHighlightSelect
    /** Identifies the predefined types of reflectance method from which the method required may be set.
    */
    ReflectanceMethod: IfcReflectanceMethodEnum
}

export default IfcSurfaceStyleRendering