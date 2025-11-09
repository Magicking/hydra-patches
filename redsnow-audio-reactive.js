shape(99, 0.4)
  .color(1, 0, 0)
  .add(
    shape(3).rotate(() => Math.sin(time / 500) * 360 + 45),
    1
  )
  .add(
    shape(3).rotate(() => -Math.sin(time / 500) * 360 + 45),
    1
  )
  .scroll([0.1, 0.9].ease('easeInCubic'), [0.1, 0.9].smooth())
  .scale(() => a.fft[0] * 2 + 0.1)
  .out(o1)
src(o1)
  .repeat([20], [20])
  .mask(
    shape(99)
      .scroll(
        () => 0.1 * Math.random() + a.fft[0] / 3,
        () => 0.01 * Math.random() + a.fft[1] / 3
      )
      .add(shape(2, 0.1).scroll(0, [0.35, 0.6].ease('easeInQuad')))
  )
  .add(src(o1).scale(0.8).scroll(0.3, 0.3))
  .out()
a.show()
