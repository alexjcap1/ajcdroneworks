export async function GET() {
  const baseUrl = "https://ajcdroneworks.com";

  const staticPaths = ["", "portfolio", "contact", "services"];

  const urls = staticPaths
    .map((path) => {
      return `
        <url>
          <loc>${baseUrl}/${path}</loc>
          <priority>${path === "" ? "1.0" : "0.8"}</priority>
        </url>
      `;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new Response(sitemap.trim(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
