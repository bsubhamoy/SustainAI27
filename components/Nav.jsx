import Link from 'next/link';
import Image from 'next/image';

const links=[['/tracks','Tracks'],['/keynote','Keynote'],['/speakers','Speakers'],['/dates','Important dates'],['/venue','Venue']];

export default function Nav(){return <header className="nav"><div className="wrap navin"><Link className="brand" href="/"><span>Sust</span><b>@inAI</b><strong>27</strong><small>International conference on sustainable AI</small></Link><nav aria-label="Main navigation">{links.map(([h,t])=><Link key={h} href={h}>{t}</Link>)}<Link className="navCta" href="/registration">Register now</Link></nav><div className="partnerLogos" aria-label="Conference partners"><Image src="/smart-society-logo.jpg.jpeg" alt="Smart Society" width={160} height={60}/><Image src="/iem-logo.png" alt="Institute of Engineering & Management" width={90} height={90}/></div></div></header>}
