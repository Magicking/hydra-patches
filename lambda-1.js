// License Beerware
// Sylvain "Magicking" Laurent

setResolution(2500, 2500)
// Use midi messages from all channels of all inputs.
await midi.start().show()
a.show()

shape([3, 4, 11, 22].fast(), () => a.fft[0] / 3)
  .color(
    () => a.fft[0] / 2,
    () => a.fft[1] / 2,
    () => a.fft[3] / 2
  )
  .scroll(
    () => a.fft[0],
    () => a.fft[3]
  )
  .add(src(o0), 0.98)
  //blend(src(o1), 0.9).
  .repeat(1.1, 1.1)
  .out(o0)
