const fs = require('node:fs');
const path = require('node:path');

const monologue = `I am Veyr, last king of the drowned province. Your grandfathers chained me beneath this lake; I learned their names while the water learned theirs.

At dawn, the dam opens. The valley will drown, and every bell in my kingdom will ring again—this time for me. No, captain, don’t reach for that sword. The scabbard’s cracked; you’ll cut your hand, and I’ve no healer on duty.

You ask why I waited three centuries? Roads wash out. Councils multiply. One must keep the ledgers.

Come, then. Kneel—or stand. I’ve had the throne lowered. The view is much the same.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), monologue, 'utf8');
