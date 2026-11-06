const fs = require('fs');

const b64 = fs.readFileSync('public/favicon_kira_dev_fontnoir.png').toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <clipPath id="rounded">
      <rect width="512" height="512" rx="96" />
    </clipPath>
  </defs>
  <rect width="512" height="512" rx="96" fill="#09090b" />
  <image href="data:image/png;base64,${b64}" width="512" height="512" clip-path="url(#rounded)" />
</svg>`;

fs.writeFileSync('public/favicon.svg', svg);
fs.copyFileSync('public/favicon_kira_dev_fontnoir.png', 'public/favicon.ico');
console.log('Favicon generation success!');
