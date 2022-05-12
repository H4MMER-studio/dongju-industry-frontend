const fs = require('fs');

const generatedSitemap = `
User-agent: *
Disallow:

Sitemap: http://dongjuind.co.kr/sitemap.xml
`;

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8');
