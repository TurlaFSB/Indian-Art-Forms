import React,{useEffect,useState}from"react";
import {gsap}from"gsap";
export default function Loading({onDone}){
 const[p,setP]=useState(0);
 useEffect(()=>{let v=0;const id=setInterval(()=>{v+=Math.random()*13+4;if(v>=100){v=100;clearInterval(id);setTimeout(onDone,350)}setP(Math.floor(v))},75);return()=>clearInterval(id)},[]);
 return <div className="loading"><div className="loading-mark">LC</div><div className="loading-center"><div className="loading-title">THE <em>LIVING</em> CANVAS</div><div className="loading-track"><i style={{width:`${p}%`}}/></div><div className="loading-meta"><span>PREPARING COLLECTION</span><b>{p}%</b></div></div><div className="loading-footer">INDIAN ART / GEOGRAPHY / MEMORY</div></div>
}