s0.initImage("https://6120.eu/public/casu_conf.jpg");
a.setBins(6);
a.show();
src(s0)
  .scale(0.81)
  .colorama(() => a.fft[0] * 0.89)
  .scroll(0, -0.4)
  .modulate(noise([0.5, 1, 1.5].smooth()))
  .out();
