// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCartesianPointList2D

import { IfcLengthMeasure, IfcLabel } from '../types'
import { IfcCartesianPointList } from './'

/** The IfcCartesianPointList2D defines an ordered collection of two-dimentional Cartesian points.
 *
 * Each Cartesian point is provided as an two-dimensional point by a fixed list of two coordinates.
 *
 * The attribute CoordList is a two-dimensional list, where
 */
 class IfcCartesianPointList2D extends IfcCartesianPointList {
    constructor(CoordList:Array<Array<IfcLengthMeasure>>, TagList:Array<IfcLabel>) {
        super()
        this.CoordList = CoordList
        this.TagList = TagList
    }
    /** Two-dimensional list of Cartesian points provided by two coordinates.
    */
    CoordList: Array<Array<IfcLengthMeasure>>
    /** List of tags corresponding to each point that may be used to identify a basis curve according to the Tag attribute at IfcOffsetCurveByDistances or IfcAlignmentCurve.
    */
    TagList?: Array<IfcLabel>
}

export default IfcCartesianPointList2D