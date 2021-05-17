// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyDependencyRelationship

import { IfcProperty, IfcResourceLevelRelationship } from './'
import { IfcText, IfcLabel } from '../types'

/** An IfcPropertyDependencyRelationship describes an identified dependency between the value of one property and that of another
 *
 * Use DefinitionWhilst the IfcPropertyDependencyRelationship may be used to describe the dependency, and it may do so in terms of the expression of how the dependency operates, it is not possible through the current IFC model for the value of the related property to be actually derived from the value of the relating property.
 *
 * The determination of value according to the dependency is required to be performed by an application that can then use the Expression attribute to flag the form of the dependency.
 */
 class IfcPropertyDependencyRelationship extends IfcResourceLevelRelationship {
    constructor(Name:IfcLabel, Description:IfcText, DependingProperty:IfcProperty, DependantProperty:IfcProperty, Expression:IfcText) {
        super(Name, Description)
        this.DependingProperty = DependingProperty
        this.DependantProperty = DependantProperty
        this.Expression = Expression
    }
    /** The property on which the relationship depends.
    */
    DependingProperty: IfcProperty
    /** The dependant property.
    */
    DependantProperty: IfcProperty
    /** Expression that further describes the nature of the dependency relation.
    */
    Expression?: IfcText
}

export default IfcPropertyDependencyRelationship