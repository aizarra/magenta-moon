// src/pages/api/test.ts
import type { APIRoute } from "astro";

export const get: APIRoute = async ({ request }) => {
  return new Response("Test API route is working", { status: 200 });
};
