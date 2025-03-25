// Beerware 
// Sylvain "Magicking" Laurent
await loadScript("https://hyper-hydra.glitch.me/hydra-fractals.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-outputs.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-colorspaces.js")

//oS.setLinear()
oS.setNearest()
bpm=140
src(o0)
.scale(.75)
.add(noise(3,1).color(0.3,0.3,0.8),()=>a.fft[0]*1.5)
.add(gradient().rgb.aSet(0)
.cmyk.from()
.hsv.hOffsetFrom(noise(3),.3)
.yuv(0.5,.2).mask(
shape(3).scale(()=>a.fft[0]*1.5))
).invert().mirrorY2().mirrorX2()
.blend(o0,.3)
.out()
a.show()
a.setBins(4)
a.setSmooth(0.3)
a.setScale(8)
a.setCutoff(1)