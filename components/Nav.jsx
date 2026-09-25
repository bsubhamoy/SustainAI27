import Link from 'next/link';
import Image from 'next/image';

const links=[['/','Home'],['/tracks','Call for Papers & Tracks'],['/keynote','Keynote'],['/speakers','Speakers'],['/committee','Committee'],['/dates','Important Dates'],['/registration','Registration'],['/venue','Venue'],['/sponsors','Sponsors'],['/contact','Contact']];

export default function Nav(){return <header className="nav"><div className="wrap navin"><Link className="brand" href="/"><span>Sust</span><b>@inAI</b><strong>27</strong><small>International conference on sustainable AI</small></Link><nav aria-label="Main navigation">{links.map(([h,t])=><Link key={h} href={h}>{t}</Link>)}</nav><div className="partnerLogos" aria-label="Conference partners"><Image src="/assets/smart-society-logo.svg" alt="Smart Society" width={120} height={37}/><Image src="/assets/iem-logo.svg" alt="Institute of Engineering & Management" width={70} height={59}/></div></div></header>}
