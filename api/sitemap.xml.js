const EXTERNAL_DATA_URL = 'http://www.sitemaps.org/schemas/sitemap/0.9';

function generateSiteMap(posts) {
  return `<urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
  <loc>https://vintageriches.co.za/</loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>1.00</priority>
  </url>
  <url>
  <loc>https://vintageriches.co.za/guide</loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://vintageriches.co.za/contact</loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-watches
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-pens
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-jewellery
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-guitars
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-motorbikes
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-luxury-goods
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-cameras
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-bicycles
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-books-and-comics
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-trading-cards
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://vintageriches.co.za/projects/guitars</loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>
  https://vintageriches.co.za/projects/sell-your-cars
  </loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://vintageriches.co.za/projects/watches</loc>
  <lastmod>2023-10-11T08:41:01+00:00</lastmod>
  <priority>0.64</priority>
  </url>
  ${posts
    .map(({ id }) => {
      return `
    <url>
        <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
    </url>
  `;
    })
    .join('')}
  </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;