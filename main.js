const fs = require('node:fs');
const path = require('node:path');

const monologue = `Captain, I remember your grandfather. He chained me beneath this lake with a bell. It still rings.

At dawn, I open the dam. The valley floods; every bell in my drowned kingdom rings again. I promised them that. Promises are the one thing the dead still expect on time.

No, don't draw your sword. That scabbard is split. I can't have you bleeding on the map; the ink runs.

Three centuries to plan, and the council wants another meeting. Kneel if you like. I had the throne lowered. It saves us both the stairs.

You may ring the bell yourself, Captain. Your grandfather never got the chance.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), monologue, 'utf8');
