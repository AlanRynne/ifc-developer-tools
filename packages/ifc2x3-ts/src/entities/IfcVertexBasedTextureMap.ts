// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcVertexBasedTextureMap

import { IfcTextureVertex, IfcCartesianPoint } from './'

/**  */
 class IfcVertexBasedTextureMap  {
    constructor(TextureVertices:Array<IfcTextureVertex>, TexturePoints:Array<IfcCartesianPoint>) {

        this.TextureVertices = TextureVertices
        this.TexturePoints = TexturePoints
    }

    TextureVertices: Array<IfcTextureVertex>

    TexturePoints: Array<IfcCartesianPoint>
}

export default IfcVertexBasedTextureMap