















l=loadScript
await l("https://hyper-hydra.glitch.me/hydra-text.js")
hydraText.font = "Roboto"
hydraText.lineWidth = "2%"
t = " Titre: Dolores ipsum est "
line0=" - Ligne 0 - titre objet - demo"
line1=" - Ligne 1 - titre objet - demo"
line2=" - Ligne 2 - titre objet - demo"
line3=" - Ligne 3 - titre objet - demo"
shape(2).l=loadScript
await l("https://hyper-hydra.glitch.me/hydra-text.js")
hydraText.font = "Roboto"
hydraText.lineWidth = "2%"
t = " Titre: Dolores ipsum est "
line0=" - Ligne 0 - titre objet - demo"
line1=" - Ligne 1 - titre objet - demo"
line2=" - Ligne 2 - titre objet - demo"
line3=" - Ligne 3 - titre objet - demo"
shape(2).
  layer(shape(2) .scroll(0.1)).
  layer(text(t).scroll(0.2,0.5).scale(0.5)).
  layer(text(line0).scroll(0.18,0.5).scale(0.3)).
  layer(text(line1).scroll(0.18,0.3).scale(0.3)).
  layer(text(line2).scroll(0.18,0.1).scale(0.3)).
  layer(text(line3).scroll(0.18,0.9).scale(0.3)).

  out()
  layer(shape(2) .scroll(0.1)).
  layer(text(t).scroll(0.2,0.5).scale(0.5)).
  layer(text(line0).scroll(0.18,0.5).scale(0.3).mask(shape(4).scroll(1.04,1.25))).
  layer(text(line1).scroll(0.18,0.3).scale(0.3).mask(shape(4).scroll(1.04,1.23))).
  layer(text(line2).scroll(0.18,0.1).scale(0.3).mask(shape(4).scroll(1.04,1.16))).
  layer(text(line3).scroll(0.18,0.9).scale(0.3).mask(shape(4).scroll(1.04,1.10))).

  out()