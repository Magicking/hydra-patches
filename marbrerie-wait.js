i = 0

if (Date.now() > new Date(2026, 7, 29, 19, 0, 0).getTime()) i++
if (Date.now() > new Date(2026, 7, 29, 20, 0, 0).getTime()) i++
if (Date.now() > new Date(2026, 7, 29, 20, 45, 0).getTime()) i++
if (Date.now() > new Date(2026, 7, 29, 22, 15, 0).getTime()) i++
if (Date.now() > new Date(2026, 7, 29, 23, 15, 0).getTime()) i++
if (Date.now() > new Date(2026, 7, 30, 2, 30, 0).getTime()) i++
console.log(i)
render(o0)

await loadScript('https://h.6120.eu/hydra-fractals.js')
await loadScript('https://h.6120.eu/hydra-outputs.js')
await loadScript('https://h.6120.eu/hydra-colorspaces.js')
await loadScript('https://h.6120.eu/hydra-text.js')
hydraText.font = 'Roboto'
hydraText.lineWidth = '3%'
slide = [
  {
    t: 'Mélissa.wav',
  },
  {
    t: 'Liyom',
  },
  {
    t: 'Lapin 2 Trèfle',
  },
  {
    t: ' ~JAM~ \n Montreuil Record \n FuZ6TeM',
  },
  {
    t: ' Damir ',
  },
  {
    t: 'FuZ6TeM',
  },
]
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
src(o0)
  .scale(0.75)
  .add(noise(3, 1).color(0.1, 0.1, 0.1), 1.5)
  .add(
    gradient()
      .rgb.aSet(0)
      .cmyk.from()
      .hsv.hOffsetFrom(noise(3), 0.3)
      .yuv(0.3, 0.2)
      .mask(shape(2).scale(1.5))
  )
  .invert()
  .mirrorY2()
  .blend(o0, 1)

shape(2, 0.1)
  .blend(src(o0).scale(0.02).color(0.1, 0.1, 0.7))
  .layer(text(slide[i].t))
  .diff(
    strokeText(slide[i].t).modulateScale(osc(0.5, 0.1, 10).colorama(2), 0.3)
  )
  .diff(src(o0).colorama([-1, 1].smooth()).repeat(1, 3))
  .invert(-1)
  .out(o0)
