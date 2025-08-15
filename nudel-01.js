osc(()=>((time/200)%12)+10)
.colorama([2,2.2,3,3.3].smooth(.2))
.modulateRotate(noise(20))
.scroll(0,()=>time/100)
.out(o1)

src(o1).out(o2)

src(o1).diff(o2)
.saturate([2,30,15,30].smooth(.3))
.luma([.1,.2,.7].smooth())
.blend(o3,.7)
.out(o3)

render(o3)