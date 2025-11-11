setResolution(2000, 2000)
shape(2, () => a.fft[0] + 0.3)
  .repeat(3, 6)
  .modulate(noise(() => a.fft[0]))
  .color(1, 0, 2)
  .mask(voronoi(3).scale(() => a.fft[0]))
  .out(o1)
src(o1).out(o2)
src(o1)
  .diff(o2)
  .mult(
    solid(
      [0, 1, 2].smooth(),
      [0, 0.3, 0.4, 0.6, 0.8, 0.9, 1].smooth(0.2),
      [1, 2, 0].smooth()
    )
  )
  .mult(
    solid(
      () => 1 - a.fft[1],
      () => 1 - a.fft[2],
      () => 1 - a.fft[3]
    )
  )
  .blend(o0, 0.6)
  .saturate(1.5)
  .out(o0)
a.setSmooth(0.6)
