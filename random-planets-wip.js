// License Beerware
// Author Magic S.L.
vn=20
ns=20
clr = new Array(ns).fill().map(()=>(x)=>x.color(Math.random(),Math.random(),Math.random()))
console.log(clr)
c = new Array(ns).fill().reduce(
(a,e)=>
  [clr[a[1]-1](shape(vn, a[1]/ns/3)).
   scroll(()=>time/a[1]/10,()=>time/a[1]/10).
   rotate(()=>time/a[1]).
   diff(a[0]), a[1]+1],
  [shape(vn).color(1,0,0),1]
)
c[0].out()
