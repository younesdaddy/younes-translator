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
"[project]/pages/api/translate.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$google$2d$translate$2d$api$2d$x__$5b$external$5d$__$28$google$2d$translate$2d$api$2d$x$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/google-translate-api-x [external] (google-translate-api-x, cjs)");
;
async function handler(req, res) {
    try {
        const { text, target } = req.query; // or req.body for POST
        if (!text || !target) {
            return res.status(400).json({
                translation: null,
                error: 'Missing text or target'
            });
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$google$2d$translate$2d$api$2d$x__$5b$external$5d$__$28$google$2d$translate$2d$api$2d$x$2c$__cjs$29$__["default"])(String(text), {
            to: String(target)
        });
        // This line is critical: get the translated text
        const translation = result.text;
        res.status(200).json({
            translation
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__350a0b95._.js.map