i=0 // Slide de 0 à 5
    // Avant de passer de slide
    // Naviguer sur les liens si présent
    // Finir par CCC


// GPU overview après slide 4
s0.initImage("https://6120.eu/public/nvidia-gpu.png")
// Cookie collective 2025-05-22
s1.initImage("https://6120.eu/public/ccc.png")

src(s1).out(o1)
render(o1)

setResolution(4000,4000)
await loadScript("https://h.6120.eu/hydra-text.js")
hydraText.font = "Roboto"
hydraText.lineWidth = "3%"
slide=[{"t":"Qu'est-ce que le Livecoding ?",
       "l0": "Le livecoding est une pratique artistique",
       "l1": "dans laquelle les artistes écrivent et",
       "l2": "exécutent du code en temps réel pour créer de la musique,",
       "l3": "des visuels ou d'autres formes d'expression."
       /*"Party https://youtu.be/gtnL2Cw-SY0?si=PuRIOB1Er7Cqno3Z&t=662*/},
       {"t":"Livecoding audio",
       "l0": " Exemple de livecoding audio            ",
       "l1": "             Jules Cipher             ",
       "l2": "              Design synthétiseur logiciel              ",
       "l3": "       "
       /* https://youtu.be/W_E-m5alba0?si=K4QoKmuUtuqBoWGX&t=228 */},
       {"t":"Livecoding visuel",
       "l0": " Exemple de livecoding visuel",
       "l1": " Revision 2025 - Shadershowdown",
       "l2": " Pérégrine (FR) - 3ème (top fr)",
       "l3": "        "
       /* https://youtu.be/MnwTamb6kd0?si=o5yej7vEqwkjjq1Q&t=1400 */},
       {"t":" Qui suivre ?",
       "l0": "              ",
       "l1": "            \n\n  Toplap                       ",
       "l2": "            ",
       "l3": "         Cookie Collective           "
       /* https://www.cookie.paris/all/ */},
       {"t":"   SHADER   ",
       "l0": "     GLSL     ",
       "l1": "   OpenGL Shading Language  ",
       "l2": "   Proche du langage C       ",
       "l3": "  Tres proche du matériel   "},
       {"t":"Où apprendre?",
       "l0": "              ",
       "l1": " Chaque mardi à ~20h00",
       "l2": " A.E.R.I 57 Rue Etienne Marcel 93100 Montreuil",
       "l3": " HackerSpace ~ Le Fuz ~ "},
       {"t":"Introduction au livecoding visuel",
       "l0": "      ",
       "l1": "                                   ",
       "l2": "  Hydra visual synth                      ",
       "l3": " Domain Specific Language   "},]
shape(2).
  layer(shape(2,0.3).scroll(0.1)).
  layer(text(slide[i].t).color(Math.abs(Math.cos(i)),Math.abs(Math.sin(i)),Math.abs(Math.tan(i))).scroll(0.2,0.5).scale(0.5)).
  layer(text(slide[i].l0).scroll(0.18,0.5).scale(0.4)).
  layer(text(slide[i].l1).scroll(0.18,0.3).scale(0.4)).
  layer(text(slide[i].l2).scroll(0.18,0.1).scale(0.4)).
  layer(text(slide[i].l3).scroll(0.18,0.9).scale(0.4)).
  out(o3)