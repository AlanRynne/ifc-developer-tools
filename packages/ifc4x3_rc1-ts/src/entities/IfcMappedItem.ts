// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMappedItem

import { IfcRepresentationMap, IfcCartesianTransformationOperator, IfcRepresentationItem } from './'

/** The IfcMappedItem is the inserted instance of a source definition (to be compared with a block / shared cell / macro definition).
 *
 * The instance is inserted by applying a Cartesian transformation operator as the MappingTarget
 *
 * Informal Propositions:
 */
 class IfcMappedItem extends IfcRepresentationItem {
    constructor(MappingSource:IfcRepresentationMap, MappingTarget:IfcCartesianTransformationOperator) {
        super()
        this.MappingSource = MappingSource
        this.MappingTarget = MappingTarget
    }
    /** A representation map that is the source of the mapped item.
     * It can be seen as a block (or cell or marco) definition.
    */
    MappingSource: IfcRepresentationMap
    /** A representation item that is the target onto which the mapping source is mapped.
     * It is constraint to be a Cartesian transformation operator.
    */
    MappingTarget: IfcCartesianTransformationOperator
}

export default IfcMappedItem