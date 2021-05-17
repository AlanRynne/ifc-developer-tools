// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReference

import { IfcIdentifier, IfcLabel, IfcInteger } from '../types'

/** This entity is used to refer to a value of an attribute on an instance.
 *
 * It may refer to the value of a scalar attribute or a value within a collection-based attribute.
 *
 * Referenced attributes may be direct values, object references, collections, inverse object references, and inverse collections.
 *
 * References may be chained to form a path of object-attribute references.
 */
 class IfcReference  {
    constructor(TypeIdentifier:IfcIdentifier, AttributeIdentifier:IfcIdentifier, InstanceName:IfcLabel, ListPositions:Array<IfcInteger>, InnerReference:IfcReference) {

        this.TypeIdentifier = TypeIdentifier
        this.AttributeIdentifier = AttributeIdentifier
        this.InstanceName = InstanceName
        this.ListPositions = ListPositions
        this.InnerReference = InnerReference
    }
    /** Optional identifier of the entity or type such as 'IfcMaterialLayerSet'.
     * For entity, type, or select-based references within a collection, this resolves the reference to such type.
     * If omitted, the type is assumed to be the same as the declared referencing attribute.
     * EXAMPLE IfcRelAssociatesMaterial
     * RelatingMaterial may be resolved to IfcMaterialLayerSet.
    */
    TypeIdentifier?: IfcIdentifier
    /** Optionally identifies a direct or inverse attribute within an entity such as 'MaterialLayers'.
     * If TypeIdentifier is specified and refers to an entity, the attribute must exist within the referenced entity.
     * A null value indicates a reference to the type or entity itself, such as for indicating that the type of a value must match a specified constraint.
    */
    AttributeIdentifier?: IfcIdentifier
    /** Optionally identifies an instance within a collection according to name.
     * If the instance has an attribute called 'Name', such attribute is used for comparison; otherwise the first STRING-based attribute of the entity is used.
     * EXAMPLE IfcRoot-based entities such as IfcPropertySet use the Name attribute; IfcRepresentation entities use the RepresentationIdentifier attribute.
    */
    InstanceName?: IfcLabel
    /** Optionally identifies an instance within a collection according to position starting at 1.
     * For referencing single-level collections, this attribute contains a single member; for referencing multi-level collections, then this LIST attribute contains multiple members starting from the outer-most index.
    */
    ListPositions?: Array<IfcInteger>
    /** Optional reference to an inner value for ENTITY, SELECT, SET, or LIST attributes.
     * A path may be formed by linking IfcReference instances together.
     * EXAMPLE A material layer thickness may be referenced using several instances: #1=IFCREFERENCE($,'IfcSlab','HasAssociations',#2); #2=IFCREFERENCE($,'IfcMaterialLayerSet','MaterialLayers',#3); #3=IFCREFERENCE('Core','IfcMaterialLayer','LayerThickness',$);
    */
    InnerReference?: IfcReference
}

export default IfcReference