shape(20)
  .color(
    () => a.fft[3],
    [0, 1].smooth(0.8),
    () => Math.sin(time)
  )
  .mask(src(o0))
  .diff(shape(99, 0.3))
  .scale([1.3, 1.2, 1.5, 1.2, 1.6].smooth())
  .blend(src(o0).scale(() => -a.fft[0] / 3 + 0.6))
  .out(o0)

s1.initImage('http://127.0.0.1:8080/rats-barantokmakoglu.png')

bpm = 170

a.show()
a.setSmooth(0.2)
// Beerware
// Sylvain "Magicking" Laurent
await loadScript('http://127.0.0.1:8080/hydra-fractals.js')
await loadScript('http://127.0.0.1:8080/hydra-outputs.js')
await loadScript('http://127.0.0.1:8080/hydra-colorspaces.js')
await loadScript('http://127.0.0.1:8080/index.js')
oS.setNearest()
src(o0)
  .scale(0.75)
  .add(noise(3, 1).color(0.3, 0.3, 0.8), () => a.fft[0] * 3.5)
  .add(
    gradient()
      .rgb.aSet(0)
      .cmyk.from()
      .hsv.hOffsetFrom(noise(3), 0.3)
      .yuv(0.5, 0.2)
      .mask(shape(3).scale(() => a.fft[0] * 3.5))
  )
  .invert()
  .mirrorY2()
  .mirrorX2()
  .blend(o0, 0.3)
  .out(o3)
await midi.start().show()
//oS.setLinear()
//oS.setNearest()
bpm = 140
src(s1)
  .scale(() => a.fft[2])
  .blend(o0, () => a.fft[3])
  .blend(osc(1), note(48))
  .blend(osc(1, 0).color(1, 0, 0), note(53))
  .blend(osc(1, 0).color(0, 1, 0), note(50))
  .blend(osc(1, 0).color(0, 0, 1), note(52))
  .blend(src(o3), note(55))
  .blend(src(s0).diff(o2), note(49))
  .out(o1)
src(s0).out(o2)
render(o1)
a.show()
a.setBins(4)
a.setSmooth(0.3)
a.setScale(8)
a.setCutoff(1)

// Beerware
// Sylvain "Magicking" Laurent
s0.initCam()
// License Beerware
// Author Magic SL

c = 0
bpm = 180
crown = new Array(13).fill().reduce(
  (acc, e) =>
    acc.add(
      shape(3, 0.2, 0.2)
        .color(0.9, 0.6, 0.3)
        .rotate((c += 10), 0.1)
    ),
  solid()
)
crown
  .layer(
    noise().mask(
      noise(20).modulate(
        noise(10).luma(0.9, () => a.fft[3] * 2),
        0.2
      )
    )
  )
  .rotate(2)
  .add(osc(2, 0.01, () => Math.cos(time / 1000) * Math.PI))
  .modulate(osc(() => a.fft[1] / 1000))
  .out(o3)
