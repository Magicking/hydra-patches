// Beerware 
// Sylvain "Magicking" Laurent

noise(4).color(()=>Math.sin(time),()=>Math.cos(time),()=>Math.sin(time)).pixelate()
  .modulate(noise().scale(()=>a.fft[0]))
  .mask(shape([4,5,6].smooth(),0.9).rotate(()=>time).repeatX(6).repeatY(6).modulate(noise(()=>a.fft[3]*4)))
  .out()
a.show()
a.setBins(4)
a.setScale(6)
a.setCutoff(1)
