// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProjectedCRS

import { IfcIdentifier, IfcLabel, IfcText } from '../types'
import { IfcNamedUnit, IfcCoordinateReferenceSystem } from './'

/** IfcProjectedCRS is a coordinate reference system of the map to which the map translation of the local engineering coordinate system of the construction or facility engineering project relates.
 *
 * The MapProjection and MapZone attributes uniquely identify the projection to the underlying geographic coordinate reference system, provided that they are well-known in the receiving application.
 *
 * The projected coordinate reference system is assumed to be a 2D or 3D right-handed Cartesian coordinate system, the optional MapUnit attribute can be used determine the length unit used by the map
 *
 * The unambiguous identifier by which the coordinate reference system is know, is stored in the inherited Name attribute.
 *
 * Well defined identifiers include the map projection and also the map zone information.
 *
 * In these cases the MapProjection and the MapZone attributes can be omitted.
 */
 class IfcProjectedCRS extends IfcCoordinateReferenceSystem {
    constructor(Name:IfcLabel, Description:IfcText, GeodeticDatum:IfcIdentifier, VerticalDatum:IfcIdentifier, MapProjection:IfcIdentifier, MapZone:IfcIdentifier, MapUnit:IfcNamedUnit) {
        super(Name, Description, GeodeticDatum, VerticalDatum)
        this.MapProjection = MapProjection
        this.MapZone = MapZone
        this.MapUnit = MapUnit
    }
    /** Name by which the map projection is identified.
     * EXAMPLE map projects include: UTM Gaus-Krueger
    */
    MapProjection?: IfcIdentifier
    /** Name by which the map zone, relating to the MapProjection, is identified.
     * EXAMPLE for UTM, the zone number, like 32 for UTM32 for Gaus-Krueger, the zones of longitudinal width, like 3'
    */
    MapZone?: IfcIdentifier
    /** Unit of the coordinate axes composing the map coordinate system.
     * Only length measures are in scope and all two or three axes of the map coordinate system shall have the same length unit.
    */
    MapUnit?: IfcNamedUnit
}

export default IfcProjectedCRS