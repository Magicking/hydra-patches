// License Beerware
// Sylvain "Magic" Laurent
R2 = [249/255,185/255,227/255]
R1 = [126/255,90/255,114/255]
B0 = [0,0,0]
G1 = [52/255,83/255,38/255]
G2 = [106/255,168/255,79/255]
noise([10,20,50,150,400].smooth()).color([R2[0],R1[0],B0[0],G1[0],G2[0]].smooth(),
            [R2[1],R1[1],B0[1],G1[1],G2[1]].smooth(),
            [R2[2],R1[2],B0[2],G1[2],G2[2]].smooth())
  .rotate(()=>Math.sin(time/10)*Math.PI)
  .modulate(noise(10).luma().rotate(()=>Math.cos(time/30)*Math.PI)
 )
  .out()
