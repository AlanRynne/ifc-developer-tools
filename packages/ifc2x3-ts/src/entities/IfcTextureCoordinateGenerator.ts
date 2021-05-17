// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextureCoordinateGenerator

import { IfcLabel, IfcSimpleValue } from '../types'
import { IfcTextureCoordinate } from './'

/** The IfcTextureCoordinateGenerator describes a procedurally defined mapping function with input parameter to map 2D texture coordinates to 3D geometry vertices.
 *
 * The allowable Mode values and input Parameter need to be agreed upon in view definitions and implementer agreements.
 */
 class IfcTextureCoordinateGenerator extends IfcTextureCoordinate {
    constructor(Mode:IfcLabel, Parameter:Array<IfcSimpleValue>) {
        super()
        this.Mode = Mode
        this.Parameter = Parameter
    }
    /** The Mode attribute describes the algorithm used to compute texture coordinates.
     * The applicable values for the Mode attribute are determined by view definitions or implementer agreements.
     * It is recommended to use the modes described in ISO/IES 19775-1.2:2008 X3D Architecture and base components Edition 2, Part 1.
     * See 18.4.8 TextureCoordinateGenerator for recommended values.
    */
    Mode: IfcLabel
    /** The parameters used as arguments by the function as specified by Mode.
     * IFC4 CHANGE : Data type restricted to REAL.
    */
    Parameter: Array<IfcSimpleValue>
}

export default IfcTextureCoordinateGenerator