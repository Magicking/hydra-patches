await loadScript('https://6120.eu/public/midi.js')
await loadScript('https://h.6120.eu/hydra-text.js')
await loadScript('https://h.6120.eu/hydra-fractals.js')
await loadScript('https://h.6120.eu/hydra-outputs.js')
await loadScript('https://h.6120.eu/hydra-colorspaces.js')
setResolution(2000, 2000)
oS.setLinear()
await midi.start().show()

a.show()
a.setScale(8)
vn = 10
sn = 45
shape(vn, 1 / sn)
  .color(1, 0, 0)
  .scroll(
    () => time / sn,
    () => time / sn
  )
  .rotate(() => time / sn)
  .diff(
    shape(vn, 1 / sn)
      .color(0, 1, 0)
      .scroll(
        () => time / 1 / sn,
        () => time / 1 / sn
      )
      .rotate(() => time / 1 + a.fft[0])
  )
  .diff(
    shape(vn, 2 / sn)
      .color(0, 0, 1)
      .scroll(
        () => time / 2 / sn,
        () => time / 2 / sn
      )
      .rotate(() => time / 2 - a.fft[1])
  )
  .diff(
    shape(vn, 3 / sn)
      .color(1, 0, 0)
      .scroll(
        () => time / 3 / sn,
        () => time / 3 / sn
      )
      .rotate(() => time / 3 + a.fft[2])
  )
  .diff(
    shape(vn, 4 / sn)
      .color(0, 1, 0)
      .scroll(
        () => time / 4 / sn,
        () => time / 4 / sn
      )
      .rotate(() => time / 4 - a.fft[3])
  )
  .diff(
    shape(vn, 5 / sn)
      .color(0, 0, 1)
      .scroll(
        () => time / 5 / sn,
        () => time / 5 / sn
      )
      .rotate(() => time / 5 - a.fft[4])
  )
  .diff(
    shape(vn, 6 / sn)
      .color(0, 1, 1)
      .scroll(
        () => time / 6 / sn,
        () => time / 6 / sn
      )
      .rotate(() => time / 6 + a.fft[5])
  )
  .diff(
    shape(vn, 7 / sn)
      .color(1, 0, 1)
      .scroll(
        () => time / 7 / sn,
        () => time / 7 / sn
      )
      .rotate(() => time / 7 - a.fft[6])
  )
  .diff(
    shape(vn, 8 / sn)
      .color(1, 1, 0)
      .scroll(
        () => time / 8 / sn,
        () => time / 8 / sn
      )
      .rotate(() => time / 8 + a.fft[7])
  )
  .diff(
    shape(vn, 9 / sn)
      .color(1, 1, 1)
      .scroll(
        () => time / 9 / sn,
        () => time / 9 / sn
      )
      .rotate(() => time / 9 + a.fft[0])
  )
  .scale(0.3)
  .blend(o1, [0.6, 0.1])
  .blend(o2, 0.8)
  .out(o1)
a.setScale(1.5)
a.setBins(8)
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
nnote = 55
m = midi.input().channel('*')
m.onNote('*', ({ note, velocity, channel }) => {
  console.log('onCCevent')
  console.log(note)
  console.log(velocity)
  console.log(channel)
  nnote = note
})
crown
  .layer(voronoi().mask(noise(20).modulate(noise(10).luma(0.4, 0.9), 0.2)))
  .scale(() => (nnote - 48.0) / 12)
  //   .scale(()=>a.fft[0])
  .out(o2)
a.show()
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Nelson Vera
// twitter: @nel_sonologia

osc(8, -0.5, 1)
  .color(-1.5, -1.5, -1.5)
  .blend(o0)
  .rotate(-0.5, -0.5)
  .modulate(
    shape(4)
      .rotate(0.5, 0.5)
      .scale(2)
      .repeatX(2, 2)
      .modulate(o0, () => mouse.x * 0.0005)
      .repeatY(2, 2)
  )
  .blend(o1, [0.7, 0.7].smooth())
  .blend(o0, 0.9)
  .out(o0)
render(o0)
