const fs = require('fs');

function check(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = dir + '/' + f;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'produk') check(full);
    } else if (f.endsWith('.html') || f.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((l, i) => {
        if (l.includes('icon') && l.includes('link')) {
          console.log(`${full}:${i+1}: ${l.trim()}`);
        }
      });
    }
  });
}

check('.');

