bpm = 220
osc()
  .scale(() => a.fft[0])
  .color([1], [1, 0], 0)
  .blend(osc(30, 0.1).color(0.8, 0.8, 0))
  .add(shape([3, 42, 3].smooth()).scale(() => a.fft[1] * 3))
  .diff(shape([3, 42, 3].smooth()).scale(() => a.fft[1] * 1.3))
  .diff(shape([3, 42, 3].smooth()).scale(() => a.fft[1] * 1.1))
  .repeat([3, 4], [3, 4])
  .blend(o0, 0.6)
  .out()

a.show()
