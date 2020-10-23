import gsap from 'gsap'

const tl = gsap.timeline()
const lines = document.querySelectorAll('.content-sub .wrapper span')
const btn = document.querySelector('.cta')

gsap.set(lines, {y:'100%'})
gsap.set('.content-title span', {y:'100%'})
gsap.set('rect', {opacity:0})
gsap.set('header a', {y:'100%'})
gsap.set('.cta span', {opacity:0})
gsap.set('.content-2 span', {y:'100%'})

tl
.to('header a', {y:'0%', duration:1.2, stagger:0.2, ease:'power3.out'}, 6)
.to('.content-title span', {y:'0%', duration:1.3, stagger:0.1, ease:'power3.out'}, '-=1.2')
.to('rect', {opacity:1, ease:'power3.out', stagger:{from:'random', amount:'0.5', ease:'power3.inOut'}, duration:0.01}, "-=1")
.to(lines, {y:'0%', duration:1.2, stagger:0.15, ease:'power3.out'}, '-=1')
.to('.background', {opacity:0.15, duration:2, ease:'power3.out'}, "-=2.5")
.to('.cta span', {opacity:1, ease:'power3.out', stagger:{from:'random', amount:'0.4'}, duration:0.01}, "-=1")

btn.addEventListener('click', e => {
  tl
  .to('.background', {scale:0.7, opacity:0, duration:1.4, ease:'power3.inOut'})
  .to('.content', {scale:0.7, opacity:0, duration:1.4, ease:'power3.inOut'}, '-=1.1')
  .to(btn, {opacity:0, duration:0.6, ease:'power3.inOut'}, '-=1')
  .to('.content-2 span', {y:'0%', duration:1.2, stagger:0.15, ease:'power3.out'})
  .to('.content-2 span', {y:'100%', duration:0.8, stagger:0.05, ease:'power3.in'}, '+=1')
})