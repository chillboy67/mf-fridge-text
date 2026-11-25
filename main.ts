import { mkdirSync, writeFileSync } from 'node:fs';
// The entry is a single line, 140 chars max: a smart fridge texting its owner at 3am.
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "It's 3am. I'm the only one in this house still awake, still cold, and still pretending the leftovers are a meal plan.");
