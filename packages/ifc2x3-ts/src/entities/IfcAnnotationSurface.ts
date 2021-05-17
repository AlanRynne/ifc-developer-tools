// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAnnotationSurface

import { IfcGeometricRepresentationItem, IfcTextureCoordinate } from './'

/**  */
 class IfcAnnotationSurface extends IfcGeometricRepresentationItem {
    constructor(Item:IfcGeometricRepresentationItem, TextureCoordinates:IfcTextureCoordinate) {
        super()
        this.Item = Item
        this.TextureCoordinates = TextureCoordinates
    }

    Item: IfcGeometricRepresentationItem

    TextureCoordinates?: IfcTextureCoordinate
}

export default IfcAnnotationSurface