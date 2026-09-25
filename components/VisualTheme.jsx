export default function VisualTheme(){return <style>{`
body:before{background:url('/assets/sustain-ai-background.svg') center center/cover no-repeat!important;opacity:.92!important;animation:siteBgDrift 22s ease-in-out infinite alternate!important}
body:after{background:radial-gradient(circle at 18% 18%,rgba(194,255,105,.12),transparent 24%),radial-gradient(circle at 82% 22%,rgba(71,220,255,.10),transparent 28%)!important}
.finalHomeHero{background:rgba(3,31,43,.22)!important}
.homeBgImage{background:url('/assets/sustain-ai-background.svg') center center/cover no-repeat!important;opacity:.92!important;mix-blend-mode:normal!important;animation:heroBgMove 18s ease-in-out infinite alternate!important}
.section{background:linear-gradient(135deg,rgba(3,38,54,.38),rgba(4,94,91,.28)),url('/assets/sustain-ai-background.svg') center center/cover fixed!important}
.trackSection{background:linear-gradient(135deg,rgba(3,38,54,.38),rgba(4,94,91,.28)),url('/assets/sustain-ai-background.svg') center center/cover fixed!important}
.homeLogo{background:rgba(255,255,255,.12);border-radius:16px}
.homeLogo img{width:175px!important;height:240px!important;object-fit:contain!important}
.homePartners img:first-child{width:125px!important;height:105px!important}.homePartners img:last-child{width:175px!important;height:54px!important}
.partnerLogos img:last-child{height:48px!important;width:auto!important}
`}</style>}
