voronoi(
  () => fft(0, 3) * 10,
  () => Math.sin(time) * Math.PI
)
  .color([1, 2], [3, 4], [5, 6])
  .mask(shape([2, 3, 4, 6, 7].fast()))
  .repeat(5, 5)
  .rotate(() => fft(0, 1))
  .invert()
  .mult(voronoi(() => fft(0) * 30).color([1, 0].smooth(), [0, 0.5].smooth(), 1))
  .out(o0)
/* Motion amplification by lagging in a buffer*/
src(o0).out(o1)
src(o1).diff(o0).blend(o1, 0.1 /*How shadowy, higher is less */).out(o3)
/* En of motion amplification */
render(o3) // <-output
