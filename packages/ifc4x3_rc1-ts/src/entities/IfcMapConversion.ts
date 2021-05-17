// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMapConversion

import { IfcLengthMeasure, IfcReal, IfcCoordinateReferenceSystemSelect } from '../types'
import { IfcCoordinateReferenceSystem, IfcCoordinateOperation } from './'

/** The map conversion deals with transforming the local engineering coordinate system, often called world coordinate system, into the coordinate reference system of the underlying map
 *
 * The map conversion allows to convert the local origin of the local engineering coordinate system to its place within a map (easting, northing, orthogonal height) and to rotate the x-axis of the local engineering coordinate system within the horizontal (easting/westing) plane of the map
 *
 * The scale factor can be used when the length unit for the 3 axes of the map coordinate system are not identical with the length unit established for this project (see IfcProject
 *
 * UnitsInContext), if omitted, the scale factor 1.0 is assumed.
 */
 class IfcMapConversion extends IfcCoordinateOperation {
    constructor(SourceCRS:IfcCoordinateReferenceSystemSelect, TargetCRS:IfcCoordinateReferenceSystem, Eastings:IfcLengthMeasure, Northings:IfcLengthMeasure, OrthogonalHeight:IfcLengthMeasure, XAxisAbscissa:IfcReal, XAxisOrdinate:IfcReal, Scale:IfcReal) {
        super(SourceCRS, TargetCRS)
        this.Eastings = Eastings
        this.Northings = Northings
        this.OrthogonalHeight = OrthogonalHeight
        this.XAxisAbscissa = XAxisAbscissa
        this.XAxisOrdinate = XAxisOrdinate
        this.Scale = Scale
    }
    /** Specifies the location along the easting of the coordinate system of the target map coordinate reference system.
     * for right-handed Cartesian coordinate systems this would establish the location along the x axis.
    */
    Eastings: IfcLengthMeasure
    /** Specifies the location along the northing of the coordinate system of the target map coordinate reference system.
     * for right-handed Cartesian coordinate systems this would establish the location along the y axis
    */
    Northings: IfcLengthMeasure
    /** Orthogonal height relativ to the vertical datum specified.
     * for right-handed Cartesian coordinate systems this would establish the location along the z axis
    */
    OrthogonalHeight: IfcLengthMeasure
    /** Specifies the value along the easing axis of the end point of a vector indicating the position of the local x axis of the engineering coordinate reference system.
     * 1 for right-handed Cartesian coordinate systems this would establish the location along the x axis 2 together with the XAxisOrdinate it provides the direction of the local x axis within the horizontal plane of the map coordinate system
    */
    XAxisAbscissa?: IfcReal
    /** Specifies the value along the northing axis of the end point of a vector indicating the position of the local x axis of the engineering coordinate reference system.
     * 1 for right-handed Cartesian coordinate systems this would establish the location along the y axis XAxisAbscissa it provides the direction of the local x axis within the horizontal plane of the map coordinate system.
    */
    XAxisOrdinate?: IfcReal
    /** Scale to be used, when the units of the CRS are not identical to the units of the engineering coordinate system.
     * If omited, the value of 1.0 is assumed.
    */
    Scale?: IfcReal
}

export default IfcMapConversion