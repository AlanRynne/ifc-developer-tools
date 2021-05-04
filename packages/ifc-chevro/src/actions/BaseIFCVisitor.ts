import { IfcParser } from "../ifc";

export const parserInstance = new IfcParser();
export const BaseIFCVisitor = parserInstance.getBaseCstVisitorConstructorWithDefaults();
