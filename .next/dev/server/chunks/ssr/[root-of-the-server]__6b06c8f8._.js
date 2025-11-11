module.exports = [
"[externals]/@supabase/supabase-js [external] (@supabase/supabase-js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@supabase/supabase-js", () => require("@supabase/supabase-js"));

module.exports = mod;
}),
"[project]/lib/supabase.js [ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/pages/admin.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Admin
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.js [ssr] (ecmascript)");
;
;
;
function Admin() {
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const checkPassword = ()=>{
        if (password === "Younesgdom") setAuthorized(true);
        else alert("Wrong password!");
    };
    const fetchPending = async ()=>{
        let { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["supabase"].from("pendingcorrection").select("*");
        if (error) console.log(error);
        else setPending(data || []);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (authorized) fetchPending();
    }, [
        authorized
    ]);
    const approve = async (item)=>{
        try {
            const res = await fetch("/api/adminAction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password,
                    action: "approve",
                    item
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Action failed");
            fetchPending();
        } catch (err) {
            console.error("approve error:", err);
            alert("Error: " + (err.message || err));
        }
    };
    const reject = async (item)=>{
        try {
            const res = await fetch("/api/adminAction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password,
                    action: "reject",
                    item
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Action failed");
            fetchPending();
        } catch (err) {
            console.error("reject error:", err);
            alert("Error: " + (err.message || err));
        }
    };
    if (!authorized) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                background: "#f0f4f8",
                fontFamily: "'Poppins', sans-serif",
                color: "#333"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    style: {
                        marginBottom: 20
                    },
                    children: "Enter Admin Password"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                    type: "password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value),
                    placeholder: "Password",
                    style: {
                        padding: "10px 15px",
                        fontSize: 16,
                        borderRadius: 8,
                        border: "1px solid #ccc",
                        width: 250,
                        marginBottom: 15
                    },
                    onKeyDown: (e)=>{
                        if (e.key === "Enter") checkPassword();
                    }
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: checkPassword,
                    style: {
                        padding: "10px 20px",
                        borderRadius: 8,
                        border: "none",
                        backgroundColor: "#4f46e5",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer"
                    },
                    children: "Enter"
                }, void 0, false, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            padding: 30,
            fontFamily: "'Poppins', sans-serif",
            background: "#f9fafb",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                style: {
                    color: "#4f46e5",
                    marginBottom: 20
                },
                children: "Pending Corrections"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            pending.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                style: {
                    color: "#555"
                },
                children: "No pending corrections"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 77,
                columnNumber: 32
            }, this),
            pending.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 15,
                        border: "1px solid #e5e7eb",
                        borderRadius: 8,
                        padding: 15,
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    children: "Original:"
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 80,
                                    columnNumber: 14
                                }, this),
                                " ",
                                c.original
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    children: "Correction:"
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 81,
                                    columnNumber: 14
                                }, this),
                                " ",
                                c.user_translation
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>approve(c),
                            style: {
                                marginRight: 10,
                                padding: "5px 10px",
                                borderRadius: 5,
                                border: "none",
                                backgroundColor: "#10b981",
                                color: "#fff",
                                cursor: "pointer"
                            },
                            children: "Approve"
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>reject(c),
                            style: {
                                padding: "5px 10px",
                                borderRadius: 5,
                                border: "none",
                                backgroundColor: "#ef4444",
                                color: "#fff",
                                cursor: "pointer"
                            },
                            children: "Reject"
                        }, void 0, false, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6b06c8f8._.js.map