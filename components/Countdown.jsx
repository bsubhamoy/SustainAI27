'use client';
import {useEffect,useState} from 'react'; import {eventConfig as e} from '../lib/config';
export default function Countdown(){const [d,setD]=useState([0,0,0,0]);useEffect(()=>{const f=()=>{let x=Math.max(0,new Date(e.countdownISO)-Date.now());setD([Math.floor(x/864e5),Math.floor(x/36e5)%24,Math.floor(x/6e4)%60,Math.floor(x/1e3)%60])};f();const i=setInterval(f,1000);return()=>clearInterval(i)},[]);return <div className="count">{d.map((x,i)=><div key={i}><b>{String(x).padStart(2,'0')}</b><span>{['Days','Hours','Minutes','Seconds'][i]}</span></div>)}</div>}
