module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "slugify",
    ()=>slugify,
    "truncate",
    ()=>truncate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
    });
}
function slugify(text) {
    return text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}
function truncate(text, length) {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + '...';
}
}),
"[project]/src/components/layout/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ThemeToggle() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Avoid hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-12 h-12 flex items-center justify-center rounded-lg bg-background-card border border-border",
            "aria-label": "Toggle theme",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/layout/ThemeToggle.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this);
    }
    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative w-12 h-12 flex items-center justify-center', 'rounded-lg glass cursor-pointer', 'transition-all duration-300', 'hover:border-accent-primary hover:-translate-y-0.5', 'hover:shadow-md overflow-hidden'),
        "aria-label": `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute w-6 h-6 transition-all duration-300', 'text-foreground-secondary hover:text-accent-primary', theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0')
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute w-6 h-6 transition-all duration-300', 'text-foreground-secondary hover:text-accent-primary', theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0')
            }, void 0, false, {
                fileName: "[project]/src/components/layout/ThemeToggle.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/ThemeToggle.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/ThemeToggle.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const navLinks = [
    {
        href: '#home',
        label: 'Home'
    },
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#experience',
        label: 'Experience'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#skills',
        label: 'Skills'
    },
    {
        href: '#contact',
        label: 'Contact'
    }
];
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('home');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 50);
            // Update active section based on scroll position
            const sections = navLinks.map((link)=>link.href.substring(1));
            for (const section of sections.reverse()){
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    const handleNavClick = (e, href)=>{
        e.preventDefault();
        setMobileMenuOpen(false);
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 left-0 right-0 z-50', 'transition-all duration-300', scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-wrapper",
            style: {
                width: '100%',
                maxWidth: '1280px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '24px',
                paddingRight: '24px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#home",
                            onClick: (e)=>handleNavClick(e, '#home'),
                            className: "flex items-center gap-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold font-heading text-lg shadow-lg shadow-accent-primary/25",
                                    children: "BS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:block text-lg font-semibold font-heading text-foreground group-hover:text-accent-primary transition-colors",
                                    children: "Bhuvnesh Sahu"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-3",
                            children: navLinks.map((link)=>{
                                const isActive = activeSection === link.href.substring(1);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    onClick: (e)=>handleNavClick(e, link.href),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-200', isActive ? 'text-accent-primary bg-accent-primary/10' : 'text-foreground-secondary hover:text-foreground hover:bg-background-tertiary'),
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 33
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('lg:hidden w-10 h-10 flex items-center justify-center', 'rounded-lg bg-background-card border border-border', 'text-foreground-secondary hover:text-foreground', 'transition-all duration-200'),
                                    "aria-label": "Toggle menu",
                                    children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 117,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('lg:hidden overflow-hidden transition-all duration-300', mobileMenuOpen ? 'max-h-[400px] opacity-100 pb-6' : 'max-h-0 opacity-0'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 space-y-1 border-t border-border",
                        children: navLinks.map((link)=>{
                            const isActive = activeSection === link.href.substring(1);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: (e)=>handleNavClick(e, link.href),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200', isActive ? 'bg-accent-primary/10 text-accent-primary' : 'text-foreground-secondary hover:bg-background-tertiary hover:text-foreground'),
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 152,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 147,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Navbar.tsx",
            lineNumber: 74,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllProjectSlugs",
    ()=>getAllProjectSlugs,
    "getFeaturedProjects",
    ()=>getFeaturedProjects,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjectsByCategory",
    ()=>getProjectsByCategory,
    "projectCategories",
    ()=>projectCategories,
    "projects",
    ()=>projects
]);
const projectCategories = {
    'gen-ai': {
        label: 'Gen-AI & LLM',
        icon: '🤖'
    },
    'computer-vision': {
        label: 'Computer Vision',
        icon: '👁️'
    },
    'nlp': {
        label: 'NLP & Deep Learning',
        icon: '💬'
    },
    'ml': {
        label: 'Machine Learning',
        icon: '📊'
    }
};
const projects = [
    {
        id: '1',
        slug: 'real-time-crack-detection',
        title: 'Real-Time Crack Detection & Segmentation',
        shortDescription: 'Industrial-grade computer vision pipeline for structural crack detection using state-of-the-art models with full deployment.',
        longDescription: 'Production-grade computer vision pipeline that detects and segments structural cracks in real-time with 95.3% mAP—15% better than existing solutions. Built at AlgoLabs for infrastructure monitoring.',
        category: 'computer-vision',
        tags: [
            'Computer Vision',
            'Production ML',
            'Docker',
            'Streamlit'
        ],
        technologies: [
            'YOLOv8',
            'SAM',
            'Detectron2',
            'PyTorch',
            'Docker',
            'Streamlit',
            'FastAPI',
            'LabelMe'
        ],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/Real-Time-Crack-Detection-and-Segmentation',
        highlights: [
            'Created custom dataset: 1,200+ images with LabelMe annotations, handling extreme class imbalance (cracks: 3% of pixels)',
            'Benchmarked 3 SOTA models: YOLOv8 (fastest), SAM (best segmentation), Detectron2 (best balance)',
            'Selected YOLOv8-L based on speed/accuracy trade-off: 95.3% mAP @ 30 FPS on RTX 3090',
            'Built FastAPI backend + Streamlit frontend, containerized with Docker for edge deployment'
        ],
        impact: 'Deployed at AlgoLabs - now processing 10K+ images/day in production. Demonstrates ability to build production CV systems from data collection through deployment.',
        problem: 'Manual structural inspection is slow, expensive, and misses 20-30% of critical cracks. A single missed crack in a bridge can lead to catastrophic failure, costing lives and millions in repairs.',
        technicalApproach: [
            'Dataset Creation: Built custom dataset with 1,200+ images using LabelMe, implementing careful class balancing strategies for extreme imbalance (cracks represent only 3% of pixels)',
            'Model Selection: Systematically benchmarked YOLOv8 (optimized for speed), SAM (best segmentation quality), and Detectron2 (balanced performance)',
            'Optimization: Selected YOLOv8-L for optimal speed/accuracy trade-off, achieving 95.3% mAP @ 30 FPS on RTX 3090',
            'Deployment Architecture: Built FastAPI backend for model serving, Streamlit frontend for visualization, containerized entire stack with Docker for consistent edge deployment'
        ],
        results: [
            '95.3% mAP on test set (vs 82% baseline Faster R-CNN) - 13 percentage point improvement',
            '30 FPS inference speed - real-time capable for video processing',
            '89.4% IoU on segmentation masks - high-quality pixel-level detection',
            'Processing 10K+ images/day in production at AlgoLabs',
            '91% inter-annotator agreement during dataset curation'
        ],
        challenges: [
            'Class Imbalance: Cracks represent only 3% of pixels. Solution: Implemented focal loss and extensive data augmentation (flips, rotation, brightness adjustments)',
            'Edge Deployment: Model too large for edge devices. Solution: Applied model quantization reducing size by 60% with <2% accuracy loss',
            'Real-World Variability: Cracks appear under diverse conditions. Solution: Trained on varied lighting, angles, crack types, and surface materials',
            'Segmentation vs Detection Trade-off: Balanced precision requirements with inference speed for real-time use'
        ],
        learnings: 'Production computer vision is 20% model training, 80% handling edge cases, deployment, and monitoring. The model that achieves 95% accuracy in notebooks often fails in production due to distribution shift, lighting variations, and deployment constraints. Success requires systematic data collection, rigorous evaluation across diverse conditions, and production-first architecture decisions.'
    },
    {
        id: '2',
        slug: 'tv-series-nlp-analyzer',
        title: 'End-to-End NLP Application with LLMs',
        shortDescription: 'Comprehensive NLP system combining web scraping, zero-shot classification, network analysis, and LLM fine-tuning for TV series content analysis.',
        longDescription: 'Multi-faceted NLP project featuring theme extraction via zero-shot classification, interactive character relationship graphs, DistilBERT fine-tuning for text classification, and LLaMA 3.1 fine-tuning with PEFT/QLoRA for conversational AI.',
        category: 'nlp',
        tags: [
            'LLM Fine-tuning',
            'Zero-Shot',
            'Network Analysis',
            'NLP Pipeline'
        ],
        technologies: [
            'LLaMA 3.1',
            'BART',
            'DistilBERT',
            'PEFT/QLoRA',
            'SpaCy',
            'NetworkX',
            'PyVis',
            'Gradio'
        ],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/TV-Series-analyzer',
        highlights: [
            'Web-scraped 3 datasets (subtitles, descriptions, transcripts) using Scrapy',
            'Zero-shot theme classification using BART-L-MNLI',
            'Built interactive character network with SpaCy NER + NetworkX + PyVis',
            'Fine-tuned LLaMA 3.1 (8B) with PEFT/QLoRA for character chatbot',
            'Fine-tuned DistilBERT for domain-specific classification'
        ],
        impact: 'Showcases modern NLP/LLM pipeline construction, fine-tuning expertise, and ability to combine multiple advanced techniques into a cohesive application'
    },
    {
        id: '3',
        slug: 'rag-multi-doc-chatbot',
        title: 'RAG-Based Multi-Document ChatBot with Voice',
        shortDescription: 'Production-ready conversational AI system using RAG architecture with vector databases, voice interface, and deployed on Hugging Face Spaces.',
        longDescription: 'Interactive Q&A application enabling natural conversations with multiple documents. Features open-source embeddings, ChromaDB vector storage, Whisper voice input, Gemini TTS output, and LangChain orchestration.',
        category: 'gen-ai',
        tags: [
            'RAG',
            'Vector DB',
            'Voice AI',
            'LangChain'
        ],
        technologies: [
            'LangChain',
            'ChromaDB',
            'Whisper',
            'Gemini TTS',
            'LLaMA',
            'ChatGroq',
            'Hugging Face'
        ],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/Multi-Doc-RAG-Chatbot',
        liveUrl: 'https://huggingface.co/spaces/bhuvneshsahu01/rag-chatbot',
        highlights: [
            'Built RAG pipeline with ChromaDB vector storage for efficient similarity search',
            'Integrated Whisper (audio input) + Gemini TTS (audio output) for voice interface',
            'Used LLaMA Scout LLM via ChatGroq with ConversationBufferMemory',
            'Deployed on Hugging Face Spaces for public access'
        ],
        impact: 'Demonstrates proficiency in modern Gen-AI stack (RAG, vector DBs, LLMs) and ability to build production-ready applications with multi-modal interfaces'
    },
    {
        id: '4',
        slug: 'music-genre-classification',
        title: 'Music Genre Classification with Hybrid Deep Learning',
        shortDescription: 'Advanced audio classification using hybrid ANN+CNN architecture with Mel spectrograms, feature engineering, and Bayesian optimization.',
        longDescription: 'Built comprehensive audio ML pipeline extracting MFCCs, chroma, spectral features, and tempo. Implemented hybrid Functional API combining ANN for audio features and CNN for Mel spectrograms, with Bayesian hyperparameter tuning.',
        category: 'ml',
        tags: [
            'Audio ML',
            'Deep Learning',
            'Feature Engineering',
            'Bayesian Optimization'
        ],
        technologies: [
            'PyTorch',
            'Librosa',
            'CNN',
            'ANN',
            'XGBoost',
            'Scikit-learn',
            'Bayesian Optimization'
        ],
        featured: true,
        githubUrl: 'https://github.com/bhuvneshsahu01/Music-Genre-Classification',
        highlights: [
            'Dataset: 10 genres, 100 samples per genre (30s audio clips)',
            'Extracted audio features (MFCCs, chroma, spectral contrast) + PCA reduction',
            'Compared 6 ML models: LR, SVC, Decision Trees, NB, KNN, RF, XGBoost',
            'Built hybrid Functional API: ANN for features + CNN for spectrograms',
            'Performed Bayesian hyperparameter optimization with comparative analysis table'
        ],
        impact: 'Shows deep learning architecture design skills, signal processing knowledge, and rigorous experimentation methodology'
    },
    {
        id: '5',
        slug: 'api-assistant-system',
        title: 'System-Agnostic AI API Assistant',
        shortDescription: 'LLM-powered assistant enabling natural language interaction with any API-based system through intelligent workflow generation.',
        longDescription: 'Built production agentic AI system at Coriolis Technologies that reduced support ticket volume by 40% through intelligent workflow automation. Converts natural language requests into executable multi-step API workflows.',
        category: 'gen-ai',
        tags: [
            'LLM Agents',
            'API Integration',
            'Workflow Automation',
            'Production System'
        ],
        technologies: [
            'LangChain',
            'OpenAPI',
            'Groq',
            'Mistral',
            'GPT-3.5',
            'FastAPI',
            'Workflow Orchestration'
        ],
        featured: true,
        githubUrl: '#',
        highlights: [
            'Reduced support ticket volume by 40% through intelligent automation of repetitive tasks (data retrieval, report generation)',
            'Built production system serving 500+ internal users with 87% success rate on complex multi-step workflows',
            'Designed system-agnostic architecture working with any OpenAPI-compliant API without code changes',
            'Saved estimated 15 hours/week of support engineer time (~$30K annual cost reduction)'
        ],
        impact: 'Built during Coriolis internship - demonstrates ability to build production LLM systems that solve real business problems and reduce operational overhead. The 40% ticket reduction and $30K savings show tangible business value.',
        problem: 'Support team spent 15+ hours/week manually executing repetitive API tasks for internal users (e.g., "create a new user account with specific permissions", "generate quarterly usage report"). Each task required knowledge of complex API documentation, proper parameter formatting, and correct sequence of API calls. This created bottlenecks, delayed users, and prevented support engineers from focusing on complex issues.',
        technicalApproach: [
            'Knowledge Base Creation: Parsed OpenAPI specifications into structured vector database, creating semantic search over 200+ API endpoints with parameter schemas and dependencies',
            'Intent Classification: Implemented LLM chain to decompose user natural language requests into structured intent + parameters (e.g., "create admin user for John" → intent: create_user, params: {name: "John", role: "admin"})',
            'Workflow Planning: Built dependency-aware graph planner that sequences API calls (e.g., create user → assign permissions → send notification), handling parallel execution where possible',
            'LLM Evaluation: Tested 6 models (GPT-3.5, Mistral-7B, Llama-3.1, Qwen-2.5, Gemini) - selected GPT-3.5-turbo for best cost/accuracy trade-off (87% success vs 92% for GPT-4 at 10x cost)'
        ],
        results: [
            '40% reduction in support ticket volume (from ~150/week to ~90/week)',
            '500+ internal users actively using the system',
            '87% success rate on complex multi-step workflows requiring 3+ API calls',
            '15 hours/week saved in support engineer time (estimated $30K annual savings)',
            'Average task completion time reduced from 10 minutes (manual) to 30 seconds (automated)',
            'System handles 10+ different API systems (GitLab, Kubernetes, Slack, internal tools)'
        ],
        challenges: [
            'API Documentation Quality: Many internal APIs had incomplete/outdated OpenAPI specs. Solution: Built semi-automated documentation enhancement system with LLM-assisted parameter inference',
            'Error Handling: LLMs hallucinate invalid parameters. Solution: Implemented strict schema validation + fallback to ask user for clarification when confidence < 0.7',
            'Complex Dependencies: Some workflows required conditional logic (if X fails, do Y). Solution: Built simple workflow DSL with branching support',
            'Cost Control: GPT-4 was too expensive for 500 users. Solution: Systematic benchmarking showed GPT-3.5 achieved 87% vs 92% accuracy at 10x lower cost - acceptable trade-off'
        ],
        learnings: 'Production LLM systems require obsessive focus on error handling, cost optimization, and graceful degradation. The difference between 87% and 92% accuracy sounds small, but represents real user frustration. Key insight: most failures come from poor prompting and inadequate guardrails, not model limitations. Investing time in robust prompt engineering, schema validation, and user feedback loops delivers better ROI than upgrading models.'
    },
    {
        id: '6',
        slug: 'privacy-preserving-ml',
        title: 'Comparative Study: Privacy-Preserving ML Techniques',
        shortDescription: 'Research implementation comparing k-Anonymity, l-Diversity, and Differential Privacy with utility-risk tradeoff analysis.',
        longDescription: 'Theoretical and practical study implementing three privacy models from scratch. Comprehensive evaluation of utility loss, risk measures, reconstruction risk, and privacy-utility tradeoffs on real datasets.',
        category: 'ml',
        tags: [
            'Privacy',
            'Research',
            'Statistical ML',
            'Theory to Practice'
        ],
        technologies: [
            'Python',
            'NumPy',
            'Pandas',
            'Statistical Modeling'
        ],
        featured: false,
        githubUrl: '#',
        highlights: [
            'Implemented k-Anonymity, l-Diversity, and Differential Privacy from scratch',
            'Comprehensive comparative analysis on utility loss and privacy guarantees',
            'Evaluated reconstruction risk and information leakage metrics',
            'Demonstrated practical tradeoffs between data utility and privacy protection'
        ],
        impact: 'Shows strong theoretical foundation in statistics and ability to translate academic concepts into practical implementations'
    }
];
function getFeaturedProjects() {
    return projects.filter((p)=>p.featured);
}
function getProjectsByCategory(category) {
    return projects.filter((p)=>p.category === category);
}
function getProjectBySlug(slug) {
    return projects.find((p)=>p.slug === slug);
}
function getAllProjectSlugs() {
    return projects.map((p)=>p.slug);
}
}),
"[project]/src/data/experience.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "experiences",
    ()=>experiences,
    "getCurrentExperience",
    ()=>getCurrentExperience,
    "getPastExperiences",
    ()=>getPastExperiences
]);
const experiences = [
    {
        id: '1',
        title: 'Data Scientist',
        company: 'Wipro',
        location: 'India',
        type: 'full-time',
        startDate: '2025-07',
        current: true,
        description: 'Building production AI systems for enterprise clients—from multi-agent orchestration to computer vision pipelines.',
        responsibilities: [
            'Developing Agentic AI systems using LLM orchestration and multi-agent architectures for enterprise workflow automation',
            'Building Intelligent Document Processing (IDP) pipelines for automated document understanding and information extraction',
            'Creating proprietary Computer Vision solutions by fine-tuning vision models for domain-specific client tasks',
            'Designing RAG-based applications with vector databases for enterprise knowledge management',
            'Collaborating with cross-functional teams on AI strategy, architecture decisions, and production deployment best practices'
        ],
        technologies: [
            'Python',
            'PyTorch',
            'LangChain',
            'LangGraph',
            'Agentic AI',
            'IDP',
            'Computer Vision',
            'Docker',
            'FastAPI',
            'MLOps'
        ],
        highlights: [
            'Working on production Agentic AI and IDP systems for enterprise clients',
            'Gaining hands-on experience with LLM orchestration, multi-agent workflows, and RAG architectures',
            'Contributing to computer vision model fine-tuning and deployment pipelines',
            'Learning MLOps practices including Docker containerization and cloud deployment'
        ]
    },
    {
        id: '2',
        title: 'Gen AI Intern',
        company: 'Coriolis Technologies',
        location: 'India',
        type: 'internship',
        startDate: '2024-01',
        endDate: '2024-04',
        current: false,
        description: 'Built production agentic AI system that reduced support team workload by 40% through intelligent workflow automation.',
        responsibilities: [
            'Built production agentic AI system that converts natural language into executable multi-step workflows by parsing OpenAPI specifications—deployed to support team serving 500+ internal users',
            'Reduced support ticket volume by 40% through intelligent automation of repetitive tasks like data retrieval and report generation—saving estimated 15 hours/week of support engineer time',
            'Designed system-agnostic architecture working with any OpenAPI-compliant API without code changes, enabling rapid integration with 10+ internal systems',
            'Implemented LLM chain orchestration with fallback strategies using LangChain, including intent classification, API selection, and parameter extraction—achieving 87% success rate on complex multi-step workflows'
        ],
        technologies: [
            'Python',
            'LangChain',
            'OpenAPI',
            'LLM Agents',
            'FastAPI',
            'Workflow Automation'
        ],
        highlights: [
            '40% reduction in support ticket volume',
            '500+ internal users served',
            '87% success rate on complex multi-step workflows',
            '15 hours/week saved in support engineer time (~$30K annual savings)'
        ]
    },
    {
        id: '3',
        title: 'Data Science Intern',
        company: 'AlgoLabs',
        location: 'India',
        type: 'internship',
        startDate: '2024-05',
        endDate: '2024-07',
        current: false,
        description: 'Shipped production-ready crack detection system achieving 95.3% mAP—20 percentage point improvement over baseline.',
        responsibilities: [
            'Shipped production-ready crack detection system for infrastructure monitoring, achieving 95.3% mAP@0.5 through systematic comparison of YOLOv8, SAM, and Detectron2—20 percentage point improvement over baseline YOLO',
            'Engineered complete ML pipeline from data collection through deployment: built custom annotation workflow, curated dataset of 1,200+ images with quality control, achieved 91% inter-annotator agreement',
            'Optimized for production deployment: reduced inference time to 45ms on CPU through model quantization and TensorRT optimization, containerized with Docker for consistent deployment',
            'Delivered comprehensive comparative analysis of detection vs. segmentation approaches, evaluating trade-offs in accuracy, speed, and memory—providing client with data-driven recommendation'
        ],
        technologies: [
            'Python',
            'PyTorch',
            'YOLOv8',
            'SAM',
            'Detectron2',
            'Docker',
            'Streamlit',
            'FastAPI',
            'TensorRT'
        ],
        highlights: [
            '95.3% mAP@0.5 (20 percentage point improvement over baseline)',
            '1,200+ images curated with 91% inter-annotator agreement',
            '45ms inference on CPU after optimization',
            'End-to-end pipeline from annotation to containerized deployment'
        ]
    }
];
function getCurrentExperience() {
    return experiences.find((e)=>e.current);
}
function getPastExperiences() {
    return experiences.filter((e)=>!e.current).sort((a, b)=>new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
}
}),
"[project]/src/data/skills.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "skillCategories",
    ()=>skillCategories
]);
const skillCategories = [
    {
        id: 'programming',
        title: 'Programming Languages',
        icon: '💻',
        skills: [
            {
                name: 'Python',
                level: 'expert'
            },
            {
                name: 'SQL',
                level: 'advanced'
            },
            {
                name: 'R',
                level: 'intermediate'
            },
            {
                name: 'JavaScript',
                level: 'intermediate'
            },
            {
                name: 'TypeScript',
                level: 'intermediate'
            }
        ]
    },
    {
        id: 'ml-dl',
        title: 'Machine Learning & Deep Learning',
        icon: '🧠',
        skills: [
            {
                name: 'PyTorch',
                level: 'expert'
            },
            {
                name: 'TensorFlow / Keras',
                level: 'advanced'
            },
            {
                name: 'Scikit-learn',
                level: 'expert'
            },
            {
                name: 'XGBoost / LightGBM',
                level: 'advanced'
            },
            {
                name: 'Hugging Face Transformers',
                level: 'advanced'
            },
            {
                name: 'OpenCV',
                level: 'advanced'
            }
        ]
    },
    {
        id: 'genai',
        title: 'Generative AI & LLMs',
        icon: '🤖',
        skills: [
            {
                name: 'LangChain',
                level: 'expert'
            },
            {
                name: 'RAG Systems',
                level: 'expert'
            },
            {
                name: 'Prompt Engineering',
                level: 'advanced'
            },
            {
                name: 'OpenAI / GPT APIs',
                level: 'advanced'
            },
            {
                name: 'Vector Databases (FAISS, Pinecone)',
                level: 'advanced'
            },
            {
                name: 'LLM Orchestration',
                level: 'advanced'
            }
        ]
    },
    {
        id: 'cv',
        title: 'Computer Vision',
        icon: '👁️',
        skills: [
            {
                name: 'YOLOv8',
                level: 'expert'
            },
            {
                name: 'Segment Anything (SAM)',
                level: 'advanced'
            },
            {
                name: 'Detectron2',
                level: 'advanced'
            },
            {
                name: 'Image Segmentation',
                level: 'advanced'
            },
            {
                name: 'Object Detection',
                level: 'expert'
            },
            {
                name: 'CNN Architectures',
                level: 'advanced'
            }
        ]
    },
    {
        id: 'nlp',
        title: 'Natural Language Processing',
        icon: '💬',
        skills: [
            {
                name: 'SpaCy',
                level: 'advanced'
            },
            {
                name: 'NLTK',
                level: 'advanced'
            },
            {
                name: 'Named Entity Recognition',
                level: 'advanced'
            },
            {
                name: 'Text Classification',
                level: 'advanced'
            },
            {
                name: 'Sentiment Analysis',
                level: 'advanced'
            },
            {
                name: 'Transformers / BERT',
                level: 'advanced'
            }
        ]
    },
    {
        id: 'mlops',
        title: 'MLOps & Deployment',
        icon: '🚀',
        skills: [
            {
                name: 'Docker',
                level: 'advanced'
            },
            {
                name: 'FastAPI',
                level: 'advanced'
            },
            {
                name: 'Streamlit',
                level: 'expert'
            },
            {
                name: 'MLflow',
                level: 'intermediate'
            },
            {
                name: 'Git / GitHub',
                level: 'advanced'
            },
            {
                name: 'CI/CD Pipelines',
                level: 'intermediate'
            }
        ]
    },
    {
        id: 'data',
        title: 'Data Engineering & Analytics',
        icon: '📊',
        skills: [
            {
                name: 'Pandas',
                level: 'expert'
            },
            {
                name: 'NumPy',
                level: 'expert'
            },
            {
                name: 'SQL / PostgreSQL',
                level: 'advanced'
            },
            {
                name: 'MongoDB',
                level: 'intermediate'
            },
            {
                name: 'Apache Spark',
                level: 'intermediate'
            },
            {
                name: 'Data Visualization (Matplotlib, Seaborn, Plotly)',
                level: 'advanced'
            }
        ]
    },
    {
        id: 'cloud',
        title: 'Cloud & Tools',
        icon: '☁️',
        skills: [
            {
                name: 'Azure',
                level: 'intermediate'
            },
            {
                name: 'AWS (basics)',
                level: 'intermediate'
            },
            {
                name: 'Jupyter / VS Code',
                level: 'expert'
            },
            {
                name: 'Linux',
                level: 'advanced'
            },
            {
                name: 'REST APIs',
                level: 'advanced'
            }
        ]
    }
];
}),
"[project]/src/data/personal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "personalInfo",
    ()=>personalInfo
]);
const personalInfo = {
    name: 'Bhuvnesh Sahu',
    title: 'Machine Learning Engineer',
    subtitle: 'Machine Learning Engineer | Production AI Specialist',
    tagline: 'I build AI systems that create measurable business value. Specialized in GenAI agents, RAG pipelines, and computer vision—from prototype to production.',
    email: 'bhuvneshsahu1234@gmail.com',
    phone: '+91 9407241555',
    location: 'India',
    profileImage: '/images/profile/profile.jpg',
    // Achievements for the banner
    achievements: [
        {
            label: '5+ Production ML Systems',
            icon: 'rocket'
        },
        {
            label: '40% Cost Reduction',
            icon: 'trending-down'
        },
        {
            label: '95% mAP on CV Tasks',
            icon: 'target'
        },
        {
            label: '500+ Users Served',
            icon: 'users'
        }
    ],
    social: {
        github: 'https://github.com/bhuvneshsahu01',
        linkedin: 'https://www.linkedin.com/in/bhuvnesh-sahu01/',
        email: 'mailto:bhuvneshsahu1234@gmail.com'
    },
    bio: {
        short: `Machine Learning Engineer building production AI systems at Wipro. I specialize in GenAI agents, RAG architectures, and computer vision—turning business problems into deployed solutions. M.Sc. Data Science from CMI. Previously reduced support costs 40% with an intelligent agent system at Coriolis, and shipped a 95%+ mAP crack detection pipeline at AlgoLabs. Passionate about making AI reliable enough for production.`,
        long: `I'm a Machine Learning Engineer specializing in production GenAI and computer vision systems. Currently at Wipro, I build enterprise AI solutions—from intelligent document processing pipelines to multi-agent orchestration systems that automate complex business workflows.

