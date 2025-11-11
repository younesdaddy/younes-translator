module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/check-keys.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
function handler(req, res) {
    return res.status(200).json({
        NEXT_PUBLIC_SUPABASE_URL: !!("TURBOPACK compile-time value", "https://hbcbltwnqqzkuhzdzvml.supabase.co"),
        NEXT_PUBLIC_SUPABASE_ANON_KEY: !!("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiY2JsdHducXF6a3VoemR6dm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NDI2NDcsImV4cCI6MjA3ODIxODY0N30._wCtxeq_SapmdquvR2pNjmk_ZC6IM07fY_-VZ7rEY0s"),
        SUPABASE_SERVICE_ROLE_KEY: !!process.env.SUPABASE_SERVICE_ROLE_KEY
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6257edb2._.js.map