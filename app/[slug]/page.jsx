import {eventConfig as e} from '../../lib/config';
const data={
 about:['CONFERENCE OVERVIEW','Sustainable AI for a greener future','Sust@inAI 27 brings together researchers, engineers, practitioners and policymakers to explore how artificial intelligence can advance while reducing environmental cost.'],
 keynote:['KEYNOTE','Keynote Speakers','Keynote speaker information will be published as confirmations are received. This page is ready for names, affiliations, photographs and abstracts.'],
 speakers:['SPEAKERS','Speakers','Invited and contributed speakers will be listed here with affiliations, session information and biographies.'],
 committee:['COMMITTEE','Organizing Committee','The organizing and scientific committees will be published here as the conference team is finalized.'],
 dates:['IMPORTANT DATES','Conference Timeline','Conference: 20–22 April 2027. Early bird registration: 02 February 2027. Submission and review milestones will be added when confirmed.'],
 registration:['REGISTRATION','Registration','Registration categories, fees and payment instructions will be added when confirmed.'],
 venue:['VENUE','Sydney, Australia','Sust@inAI 27 will take place in Sydney, Australia. Detailed venue information, travel guidance and accommodation recommendations can be added here.'],
 sponsors:['SPONSORS','Sponsors & Partners','Organizations supporting Sust@inAI 27 will be featured here as partnerships are confirmed.'],
 contact:['CONTACT','Contact the Conference',`For conference enquiries and partnership discussions, contact ${e.email1} or ${e.email2}.`]
};
export default async function Page({params}){const{slug}=await params;const d=data[slug]||['SUST@INAI 27',slug.replaceAll('-',' '),'Conference information will be published here.'];return <section className="section"><div className="wrap"><div className="eyebrow">{d[0]}</div><h1>{d[1]}</h1><p className="lead">{d[2]}</p><div className="cards"><div className="card"><span className="tag">Conference</span><h3>{e.dateDisplay}</h3><p>{e.city}</p></div><div className="card"><span className="tag">Organizer</span><h3>{e.organizer}</h3><p>Official conference information.</p></div><div className="card"><span className="tag">Contact</span><h3>{e.email1}</h3><p>{e.email2}</p></div></div></div></section>}
