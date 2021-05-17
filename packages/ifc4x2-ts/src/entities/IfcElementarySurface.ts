// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElementarySurface

import { IfcAxis2Placement3D, IfcSurface } from './'

/** An IfcElementarySurface in the common supertype of analytical surfaces.
 */
abstract class IfcElementarySurface extends IfcSurface {
    constructor(Position:IfcAxis2Placement3D) {
        super()
        this.Position = Position
    }
    /** The position and orientation of the surface.
     * This attribute is used in the definition of the parameterization of the surface.
    */
    Position: IfcAxis2Placement3D
}

export default IfcElementarySurface