import { readFile } from "node:fs/promises"
import path from "node:path"

const privacyFilePath = path.resolve(
  process.cwd(),
  "../LightMind/privacy/index.html",
)

export async function GET() {
  const html = await readFile(privacyFilePath, "utf8")
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  })
}