My approach combines strong statistical foundations (M.Sc. Data Science from CMI, CGPA 8.31) with hands-on engineering experience shipping real systems. At AlgoLabs, I built and deployed a computer vision pipeline for infrastructure monitoring (95%+ mAP). At Coriolis, I developed an agentic AI assistant that reduced support team workload by 40% through intelligent workflow automation.

I'm obsessed with building AI systems that actually work in production—which means focusing on reliability, evaluation, and maintainability, not just model performance. My ideal next role is at a company that's serious about putting cutting-edge AI into production at scale.`
    },
    education: [
        {
            degree: 'M.Sc. Data Science',
            institution: 'Chennai Mathematical Institute',
            location: 'Chennai, India',
            year: '2023 - 2025',
            grade: 'CGPA: 8.31/10.00',
            description: 'Specialized in Machine Learning, Deep Learning, NLP, Statistics, and Probability Theory.'
        },
        {
            degree: 'B.Sc. (Hons) Statistics',
            institution: 'Hindu College, University of Delhi',
            location: 'New Delhi, India',
            year: '2020 - 2023',
            grade: 'CGPA: 8.7/10.00',
            description: 'Strong foundation in statistical theory, probability, and mathematical modeling. Recipient of DST INSPIRE Scholarship (2020).'
        }
    ],
    stats: {
        projectsCompleted: '5+',
        experience: '2 Years',
        cgpa: '8.31/10',
        awards: 'DST INSPIRE'
    },
    awards: [
        'Department of Science & Technology (DST) INSPIRE Scholarship - 2020'
    ],
    certifications: [
        'Finance and Quantitative Modeling for Analysts Specialization - Coursera',
        'Finance Risk Management Specialization - Coursera',
        'Machine Learning Specialization, Andrew NG - Coursera',
        'Advanced Learning Algorithms, Andrew NG - Coursera',
        'AWS Cloud Solutions Architect Professional Certificate - Coursera'
    ]
};
}),
"[project]/src/data/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$experience$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/experience.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/skills.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/personal.ts [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/src/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/data/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/personal.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const footerLinks = [
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#experience',
        label: 'Experience'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#skills',
        label: 'Skills'
    },
    {
        href: '#contact',
        label: 'Contact'
    }
];
function Footer() {
    const handleNavClick = (e, href)=>{
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            const navbarHeight = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "pt-24 pb-16 bg-background-secondary border-t border-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-wrapper",
            style: {
                width: '100%',
                maxWidth: '1280px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '24px',
                paddingRight: '24px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-16 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                paddingTop: '8px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold font-heading text-xl",
                                            children: "BS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 42,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold font-heading text-foreground",
                                            children: "Bhuvnesh Sahu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground-secondary text-base leading-relaxed mb-6",
                                    children: "Data Scientist passionate about building AI systems that make a real-world impact."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].social.github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-12 h-12 flex items-center justify-center rounded-lg bg-background-card border border-border text-foreground-muted hover:text-accent-primary hover:border-accent-primary transition-all",
                                            "aria-label": "GitHub",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 60,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].social.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-12 h-12 flex items-center justify-center rounded-lg bg-background-card border border-border text-foreground-muted hover:text-accent-primary hover:border-accent-primary transition-all",
                                            "aria-label": "LinkedIn",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 69,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].social.email,
                                            className: "w-12 h-12 flex items-center justify-center rounded-lg bg-background-card border border-border text-foreground-muted hover:text-accent-primary hover:border-accent-primary transition-all",
                                            "aria-label": "Email",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 76,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                paddingTop: '8px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground uppercase tracking-wider mb-8",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-5",
                                    children: footerLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: link.href,
                                                onClick: (e)=>handleNavClick(e, link.href),
                                                className: "text-foreground-secondary hover:text-accent-primary transition-colors text-lg",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 89,
                                                columnNumber: 37
                                            }, this)
                                        }, link.href, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                paddingTop: '8px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-foreground uppercase tracking-wider mb-8",
                                    children: "Get in Touch"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-5 text-lg text-foreground-secondary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].email}`,
                                                className: "hover:text-accent-primary transition-colors",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$personal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["personalInfo"].location
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Footer.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-foreground-muted",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Bhuvnesh Sahu. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-foreground-muted flex items-center gap-1",
                            children: [
                                "Built with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "w-4 h-4 text-accent-tertiary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Footer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 36
                                }, this),
                                " using Next.js"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Footer.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Footer.tsx",
                    lineNumber: 121,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Footer.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/Footer.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/layout/ThemeProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "light",
        enableSystem: false,
        disableTransitionOnChange: false,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/ThemeProvider.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f977c600._.js.map