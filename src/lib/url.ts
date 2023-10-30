export function getWebsiteUrl(route: string) {
  return `${process.env.WEBSITE_URL}${route}`;
}

export function getBackendUrl(route: string) {
  return `${process.env.BACKEND_URL}${route}`;
}
