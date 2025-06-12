vn = 20
sn = 45
shape(vn, 1 / sn)
  .color(1, 0, 0)
  .scroll(
    () => time / sn,
    () => time / sn
  )
  .rotate(() => time / sn)
  .diff(
    shape(vn, 1 / sn)
      .color(0, 1, 0)
      .scroll(
        () => time / 1 / sn,
        () => time / 1 / sn
      )
      .rotate(() => time / 1 + a.fft[0])
  )
  .diff(
    shape(vn, 2 / sn)
      .color(0, 0, 1)
      .scroll(
        () => time / 2 / sn,
        () => time / 2 / sn
      )
      .rotate(() => time / 2 - a.fft[1])
  )
  .diff(
    shape(vn, 3 / sn)
      .color(1, 0, 0)
      .scroll(
        () => time / 3 / sn,
        () => time / 3 / sn
      )
      .rotate(() => time / 3 + a.fft[2])
  )
  .diff(
    shape(vn, 4 / sn)
      .color(0, 1, 0)
      .scroll(
        () => time / 4 / sn,
        () => time / 4 / sn
      )
      .rotate(() => time / 4 - a.fft[3])
  )
  .diff(
    shape(vn, 5 / sn)
      .color(0, 0, 1)
      .scroll(
        () => time / 5 / sn,
        () => time / 5 / sn
      )
      .rotate(() => time / 5 - a.fft[0])
  )
  .diff(
    shape(vn, 6 / sn)
      .color(0, 1, 1)
      .scroll(
        () => time / 6 / sn,
        () => time / 6 / sn
      )
      .rotate(() => time / 6 + a.fft[1])
  )
  .diff(
    shape(vn, 7 / sn)
      .color(1, 0, 1)
      .scroll(
        () => time / 7 / sn,
        () => time / 7 / sn
      )
      .rotate(() => time / 7 - a.fft[2])
  )
  .diff(
    shape(vn, 8 / sn)
      .color(1, 1, 0)
      .scroll(
        () => time / 8 / sn,
        () => time / 8 / sn
      )
      .rotate(() => time / 8 + a.fft[3])
  )
  .diff(
    shape(vn, 9 / sn)
      .color(1, 1, 1)
      .scroll(
        () => time / 9 / sn,
        () => time / 9 / sn
      )
      .rotate(() => time / 9 + a.fft[0])
  )
  .scale(0.3)
  .blend(o0, [0.6, 0.8, 0.7, 0.5].fast())
  .out()
bpm = 140
a.show()
a.setSmooth(0.2)
// Beerware
// Sylvain "Magicking" Laurent
await loadScript('https://hyper-hydra.glitch.me/hydra-fractals.js')
await loadScript('https://hyper-hydra.glitch.me/hydra-outputs.js')
await loadScript('https://hyper-hydra.glitch.me/hydra-colorspaces.js')

//oS.setLinear()
oS.setNearest()
bpm = 140
src(o1)
  .scale(0.75)
  .add(noise(3, 1).color(0.3, 0.3, 0.8), () => a.fft[0] * 1.5)
  .add(
    gradient()
      .rgb.aSet(0)
      .cmyk.from()
      .hsv.hOffsetFrom(noise(3), 0.3)
      .yuv(0.5, 0.2)
      .mask(shape(3).scale(() => a.fft[0] * 1.5))
  )
  .invert()
  .mirrorY2()
  .mirrorX2()
  .blend(o1, 0.3)
  .modulate(src(o0))
  .out(o1)
render(o1)
a.show()
a.setBins(4)
a.setSmooth(0.3)
a.setScale(8)
a.setCutoff(1)
