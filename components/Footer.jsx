import {eventConfig as e} from '../lib/config';
export default function Footer(){return <footer><div className="wrap foot"><div><strong>{e.name}</strong><div>{e.dateDisplay} · {e.city}</div></div><div>{e.organizer}</div></div></footer>}
