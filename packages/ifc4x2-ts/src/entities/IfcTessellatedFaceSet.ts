// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTessellatedFaceSet

import { IfcCartesianPointList3D, IfcTessellatedItem } from './'

/** The IfcTessellatedFaceSet is a boundary representation topological model limited to planar faces and straight edges.
 *
 * It may represent an approximation of an analytical surface or solid that may be provided in addition to its tessellation as a separate shape representation.
 *
 * The IfcTessellatedFaceSet provides a compact data representation of an connected face set using indices into ordered lists of vertices, normals, colours, and texture maps
 *
 * The IfcTessellatedFaceSet is an abstract supertype of tesselated face sets each imposing specific constraints on face generation for tessellation, such as triangulation (with or without strip and fans), or quadrilaterals, or polygonal faces (with or without inner loops)
 *
 * The following attributes apply to all subtypes:Each face of the tessellated face set shall have:
 */
abstract class IfcTessellatedFaceSet extends IfcTessellatedItem {
    constructor(Coordinates:IfcCartesianPointList3D) {
        super()
        this.Coordinates = Coordinates
    }
    /** An ordered list of Cartesian points used by the coordinate index defined at the subtypes of IfcTessellatedFaceSet.
    */
    Coordinates: IfcCartesianPointList3D
}

export default IfcTessellatedFaceSet