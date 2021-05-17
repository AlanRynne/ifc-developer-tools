// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFillAreaStyleTiles

import { IfcOneDirectionRepeatFactor, IfcGeometricRepresentationItem } from './'
import { IfcFillAreaStyleTileShapeSelect, IfcPositiveRatioMeasure } from '../types'

/** The IfcFillAreaStyleTiles defines the filling of an IfcAnnotationFillArea by recurring patterns of styled two dimensional geometry, called a tile.
 *
 * The recurrence pattern is determined by two vectors, that multiply the tile in regular form
 *
 * The two vectors act as a two dimensional repeat factor that determins eight new positions for the tiles.
 */
 class IfcFillAreaStyleTiles extends IfcGeometricRepresentationItem {
    constructor(TilingPattern:IfcOneDirectionRepeatFactor, Tiles:Array<IfcFillAreaStyleTileShapeSelect>, TilingScale:IfcPositiveRatioMeasure) {
        super()
        this.TilingPattern = TilingPattern
        this.Tiles = Tiles
        this.TilingScale = TilingScale
    }
    /** A two direction repeat factor defining the shape and relative positioning of the tiles.
     * IFC4 CHANGE The attribute type has changed to directly reference two IfcVector's.
    */
    TilingPattern: IfcOneDirectionRepeatFactor
    /** A set of constituents of the tile being a styled item that is used as the annotation symbol for tiling the filled area.
     * IFC4 CHANGE The data type has been changed to IfcStyledItem.
     * Only IfcStyleItem's that refer to a compatible geometric representation item and presentation style shall be used.
    */
    Tiles: Array<IfcFillAreaStyleTileShapeSelect>
    /** The scale factor applied to each tile as it is placed in the annotation fill area.
    */
    TilingScale: IfcPositiveRatioMeasure
}

export default IfcFillAreaStyleTiles