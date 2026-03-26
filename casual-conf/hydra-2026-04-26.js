// License Beerware
i = 0 // Slide de 0 à 5
// Avant de passer de slide
// Naviguer sur les liens si présent

a.show()
voronoi(2)
  .color(
    () => a.fft[1],
    () => a.fft[2],
    () => a.fft[3]
  )
  .out(o1)
src(o2).out(o0)
src(o1).diff(o0).blend(o1).out(o2)
render(o3)

setResolution(1000, 1000)
await loadScript('https://h.6120.eu/hydra-text.js')
hydraText.font = 'Roboto'
hydraText.lineWidth = '5%'
slide = [
  {
    t: 'Le Livecoding ?',
    l0: 'Une pratique artistique',
    l2: 'écrivent et exécutent du code\n en temps réel \n créer de la musique,',
    l1: "des visuels ou d'autres     \n     formes d'expression.",
    l3: ' ',
    /**/
  },
  {
    t: 'Livecoding audio',
    l0: ' Exemple de livecoding audio            ',
    l1: '             Norns - Un ordinateur à son         ',
    l2: "     Norns est un ensemble\nd'instrument electronique sonores                      ",
    l3: '   Communauté    ',
    /**/
  },
]
ts = 1
shape(2)
  .layer(src(o2))
  .layer(
    text(slide[i].t)
      .color(
        Math.abs(Math.cos(i)),
        Math.abs(Math.sin(i)),
        Math.abs(Math.tan(i))
      )
      .scroll(0.2, 0.7)
      .scale(1)
  )
  .layer(
    text(slide[i].l0)
      .color(
        Math.abs(Math.cos(i + Math.PI * 3.14)),
        Math.abs(Math.sin(i + Math.PI * 3.14)),
        Math.abs(Math.tan(i + Math.PI * 3.14))
      )
      .scroll(0.18, 0.5)
      .scale(ts)
  )
  .layer(
    text(slide[i].l1)
      .color(
        Math.abs(Math.cos(i + Math.PI * 2.14)),
        Math.abs(Math.sin(i + Math.PI * 2.14)),
        Math.abs(Math.tan(i + Math.PI * 2.14))
      )
      .scroll(0.18, 0.3)
      .scale(ts)
  )
  .layer(
    text(slide[i].l2)
      .color(
        Math.abs(Math.cos(i + Math.PI * 1.14)),
        Math.abs(Math.sin(i + Math.PI * 1.14)),
        Math.abs(Math.tan(i + Math.PI * 1.14))
      )
      .scroll(0.18, 0.1)
      .scale(ts)
  )
  .layer(
    text(slide[i].l3)
      .color(
        Math.abs(Math.cos(i * Math.PI * 3.14)),
        Math.abs(Math.sin(i * Math.PI * 3.14)),
        Math.abs(Math.tan(i * Math.PI * 3.14))
      )
      .scroll(0.18, 0.9)
      .scale(ts)
  )
  .scroll(() => time / 100)
  .out(o3)
