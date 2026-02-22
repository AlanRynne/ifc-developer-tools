/** Smallest valid IFC file — minimal header + empty data section. */
export const MINIMAL_IFC = `ISO-10303-21;
HEADER;
FILE_DESCRIPTION(('Test'),'2;1');
FILE_SCHEMA(('IFC2X3'));
ENDSEC;
DATA;
ENDSEC;
END-ISO-10303-21;`

/**
 * Full-featured IFC file — copy of TestIFC-001.ifc.
 * Covers all parameter types: JSON strings, AnyStrings, numbers (integer,
 * decimal, scientific), $, *, enum values, Id refs, nested entities,
 * nested collections, and block comments at various positions.
 */
export const FULL_IFC = `ISO-10303-21;

HEADER;

/** Example: some 224324,2311 */

FILE_DESCRIPTION((/* testcomment */'ViewDefinition [CoordinationView]'),'2;1');
FILE_SCHEMA(('IFC2X3'));

ENDSEC;

DATA;

#1=IFCSTRINGTEST("Test",'Name',"",''); /* Some inline comment */
#2=IFCNUMBERTEST(-1,1.1,-1.1E35,1.1E-35,-1.E45,1.E-45);

/***
Some multiline comment
***/

#1245= IFCSHAPEREPRESENTATION(#107,'Body','SweptSolid',(#1239));

#555=IFCNULLTEST($,*);
/* A single line comment */

#3=IFCREFTEST(#1,#23522);

#4=IFCNESTEDENTITYTEST(IFCLABEL("TEST"),$);
#5=IFCENUMVALUETEST(#3,#4,.ENUMVAL.,.ENUMVAL2.);
#6=IFCNESTEDPARENTHESIS((0,0,1,2),(),/* XX */());


ENDSEC;

END-ISO-10303-21;`

/** Valid IFC file with zero data instances. */
export const EMPTY_DATA_IFC = `ISO-10303-21;
HEADER;
FILE_DESCRIPTION(('Empty'),'2;1');
FILE_SCHEMA(('IFC4'));
ENDSEC;
DATA;
ENDSEC;
END-ISO-10303-21;`

/** IFC file with a FILE_NAME header that contains a DateTime value. */
export const FILE_NAME_IFC = `ISO-10303-21;
HEADER;
FILE_NAME('model.ifc','2016-02-04T08:47:55',('Author'),('Org'),'App','System','None');
FILE_SCHEMA(('IFC4'));
ENDSEC;
DATA;
ENDSEC;
END-ISO-10303-21;`

/** IFC file with block comments at various structural positions. */
export const COMMENT_IFC = `ISO-10303-21;
HEADER;
/** Block comment before header instance */
FILE_DESCRIPTION((/* inline comment */ 'Test'),'2;1');
FILE_SCHEMA(('IFC2X3'));
ENDSEC;
DATA;
/* Pre-entity comment */
#1=IFCTEST('Value' /* inline comment inside params */);
ENDSEC;
END-ISO-10303-21;`
