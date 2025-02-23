// License Beerware
// Author Magic S.L.
osc(()=>100+50*a.fft[0],[0, 0.001]) // Bass rythm
  .kaleid(100) // Speaker effect
  .diff(solid(()=>a.fft[4],()=>a.fft[3],()=>a.fft[2])) // Color speaker using medium and trebles volume
  .out()
a.setScale(5) // Set to current sound
a.setSmooth(0.01) // Fast reaction
a.setBins(5) // Separate sound in 5 bands lower is bass with 1 unused band
a.show()
