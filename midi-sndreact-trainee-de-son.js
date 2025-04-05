// License Beerware
// Sylvain "Magicking" Laurent
// Midi controlling with note cc
await loadScript('https://cdn.jsdelivr.net/npm/hydra-midi@latest/dist/index.js')
await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-fractals.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-outputs.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-colorspaces.js")

// Use midi messages from all channels of all inputs.
await midi.start().show()
a.show()
noise(50, cc(0))
  // Use any note on the seaboard to modulate the threshold.
  .thresh(note(112).adsr().scale(0.6), 0.1)
  // Use the first 3 faders (which happen to be CCYY–CCXX) of the
  // faderfox to mix a color.
  .color(cc(0), cc(1), cc(2))
  .mult(voronoi().scroll(()=>a.fft[0]+0.5,()=>a.fft[3]+0.5))
  .diff(src(o1))
  .out()

shape([3,4,11,22].fast(),()=>a.fft[0]/3).color(()=>a.fft[0]/2,()=>a.fft[1]/2,()=>a.fft[3]/2).scroll(()=>a.fft[0],()=>a.fft[3]).
  add(src(o1),cc(115).range(0.90,0.98)).
  //blend(src(o1), 0.9).
  out(o1)
