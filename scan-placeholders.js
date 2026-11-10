const fs = require('fs');

function checkPlaceholders(dir) {
  fs.readdirSync(dir).forEach(f => {
    const full = dir + '/' + f;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.git' && f !== 'produk') checkPlaceholders(full);
    } else if (f.endsWith('.html') || f.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/placeholder=["'][^"']+["']/gi);
      if (matches) {
        console.log(full, matches);
      }
    }
  });
}

checkPlaceholders('.');

