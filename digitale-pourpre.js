await loadScript('https://hyper-hydra.glitch.me/hydra-text.js')
await loadScript('https://hyper-hydra.glitch.me/hydra-fractals.js')
await loadScript('https://hyper-hydra.glitch.me/hydra-outputs.js')
await loadScript('https://hyper-hydra.glitch.me/hydra-colorspaces.js')
s0.initImage('https://g.6120.eu/qrtwitch.png')

oS.setLinear()
//oS.setNearest()
bpm = 140
shape(4)
  .color(0, 0, 0)
  .scrollX(0.67)
  .scrollY(0.67)
  .add(src(s0).scale(0.35).scrollX(0.67).scrollY(0.67))
  .layer(
    src(o0).mask(
      solid(1, 1, 1, 1).sub(shape(4).color(1, 1, 1).scrollX(0.67).scrollY(0.67))
    )
  )
  .out(o1)

hydraText.font = 'serif'
hydraText.lineWidth = '5%'
str = ' DIGITALE POURPRE '
src(o0)
  .scale(0.75)
  .add(noise(3, 1).color(0.1, 0.1, 0.1), () => a.fft[0] * 1.5)
  .add(
    gradient()
      .rgb.aSet(0)
      .cmyk.from()
      .hsv.hOffsetFrom(noise(3), 0.3)
      .yuv(0.3, 0.2)
      .mask(shape(2).scale(() => a.fft[0] * 1.5))
  )
  .invert()
  .mirrorY2()
  .blend(o0, 1)

shape(2, 0.1)
  .blend(src(o0).scale(1.02).color(0.1, 0.1, 0.7))
  .layer(text(str))
  .diff(
    strokeText(str).modulateScale(
      osc(0.5, () => a.fft[0] / 10).colorama(() => a.fft[0]),
      0.3
    )
  )
  .diff(src(o0).colorama([-1, 1].smooth()).repeat(1, 3))
  .scrollX(() => a.fft[1] / 25 + time / 25)
  .scrollY(() => a.fft[0] / 9 - 0.1)
  .rotate((-Math.PI * 1) / 4)
  .out(o0)

render(o0)

a.show()
a.setScale(8)
