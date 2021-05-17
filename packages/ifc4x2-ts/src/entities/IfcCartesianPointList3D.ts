// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCartesianPointList3D

import { IfcLengthMeasure, IfcLabel } from '../types'
import { IfcCartesianPointList } from './'

/** The IfcCartesianPointList3D defines an ordered collection of three-dimentional Cartesian points.
 *
 * Each Cartesian point is provided as an three-dimensional point by a fixed list of three coordinates.
 *
 * The attribute CoordList is a two-dimensional list, where
 */
 class IfcCartesianPointList3D extends IfcCartesianPointList {
    constructor(CoordList:Array<Array<IfcLengthMeasure>>, TagList:Array<IfcLabel>) {
        super()
        this.CoordList = CoordList
        this.TagList = TagList
    }
    /** Two-dimensional list of Cartesian points provided by three coordinates.
    */
    CoordList: Array<Array<IfcLengthMeasure>>
    /** List of tags corresponding to each point that may be used to identify a basis curve according to the Tag attribute at IfcOffsetCurveByDistances or IfcAlignmentCurve.
    */
    TagList?: Array<IfcLabel>
}

export default IfcCartesianPointList3D