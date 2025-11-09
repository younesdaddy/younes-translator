module.exports = [
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
;
;
;
function Home() {
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [target, setTarget] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("ar");
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [showCorrectionPanel, setShowCorrectionPanel] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [userCorrection, setUserCorrection] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const handleTranslate = async ()=>{
        if (!text.trim()) {
            setResult("Write something first.");
            return;
        }
        setLoading(true);
        setResult("");
        setShowCorrectionPanel(false);
        setUserCorrection("");
        try {
            const res = await fetch(`/api/translate?text=${encodeURIComponent(text)}&target=${target}`);
            const json = await res.json().catch(()=>null);
            if (!res.ok) {
                const msg = json?.translation || json?.error || json?.message || "Server error while translating";
                setResult(`Error: ${msg}`);
                setLoading(false);
                return;
            }
            const translation = json?.translation ?? json?.translated ?? json?.translatedText ?? json?.result ?? json?.data?.translatedText ?? null;
            if (translation) {
                setResult(translation);
            } else {
                setResult(json ? `Unexpected response shape: ${JSON.stringify(json)}` : "No translation returned");
            }
        } catch (err) {
            setResult("Error translating 💀 (Check your connection 👻)");
        } finally{
            setLoading(false);
        }
    };
    const handleSubmitCorrection = ()=>{
        if (!userCorrection.trim()) {
            alert("Nothing to submit!");
            return;
        }
        fetch("/api/submitCorrection", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                original: text,
                user_translation: userCorrection
            })
        }).then((res)=>res.json()).then((data)=>{
            if (data.error) {
                alert("Error submitting correction: " + data.error);
            } else {
                alert("Correction submitted!");
                setShowCorrectionPanel(false);
            }
        }).catch(()=>alert("Network error!"));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Pacifico&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "'Pacifico', serif",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#F3F4F6",
                    padding: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                src: "/logo.png",
                                alt: "Logo",
                                style: {
                                    width: "90px",
                                    marginBottom: "10px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: "2.2rem",
                                    color: "#4F46E5",
                                    fontWeight: "700"
                                },
                                children: "✒ Younes Translator 📖"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "#ffffff",
                            padding: "25px",
                            borderRadius: "15px",
                            boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
                            width: "100%",
                            maxWidth: "540px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                style: {
                                    width: "80%",
                                    maxWidth: "540px",
                                    margin: "0 auto 15px",
                                    height: "140px",
                                    padding: "14px",
                                    borderRadius: "12px",
                                    border: "1px solid #6755cf",
                                    resize: "vertical",
                                    fontSize: "18px",
                                    fontFamily: "'Cinzel', serif",
                                    display: "block"
                                },
                                placeholder: "Enter text to translate...",
                                value: text,
                                onChange: (e)=>setText(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleTranslate();
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 12,
                                    alignItems: "center",
                                    marginBottom: 15
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        style: {
                                            padding: "10px",
                                            borderRadius: "8px",
                                            border: "1px solid #6755cf",
                                            width: "170px",
                                            fontFamily: "'Pacifico', serif",
                                            fontSize: "16px"
                                        },
                                        value: target,
                                        onChange: (e)=>setTarget(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "ar",
                                                children: "Arabic 📗"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "fr",
                                                children: "French 📘"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "en",
                                                children: "English 📙"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: handleTranslate,
                                        disabled: loading,
                                        style: {
                                            padding: "10px 18px",
                                            backgroundColor: loading ? "#9be59a" : "#22c93b",
                                            color: "#000",
                                            border: "none",
                                            borderRadius: "12px",
                                            cursor: loading ? "default" : "pointer",
                                            fontWeight: 600,
                                            fontSize: "16px",
                                            fontFamily: "'Cinzel', serif"
                                        },
                                        children: loading ? "Translating…" : "Translate"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setText("");
                                            setResult("");
                                            setShowCorrectionPanel(false);
                                            setUserCorrection("");
                                        },
                                        style: {
                                            padding: "10px 14px",
                                            backgroundColor: "#f3f4f6",
                                            border: "1px solid #ddd",
                                            borderRadius: "12px",
                                            cursor: "pointer",
                                            fontFamily: "'Cinzel', serif",
                                            fontSize: "16px"
                                        },
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    minHeight: "90px",
                                    padding: "14px",
                                    borderRadius: "12px",
                                    border: "1px solid #6755cf",
                                    backgroundColor: "#e5e4f0",
                                    color: "#111827",
                                    whiteSpace: "pre-wrap",
                                    fontSize: "18px",
                                    fontFamily: "'Cinzel', serif"
                                },
                                children: result || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#6b7280"
                                    },
                                    children: "Translation will appear here"
                                }, void 0, false, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 198,
                                    columnNumber: 24
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setUserCorrection(result);
                                    setShowCorrectionPanel(!showCorrectionPanel);
                                },
                                style: {
                                    marginTop: "10px",
                                    padding: "9px 12px",
                                    borderRadius: "15px",
                                    backgroundColor: "#9bc7c7",
                                    border: "1px solid #6755cf",
                                    cursor: "pointer",
                                    fontFamily: "'Cinzel', serif",
                                    fontSize: "15px",
                                    fontWeight: "700" // bolded button text
                                },
                                children: "Submit Correction ?"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            showCorrectionPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "10px",
                                    padding: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "10px",
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    maxWidth: "400px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                        style: {
                                            width: "100%",
                                            height: "60px",
                                            padding: "8px",
                                            borderRadius: "8px",
                                            border: "1px solid #888",
                                            fontFamily: "'Cinzel', serif",
                                            fontSize: "14px",
                                            resize: "vertical"
                                        },
                                        value: userCorrection,
                                        onChange: (e)=>setUserCorrection(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: handleSubmitCorrection,
                                        style: {
                                            marginTop: "6px",
                                            padding: "6px 10px",
                                            borderRadius: "8px",
                                            backgroundColor: "#22c93b",
                                            border: "none",
                                            cursor: "pointer",
                                            fontFamily: "'Cinzel', serif",
                                            fontSize: "14px",
                                            fontWeight: "700"
                                        },
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2d650c23._.js.map