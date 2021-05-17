// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyDependencyRelationship

import { IfcProperty } from './'
import { IfcLabel, IfcText } from '../types'

/** An IfcPropertyDependencyRelationship describes an identified dependency between the value of one property and that of another
 *
 * Use DefinitionWhilst the IfcPropertyDependencyRelationship may be used to describe the dependency, and it may do so in terms of the expression of how the dependency operates, it is not possible through the current IFC model for the value of the related property to be actually derived from the value of the relating property.
 *
 * The determination of value according to the dependency is required to be performed by an application that can then use the Expression attribute to flag the form of the dependency.
 */
 class IfcPropertyDependencyRelationship  {
    constructor(DependingProperty:IfcProperty, DependantProperty:IfcProperty, Name:IfcLabel, Description:IfcText, Expression:IfcText) {

        this.DependingProperty = DependingProperty
        this.DependantProperty = DependantProperty
        this.Name = Name
        this.Description = Description
        this.Expression = Expression
    }
    /** The property on which the relationship depends.
    */
    DependingProperty: IfcProperty
    /** The dependant property.
    */
    DependantProperty: IfcProperty
    /** undefined
    */
    Name?: IfcLabel
    /** undefined
    */
    Description?: IfcText
    /** Expression that further describes the nature of the dependency relation.
    */
    Expression?: IfcText
}

export default IfcPropertyDependencyRelationship