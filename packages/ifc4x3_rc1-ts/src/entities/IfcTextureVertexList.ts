// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextureVertexList

import { IfcParameterValue } from '../types'
import { IfcPresentationItem } from './'

/** The IfcTextureVertexList defines an ordered collection of texture vertices.
 *
 * Each texture vertex is a two-dimensional vertex provided by a fixed list of two texture coordinates.
 *
 * The attribute TexCoordsList is a two-dimensional list, where
 */
 class IfcTextureVertexList extends IfcPresentationItem {
    constructor(TexCoordsList:Array<Array<IfcParameterValue>>) {
        super()
        this.TexCoordsList = TexCoordsList
    }
    /** List of texture vertices defined by S-coordinate and T-coordinate.
    */
    TexCoordsList: Array<Array<IfcParameterValue>>
}

export default IfcTextureVertexList