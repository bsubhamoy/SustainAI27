import Link from 'next/link';
const links=[['/','Home'],['/tracks','Call for Papers & Tracks'],['/keynote','Keynote'],['/speakers','Speakers'],['/committee','Committee'],['/dates','Important Dates'],['/registration','Registration'],['/venue','Venue'],['/sponsors','Sponsors'],['/contact','Contact']];
export default function Nav(){return <header className="nav"><div className="wrap navin"><Link className="brand" href="/"><span>Sust</span><b>@inAI</b> 27<small>International Conference • Sydney 2027</small></Link><nav>{links.map(([h,t])=><Link key={h} href={h}>{t}</Link>)}</nav></div></header>}
