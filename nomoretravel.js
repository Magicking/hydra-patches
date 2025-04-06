i="https://g.6120.eu/nomoretravel.jpg"
s0.initImage(i)
src(s0).scale(()=>0.7-a.fft[0]*3).rotate(()=>a.fft[0]+2.90).diff(shape(5).scale(10).color(0.1,0.9,0.1)).
  diff(osc(10, 0.2, ()=>Math.sin(a.fft[0])*Math.PI*2)).out()
a.show()
a.setSmooth(0.2)
