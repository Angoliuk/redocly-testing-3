import Script from "next/script"

export default function Page() {
  return (
    <>
      {/* Redoc renders the OpenAPI spec bundled to /openapi.yaml at build time */}
      <div
        // @ts-expect-error -- redoc custom element
        dangerouslySetInnerHTML={{ __html: '<redoc spec-url="/openapi.yaml"></redoc>' }}
      />
      <Script
        src="https://cdn.redocly.com/redoc/latest/bundles/redoc.standalone.js"
        strategy="afterInteractive"
      />
    </>
  )
}
