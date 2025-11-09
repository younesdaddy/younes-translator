module.exports = [
"[project]/pages/admin.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Admin
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
function Admin() {
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    // Password check
    const checkPassword = ()=>{
        if (password === "Younesgdom") {
            setAuthorized(true);
        } else {
            alert("Wrong password!");
        }
    };
    // Fetch pending corrections
    const fetchPending = async ()=>{
        const res = await fetch("/api/getPendingCorrections");
        const data = await res.json();
        setPending(data || []);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (authorized) fetchPending();
    }, [
        authorized
    ]);
    const approve = async (item)=>{
        await fetch("/api/approveCorrection", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        fetchPending();
    };
    const reject = async (item)=>{
        await fetch("/api/rejectCorrection", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        });
        fetchPending();
    };
    // If not authorized, show password input
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
                    lineNumber: 59,
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
                    lineNumber: 60,
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
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/admin.js",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    // Admin panel
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
                lineNumber: 96,
                columnNumber: 7
            }, this),
            pending.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                style: {
                    color: "#555"
                },
                children: "No pending corrections"
            }, void 0, false, {
                fileName: "[project]/pages/admin.js",
                lineNumber: 97,
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
                                    lineNumber: 107,
                                    columnNumber: 14
                                }, this),
                                " ",
                                c.original
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    children: "Correction:"
                                }, void 0, false, {
                                    fileName: "[project]/pages/admin.js",
                                    lineNumber: 108,
                                    columnNumber: 14
                                }, this),
                                " ",
                                c.user_translation
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/admin.js",
                            lineNumber: 108,
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
                            lineNumber: 109,
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
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/pages/admin.js",
                    lineNumber: 99,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/admin.js",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0010fd40._.js.map