// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConstraint

import { IfcLabel, IfcText, IfcConstraintEnum, IfcActorSelect, IfcDateTime } from '../types'

/** An IfcConstraint is used to define a constraint or limiting value or boundary condition that may be applied to an object or to the value of a property.
 *
 * Constraints may be subdivided into user-defined constraints and system-defined constraints.
 *
 * User-defined constraints are applied by a user and are restricted to high-level definitions such as object properties.
 *
 * System-defined constraints may apply to any object attribute, are typically defined by an application to enforce data validation or parametric behavior, and are intended to be enforced by applications but not to be directly editable by an end-user
 *
 * IfcConstraint may be associated with any subtype of IfcObjectDefinition or IfcPropertyDefinition through the IfcRelAssociatesConstraint relationship to indicate a system-defined constraint, or may be associated with IfcResourceObjectSelect (such as IfcPropertySingleValue) by IfcResourceConstraintRelationship to indicate a user-defined constraint
 *
 * A constraint must have a name applied through the IfcConstraint
 *
 * Name attribute and optionally, a description through IfcConstraint.Description.
 *
 * The grade of the constraint (hard, soft, advisory) must be specified through IfcConstraint
 *
 * ConstraintGrade or IfcConstraint
 *
 * UserDefinedGrade whilst the source, creating actor and time at which the constraint is created may be optionally asserted through IfcConstraint
 *
 * ConstraintSource, IfcConstraint
 *
 * CreatingActor and IfcConstraint
 *
 * CreationTime.A constraint may also have additional external information (such as classification or document information) associated to it by IfcExternalReferenceRelationship, accessible through inverse attribute IfcConstraint
 *
 * HasExternalReferences
 */
abstract class IfcConstraint  {
    constructor(Name:IfcLabel, Description:IfcText, ConstraintGrade:IfcConstraintEnum, ConstraintSource:IfcLabel, CreatingActor:IfcActorSelect, CreationTime:IfcDateTime, UserDefinedGrade:IfcLabel) {

        this.Name = Name
        this.Description = Description
        this.ConstraintGrade = ConstraintGrade
        this.ConstraintSource = ConstraintSource
        this.CreatingActor = CreatingActor
        this.CreationTime = CreationTime
        this.UserDefinedGrade = UserDefinedGrade
    }
    /** A human-readable name to be used for the constraint.
    */
    Name: IfcLabel
    /** A human-readable description that may apply additional information about a constraint.
    */
    Description?: IfcText
    /** Enumeration that qualifies the type of constraint.
    */
    ConstraintGrade: IfcConstraintEnum
    /** Any source material, such as a code or standard, from which the constraint originated.
    */
    ConstraintSource?: IfcLabel
    /** Person and/or organization that has created the constraint.
    */
    CreatingActor?: IfcActorSelect
    /** Time when information specifying the constraint instance was created.
    */
    CreationTime?: IfcDateTime
    /** Allows for specification of user defined grade of the constraint beyond the enumeration values (hard, soft, advisory) provided by ConstraintGrade attribute of type IfcConstraintEnum.
     * When a value is provided for attribute UserDefinedGrade in parallel the attribute ConstraintGrade shall have enumeration value USERDEFINED.
    */
    UserDefinedGrade?: IfcLabel
}

export default IfcConstraint