// License Beerware
// Author Magic SL
c = 0;
bpm = 180;
crown = new Array(13).fill().reduce(
  (acc, e) =>
    acc.add(
      shape(3, 0.2, 0.2)
        .color(0.9, 0.6, 0.3)
        .rotate((c += 10), 0.1),
    ),
  solid(),
);
crown
  .layer(
    noise().mask(
      noise(20).modulate(
        noise(10).luma(0.9, () => a.fft[3] * 2),
        0.2,
      ),
    ),
  )
  .rotate(2)
  .add(osc(2, 0.01, () => Math.cos(time / 1000) * Math.PI))
  .modulate(osc(() => a.fft[1] / 1000))
  .kaleid([5, 25, 75, 100, 75, 50, 25].smooth(0.2))
  .out(o3);
render(o3);
a.show();
