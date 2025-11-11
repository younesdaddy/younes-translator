module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/google-translate-api-x [external] (google-translate-api-x, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("google-translate-api-x", () => require("google-translate-api-x"));

module.exports = mod;
}),
"[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@supabase/supabase-js", () => require("@supabase/supabase-js"));

module.exports = mod;
}),
"[project]/lib/supabase.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase,
    "supabaseAdmin",
    ()=>supabaseAdmin
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)");
;
const URL = ("TURBOPACK compile-time value", "https://hbcbltwnqqzkuhzdzvml.supabase.co");
const ANON = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiY2JsdHducXF6a3VoemR6dm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NDI2NDcsImV4cCI6MjA3ODIxODY0N30._wCtxeq_SapmdquvR2pNjmk_ZC6IM07fY_-VZ7rEY0s");
const SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__["createClient"])(URL, ANON); // safe for client
const supabaseAdmin = SERVICE ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__["createClient"])(URL, SERVICE) : null; // server-only
}),
"[project]/pages/api/translate.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$google$2d$translate$2d$api$2d$x__$5b$external$5d$__$28$google$2d$translate$2d$api$2d$x$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/google-translate-api-x [external] (google-translate-api-x, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [api] (ecmascript)");
;
;
// normalize function for DB matching
function normalize(s = "") {
    return s.trim().toLowerCase().replace(/\s+/g, ' ');
}
async function handler(req, res) {
    try {
        const { text, target } = req.query;
        if (!text || !target) return res.status(400).json({
            translation: null,
            error: "Missing text or target"
        });
        const normalizedText = normalize(text);
        // Check approvedcorrection first
        const { data: approved, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from("approvedcorrection").select("user_translation").eq("original", normalizedText).single();
        if (approved?.user_translation) {
            return res.status(200).json({
                translation: approved.user_translation
            });
        }
        // fallback to Google Translate
        const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$google$2d$translate$2d$api$2d$x__$5b$external$5d$__$28$google$2d$translate$2d$api$2d$x$2c$__cjs$29$__["default"])(text, {
            to: target
        });
        const translation = result?.text ?? null;
        return res.status(200).json({
            translation
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            error: err.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__df6605fc._.js.map