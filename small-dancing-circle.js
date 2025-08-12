// Beerware
// Sylvain "Magicking" Laurent
// Fuz.re




osc(()=>30+a.fft[0],0.1,1).color(1,0,1).rotate(Math.PI*1/2)
  .diff(shape([6].smooth(),()=>a.fft[0]/1.4)
        .rotate(()=>time/10)
       )
  .modulateRotate(noise([2,3].smooth()))
  .blend(o0,0.6)
  .repeat([1.2,0.9].smooth(0.8),[0.9,1.2].smooth(0.2))
  .out()
src(o0).out(o1)
src(o1).diff(o0).mult(solid(3,3,3)).out(o2)
render(o2)
a.show()
a.setScale(2.5)
a.setBins(10)