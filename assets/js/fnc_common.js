document.addEventListener("DOMContentLoaded", function () {
	document.body.classList.remove("preload");
});

//ANKER LINK
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const anchorLinksArr = Array.prototype.slice.call(anchorLinks);
anchorLinksArr.forEach(link => {
	link.addEventListener('click', e => {

		e.preventDefault();
		const targetId = link.hash;
		const targetElement = document.querySelector(targetId);

        const header = document.querySelector('.l-header');
		const headerHeight = header.clientHeight;

		const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top - headerHeight;
		window.scrollTo({
			top: targetOffsetTop,
			behavior: "smooth"
		});
	});
});

//SCROLL STOP
function no_scroll(){
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    document.addEventListener("touchmove", scroll_control, { passive: false });
}

//SCROLL START
function return_scroll() {
    document.removeEventListener("mousewheel", scroll_control, { passive: false });
    document.removeEventListener('touchmove', scroll_control, { passive: false });
}

function scroll_control(event) {
    event.preventDefault();
}

//SP
const trigger = document.querySelectorAll('.l-header__trigger');
trigger.forEach(item => {
    item.addEventListener('click',() => {
        document.body.classList.toggle('is-opened');
    });
});

//aniamtion
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".js-fadeup").forEach((el) => {
	const q = gsap.utils.selector(el);
	gsap.from(el,{
		opacity:0,
		y:100,
		duration: 2,
		ease : "power4.out",
		scrollTrigger:{
		trigger:el,
		start: 'top 80%',
		once: true,
		//markers: true,
		}
	})
});

gsap.utils.toArray(".js-fadein").forEach((el) => {
	const q = gsap.utils.selector(el);
	gsap.from(el,{
		opacity:0,
		duration: 2,
		ease : "power4.out",
		scrollTrigger:{
			trigger:el,
			start: 'top 80%',
			once: true,
		}
	})
});


gsap.utils.toArray(".js-parallax").forEach((el) => {
	const q = gsap.utils.selector(el);
	gsap.from(el,{
		y: -150,
		ease : "power4.out",
		scrollTrigger:{
			trigger:el,
			start: 'top 90%',
			scrub: true,
			//markers: true,
		}
	})
});

gsap.utils.toArray(".js-parallax2").forEach((el) => {
	const q = gsap.utils.selector(el);
	gsap.from(el,{
		y: -50,
		ease : "power4.out",
		scrollTrigger:{
			trigger:el,
			start: 'top 90%',
			scrub: true,
			//markers: true,
		}
	})
});

