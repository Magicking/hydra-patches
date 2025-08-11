await loadScript('https://h.6120.eu/hydra-fractals.js')
await loadScript('https://h.6120.eu/hydra-outputs.js')
await loadScript('https://h.6120.eu/hydra-colorspaces.js')

//oS.setLinear()
oS.setNearest()
bpm = 140
src(o0)
  .scale(0.75)
  .add(
    noise(3, 1).color(
      () => a.fft[3] * 0.3,
      () => a.fft[3] * 0.3,
      () => a.fft[3] * 0
    ),
    () => a.fft[0] * 1.5
  )
  .add(
    gradient()
      .rgb.aSet(0)
      .cmyk.from()
      .hsv.hOffsetFrom(noise(3), 0.3)
      .yuv(0.5, 0.2)
      .mask(shape(2).scale(() => a.fft[0] * 1.5))
  )
  .invert()
  .mirrorY2()
  .blend(o1, 0.3)
  .out(o1)

hydraText.font = 'serif'
hydraText.lineWidth = '2%'
str = ' CARBON BASED LIFEFORM'
shape(2, 0.1)
  .blend(src(o0).scale(1.02).color(1, 1, 1))
  .layer(text(str))
  .diff(
    strokeText(str).modulateScale(
      osc(0.5, () => a.fft[0] / 10).colorama(() => a.fft[0]),
      0.3
    )
  )
  .diff(src(o0).colorama([-1, 1].smooth()).repeat(1, 3))
  .scrollX(() => a.fft[1] / 25)
  .scrollY(() => a.fft[0] / 9)
  .out()

render(o1)

a.show()
a.setScale(8)
