// License Beerware
// Author Magic S.L.
/*
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
*/
vn=20
sn=45
shape(vn,     1/sn).color(1,0,0).scroll(()=>time/sn,      ()=>time/sn).rotate(()=>time/sn).
diff(shape(vn, 1/sn).color(0,1,0).scroll(()=>time/1/sn, ()=>time/1/sn).rotate(()=>time/1+a.fft[0])).
diff(shape(vn, 2/sn).color(0,0,1).scroll(()=>time/2/sn, ()=>time/2/sn).rotate(()=>time/2-a.fft[1])).
diff(shape(vn, 3/sn).color(1,0,0).scroll(()=>time/3/sn, ()=>time/3/sn).rotate(()=>time/3+a.fft[2])).
diff(shape(vn, 4/sn).color(0,1,0).scroll(()=>time/4/sn, ()=>time/4/sn).rotate(()=>time/4-a.fft[3])).
diff(shape(vn, 5/sn).color(0,0,1).scroll(()=>time/5/sn, ()=>time/5/sn).rotate(()=>time/5-a.fft[0])).
diff(shape(vn, 6/sn).color(0,1,1).scroll(()=>time/6/sn, ()=>time/6/sn).rotate(()=>time/6+a.fft[1])).
diff(shape(vn, 7/sn).color(1,0,1).scroll(()=>time/7/sn, ()=>time/7/sn).rotate(()=>time/7-a.fft[2])).
diff(shape(vn, 8/sn).color(1,1,0).scroll(()=>time/8/sn, ()=>time/8/sn).rotate(()=>time/8+a.fft[3])).
diff(shape(vn, 9/sn).color(1,1,1).scroll(()=>time/9/sn, ()=>time/9/sn).rotate(()=>time/9+a.fft[0])).
scale(0.3).
out()
a.setSmooth(0.8)
