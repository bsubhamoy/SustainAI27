import Image from 'next/image';
import Link from 'next/link';
import Countdown from '../components/Countdown';

const tracks=[
['01','Energy-Efficient AI Systems','Model architectures, training methods, and inference techniques designed to reduce compute and energy demand.'],
['02','Green Data Centers & Hardware','Renewable-powered facilities, liquid cooling, and hardware design for lower-carbon computing infrastructure.'],
['03','Carbon-Aware Computing','Workload scheduling, resource allocation, and systems that adapt to carbon intensity and grid conditions.'],
['04','AI for Climate & Environment','Applications of AI in climate modeling, ecological monitoring, and environmental resource management.'],
['05','Lifecycle & Carbon Accounting','Embodied-carbon measurement and lifecycle assessment methods for AI hardware and systems.'],
['06','Policy, Standards & Reporting','Governance frameworks and reporting standards that make sustainability commitments verifiable.']
];

export default function Home(){return <>
<section className="finalHomeHero">
<div className="homeGlow homeGlowA"/><div className="homeGlow homeGlowB"/><div className="homeCircuits"><span/><span/><span/><span/><span/></div>
<div className="wrap finalHomeWrap">
<div className="homeKicker">INTERNATIONAL CONFERENCE • SYDNEY, AUSTRALIA</div>
<h1>Sust<span>@inAI</span> <b>27</b></h1>
<h2>International Conference on<br/>Sustainable Artificial Intelligence and Green Computing</h2>
<div className="homeRibbon">AI AND GREEN COMPUTING</div>
<div className="homeMeta"><strong>20th April to 22nd April, 2027</strong><i/><strong>Sydney, Australia</strong></div>
<div className="homeInfo">
<div className="homeIntro"><div className="homeLogo"><Image src="/sustainai-at-logo.png" alt="Sust@inAI 27 logo" width={220} height={280} priority/></div><div className="homeIntroText"><div className="homeLabel">CONFERENCE INTRODUCTION</div><h3>Intelligence that works with the planet.</h3><p><b>Sust@inAI 27</b> is the International Conference on Sustainable Artificial Intelligence and Green Computing, bringing the AI and sustainable-computing communities together around one question: <b>how do we advance artificial intelligence without accelerating its environmental cost?</b></p><p>The conference welcomes work spanning energy-efficient AI systems, green computing infrastructure, and AI applied to environmental challenges — alongside the policy and reporting standards needed to make sustainability claims verifiable, taking place in Sydney from <b>20th–22nd April, 2027.</b></p></div></div>
<div className="homeCountdown"><div className="homeLabel">◷ &nbsp; COUNTDOWN TO SUST@INAI 27</div><Countdown/><div className="homePartners"><Image src="/iem-logo.png" alt="Institute of Engineering and Management" width={150} height={70}/><Image src="/smart-society-logo.jpg.jpeg" alt="SMART Society" width={150} height={60}/></div></div>
</div>
<div className="homeTiles"><Link href="/tracks"><span className="tileIcon">▱</span><span><b>06</b><strong>Conference Tracks</strong><small>Explore the key focus areas</small></span><em>›</em></Link><Link href="/dates"><span className="tileIcon">▣</span><span><b className="dateTile">20th–22nd April</b><strong>Conference Dates</strong><small>Mark your calendar</small></span><em>›</em></Link><Link href="/registration"><span className="tileIcon">✦</span><span><b className="dateTile">02 February 2027</b><strong>Early Bird Registration</strong><small>Save your place early</small></span><em>›</em></Link></div>
</div></section>
<section className="section trackSection"><div className="wrap"><div className="sectionHead"><div><div className="eyebrow">THE PROGRAMME</div><h2>Six pathways to<br/><em>greener intelligence.</em></h2></div><Link className="textLink" href="/tracks">View all tracks <span>↗</span></Link></div><div className="trackGrid">{tracks.map(([n,t,c])=><Link className="trackCard" href="/tracks" key={n}><span className="trackNumber">{n}</span><h3>{t}</h3><p>{c}</p><span className="cardArrow">↗</span></Link>)}</div></div></section>
</>}
