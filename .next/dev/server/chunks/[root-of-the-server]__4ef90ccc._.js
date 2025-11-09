module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@vitalets/google-translate-api [external] (@vitalets/google-translate-api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@vitalets/google-translate-api", () => require("@vitalets/google-translate-api"));

module.exports = mod;
}),
"[project]/pages/api/translate.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$vitalets$2f$google$2d$translate$2d$api__$5b$external$5d$__$2840$vitalets$2f$google$2d$translate$2d$api$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@vitalets/google-translate-api [external] (@vitalets/google-translate-api, cjs)");
;
async function handler(req, res) {
    const { text, target } = req.query;
    if (!text || !target) {
        return res.status(400).json({
            error: "Missing text or target language"
        });
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$vitalets$2f$google$2d$translate$2d$api__$5b$external$5d$__$2840$vitalets$2f$google$2d$translate$2d$api$2c$__cjs$29$__["default"])(text, {
            to: target
        });
        res.status(200).json({
            translated: result.text
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ef90ccc._.js.map