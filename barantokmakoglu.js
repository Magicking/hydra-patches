// Magic
await loadScript('https://cdn.jsdelivr.net/npm/hydra-midi@latest/dist/index.js')
await midi.start().show()

await loadScript('https://h.6120.eu/hydra-fractals.js')
await loadScript('https://h.6120.eu/hydra-outputs.js')
await loadScript('https://h.6120.eu/hydra-colorspaces.js')
await loadScript('https://h.6120.eu/hydra-canvas.js')
//2054 x 2518,
setResolution(2054, 2518)
//setResolution(2256, 1504)
canvas.setRelativeSize(1)
//canvas.setAlign("right")
//canvas.setFullscreen()

//s0.initCam()
s0.initImage('https://6120.eu/public/rats-barantokmakoglu.png')
s = 0.39
src(s0)
  .scale(s)
  .scroll(
    () => cc(1)() * 2,
    () => cc(0)() + a.fft[0] / 200
  )
  .out(o0)
render(o0)

src(o1)
  .blend(src(o0), () => 1 - a.fft[1])
  .out(o1)

a.setSmooth(0.05)
a.setBins(4)
a.show()
