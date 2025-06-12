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
a.show()
a.setSmooth(0.1)
