"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{1578:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=a(9268),i=a(6006),l=a(6758),n=a(8482);function c(e){let{State:t,setState:a,children:i}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"fixed z-50 inset-0 flex items-center justify-center p-6",children:[(0,s.jsx)(n.E.div,{animate:{opacity:[0,1]},exit:{opacity:0},onClick:()=>a(!t),className:"fixed inset-0 z-10 bg-black/40"}),(0,s.jsx)(n.E.div,{className:"relative z-20",animate:{scale:[.9,1],opacity:[.5,1]},exit:{scale:.9,opacity:.5},children:i})]})})}var r=a(7743);function d(e){let{State:t,setState:a,Adults:d,setAdults:o,Children:m,setChildren:x,Babies:h,setBabies:u}=e,[f,j]=(0,i.useState)(!0);return(0,s.jsx)(c,{State:t,setState:a,children:(0,s.jsxs)("div",{className:"bg-white max-w-[50em] transition-all sm:min-w-[25em] rounded shadow-xl py-4 px-5 ",children:[(0,s.jsx)("div",{className:"text-2xl font-bold",children:"Passengers"}),(0,s.jsx)("div",{className:"w-full h-[.03em] my-4 bg-zinc-200 rounded-full"}),(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[[{name:"adults",age:"more than 12 years old",state:d,setState:o,min:1},{name:"children",age:"2-12 years old",state:m,setState:x,min:0},{name:"babies",age:"0-2 years old",state:h,setState:u,min:0}].map((e,t)=>(0,s.jsxs)("div",{className:"flex gap-8 justify-between items-center",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"font-bold capitalize",children:e.name}),(0,s.jsx)("div",{className:"text-xs text-zinc-500",children:e.age})]}),(0,s.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,s.jsx)("button",{className:"w-10 h-10 rounded-full border active:scale-90 transition-all hover:bg-zinc-200 flex items-center justify-center cursor-pointer",onClick:()=>{e.setState(e.state+1),j(!0)},children:(0,s.jsx)(l.poH,{})}),(0,s.jsx)("div",{className:"w-5 h-6 relative",children:(0,s.jsx)(r.M,{children:(0,s.jsx)(n.E.div,{className:"absolute ".concat(e.state<10&&"!left-1.5"," left-0.5"),initial:{translateY:f?20:-20,opacity:.5,scale:.4},animate:{translateY:0,opacity:1,scale:1},exit:{translateY:f?-20:20,opacity:0,scale:.4},children:e.state},e.state)})}),(0,s.jsx)("button",{className:"w-10 h-10 rounded-full border active:scale-90 transition-all hover:bg-zinc-200 flex items-center justify-center cursor-pointer",onClick:()=>{j(!1),e.setState(e.state>e.min?e.state-1:e.min)},children:(0,s.jsx)(l.pwh,{})})]})]},t+e.name)),(0,s.jsx)("button",{onClick:()=>a(!t),className:"p-2 font-bold text-white rounded bg-orange-600 active:scale-95 transition-all active:bg-orange-500 mt-3",children:"Done"})]})]})})}}}]);