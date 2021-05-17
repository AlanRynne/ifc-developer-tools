// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSectionedSpine

import { IfcCompositeCurve, IfcProfileDef, IfcAxis2Placement3D, IfcGeometricRepresentationItem } from './'

/** An IfcSectionedSpine is a representation of the shape of a three dimensional object composed by a number of planar cross sections, and a spine curve.
 *
 * The shape is defined between the first element of cross sections and the last element of the cross sections.
 *
 * A sectioned spine may be used to represent a surface or a solid but the interpolation of the shape between the cross sections is not defined
 *
 * All cross sections have to define areas by a closed profile to allow for the representation of a solid.
 *
 * All cross sections have to define curves by an open or closed profile to allow for the representation of a surface.
 *
 * The cross sections are defined by subtypes of IfcProfileDef, where the consecutive profiles may be derived by a transformation of the start profile or the previous consecutive profile
 *
 * The spine curve shall be of type IfcCompositeCurve, each of its segments represented by IfcCompositeCurveSegment shall correspond to the part between exactly two consecutive cross-sections
 *
 * Figure 353 illustrates an example of an IfcSectionedSpine
 *
 * Figure 354 illustrates the final result of the IfcSectionedSpine.
 *
 * The body (shown transparently) is not fully defined by the exchange definition
 *
 * Informal Propositions:
 */
 class IfcSectionedSpine extends IfcGeometricRepresentationItem {
    constructor(SpineCurve:IfcCompositeCurve, CrossSections:Array<IfcProfileDef>, CrossSectionPositions:Array<IfcAxis2Placement3D>) {
        super()
        this.SpineCurve = SpineCurve
        this.CrossSections = CrossSections
        this.CrossSectionPositions = CrossSectionPositions
    }
    /** A single composite curve, that defines the spine curve.
     * Each of the composite curve segments correspond to the part between two cross-sections.
    */
    SpineCurve: IfcCompositeCurve
    /** A list of at least two cross sections, each defined within the xy plane of the position coordinate system of the cross section.
     * The position coordinate system is given by the corresponding list CrossSectionPositions.
    */
    CrossSections: Array<IfcProfileDef>
    /** Position coordinate systems for the cross sections that form the sectioned spine.
     * The profiles defining the cross sections are positioned within the xy plane of the corresponding position coordinate system.
    */
    CrossSectionPositions: Array<IfcAxis2Placement3D>
}

export default IfcSectionedSpine