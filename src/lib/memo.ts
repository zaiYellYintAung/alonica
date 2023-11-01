const websiteUrl = process.env.WEBSITE_URL || "https://www.youtube.com";
const backendUrl = process.env.BACKEND_URL || "http://127.0.0.1:8000";
const token = process.env.API_TOKEN || "YOUR_CUSTOM_TOKEN";

export function getWebsiteUrl(route: string) {
  return `${websiteUrl}${route}`;
}

export function getBackendUrl(route: string) {
  return `${backendUrl}${route}`;
}

export const tokenHeader = {
  headers: { Authorization: `Bearer ${token}` },
};
