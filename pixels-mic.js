// Beerware (c) Sylvain "Magicking" Laurent

shape([4, 5])
  .rotate(() => time)
  .diff(
    shape([5, 6])
      .rotate(() => time * -1)
      .scale(() => 1.9 * a.fft[0])
  )
  .pixelate()
  .out(o0)
a.show()
