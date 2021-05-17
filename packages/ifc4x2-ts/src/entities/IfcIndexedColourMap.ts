// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcIndexedColourMap

import { IfcTessellatedFaceSet, IfcColourRgbList, IfcPresentationItem } from './'
import { IfcNormalisedRatioMeasure, IfcPositiveInteger } from '../types'

/** The IfcIndexedColourMap provides the assignment of colour information to individual faces.
 *
 * It is used for colouring faces of tessellated face sets.
 *
 * The IfcIndexedColourMap defines an index into an indexed list of colour information.
 *
 * The Colours are a two-dimensional list of colours provided by three RGB values.
 *
 * The ColourIndex attribute corresponds to the CoordIndex of the IfcTessellatedFaceSet defining the corresponding index list of faces.
 *
 * The Opacity attribute provides the alpha channel for all faces of the tessellated face set
 *
 * Figure 396 shows the use of IfcTriangulatedFaceSet with colours per face.
 */
 class IfcIndexedColourMap extends IfcPresentationItem {
    constructor(MappedTo:IfcTessellatedFaceSet, Opacity:IfcNormalisedRatioMeasure, Colours:IfcColourRgbList, ColourIndex:Array<IfcPositiveInteger>) {
        super()
        this.MappedTo = MappedTo
        this.Opacity = Opacity
        this.Colours = Colours
        this.ColourIndex = ColourIndex
    }
    /** Reference to the IfcTessellatedFaceSet to which it applies the colours and alpha channel.
    */
    MappedTo: IfcTessellatedFaceSet
    /** The the opacity value, that applies equaly to all faces of the tessellated face set.
     * 1.0 means opaque, and 0.0 completely transparent.
     * If not provided, 1.0 is assumed (all colours are opque).
     * The definition of the alpha channel component for opacity follows the new definitions in image processing, where 0.0 means full transparency and 1.0 (or 2bit depths -1) means fully opaque.
     * This is contrary to the definition of transparency in IfcSurfaceStyleShading.
    */
    Opacity?: IfcNormalisedRatioMeasure
    /** Indexable list of lists of quadruples, representing RGB colours.
    */
    Colours: IfcColourRgbList
    /** Index into the IfcColourRgbList for each face of the IfcTriangulatedFaceSet.
     * The colour is applied uniformly to the indexed face.
    */
    ColourIndex: Array<IfcPositiveInteger>
}

export default IfcIndexedColourMap