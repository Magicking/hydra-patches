c = 0
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
  .layer(voronoi().mask(noise(20).modulate(noise(10).luma(0.4, 0.9), 0.2)))
  .layer(
    src(s0)
      .mask(shape(99, 0.6))
      .scale([0.6, 0.72, 0.7, 0.6, 0.62, 0.7].smooth()),
    0.4
  )
  .out()

s0.initImage('https://6120.eu/public/wichel.jpg')
