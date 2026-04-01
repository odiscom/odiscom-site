export default function sitemap() {
  const baseUrl = "https://www.odiscom.com";

  const routes = [
    "",
    "/services",
    "/projects",
    "/clients",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}