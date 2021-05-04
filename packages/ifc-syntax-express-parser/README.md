# IFC Syntax — Express Parser

Parser for `EXPRESS` files, originally coded to provide type information to the [IFC Syntax VSCode extension](https://github.com/AlanRynne/ifc-syntax), also developed by myself.

It uses Nearley.js parser, and a reverse-engineered grammar, since the `EXPRESS` language has no documentation that I could find.

> _WARNING_: This instructions will be valid once the package is published to `npm`.

## Install

```bash
npm install ifc-syntax-express-parser
```

## Usage

Using it is fairly easy, just create a new `ExpressParser` class instance, and call the `parse()` function with the path of the file as input.

```javascript
import { ExpressParser } from 'ifc-syntax-express-parser';

const filePath = './path/to/your/file.exp';
const expressParser = new ExpressParser();
expressParser.parse(filePath).then((schema: IIfcSchema) => {
  // Do whatever you need with the schema entities.
});
```

## Contributing

Contributions are always welcome! Feel free to open Issues or PRs.
