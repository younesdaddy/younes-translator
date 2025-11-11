module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

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
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://hbcbltwnqqzkuhzdzvml.supabase.co");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$supabase$2f$supabase$2d$js__$5b$external$5d$__$2840$supabase$2f$supabase$2d$js$2c$__cjs$29$__["createClient"])(supabaseUrl, supabaseServiceKey);
}),
"[externals]/google-translate-api-x [external] (google-translate-api-x, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("google-translate-api-x", () => require("google-translate-api-x"));

module.exports = mod;
}),
"[project]/pages/api/translate.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$google$2d$translate$2d$api$2d$x__$5b$external$5d$__$28$google$2d$translate$2d$api$2d$x$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/google-translate-api-x [external] (google-translate-api-x, cjs)");
;
;
async function handler(req, res) {
    try {
        const { text, target } = req.query || {};
        if (!text || !target) return res.status(400).json({
            translation: null,
            error: "Missing text or target"
        });
        const lowerText = text.toLowerCase();
        // Check approvedCorrection table first
        const { data: approved, error: approvedError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$api$5d$__$28$ecmascript$29$__["supabase"].from("approvedCorrection").select("*").eq("original", lowerText).limit(1);
        if (approvedError) console.error("Supabase approvedCorrection error:", approvedError);
        if (approved && approved.length > 0) {
            return res.status(200).json({
                translation: approved[0].user_translation
            });
        }
        // Fallback to Google Translate
        const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$google$2d$translate$2d$api$2d$x__$5b$external$5d$__$28$google$2d$translate$2d$api$2d$x$2c$__cjs$29$__["default"])(String(text), {
            to: String(target)
        });
        const translated = result?.text ?? null;
        if (!translated) return res.status(500).json({
            translation: null,
            error: "No translation produced"
        });
        return res.status(200).json({
            translation
        });
    } catch (err) {
        console.error("Translate API error:", err);
        return res.status(500).json({
            translation: null,
            error: "Translate failed: " + (err?.message || String(err))
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d0e52315._.js.map