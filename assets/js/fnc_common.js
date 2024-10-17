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

//loading
function loadedPage(){
	no_scroll();

	const counterElement = document.querySelector(".l-loading__num");

	const tl = gsap.timeline();
	tl.to('.l-loading__logo',{
		duration:.8,
		opacity:1,
		delay:.5
	});
	tl.to(counterElement,{
		duration:.8,
		opacity:1,
	}, "-=.8");
	tl.to({},{
		duration:5,
		onUpdate: function () {
			const progress = Math.round(this.progress() * 100);
			counterElement.innerText = progress;
		}
	}, "-=.8");
	tl.to('.l-loading__bar',{
		duration:5,
		width: "100%",
		ease: "power1.inOut",
		onComplete: () => {
			return_scroll();
		}
	}, "-=5");
	tl.to('.l-loading',{
		duration:1,
		opacity:0,
		ease: "power1.inOut",
		onComplete: () => {
			document.querySelector('.l-loading').remove();
			return_scroll();
			fv_start();
		}
	});
}

gsap.set('.p-idx-mv__head-txt', { opacity:0,x:-50 });
gsap.set('.p-idx-mv__clm-txt', { opacity:0,x:-50 });
gsap.set('.p-idx-mv__nav', { opacity:0 });

function fv_start(){
	const tl2 = gsap.timeline();
	tl2.to('.p-idx-mv__head-txt',{
		duration:.8,
		x:0,
		opacity:1,
		ease: "power1.inOut",
	}, "-=.2");
	tl2.to('.p-idx-mv__clm-txt',{
		duration:.8,
		x:0,
		opacity:1,
		ease: "power1.inOut",
	}, "-=.2");
	tl2.to('.p-idx-mv__nav',{
		duration:.8,
		opacity:1,
		ease: "power1.inOut",
	}, "-=.2");

}

loadedPage();

/*
if (!localStorage.getItem('visited')) {
	localStorage.setItem('visited', 'first');
	window.addEventListener('load', function () {
		loadedPage();
	});
}else {
	document.querySelector('.l-loading').remove();
	fv_start();
}
*/

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

gsap.to(".p-idx-srv__bgtxt", {
	y: -1500,
	ease : "power4.out",
	scrollTrigger: {
		trigger: ".p-idx-srv__body",
		start: 'top 90%',
		scrub: true,
		//markers: true,
	}
});

gsap.to(".p-idx-srv__voice", {
	opacity: 1,
	y: 0,
	stagger: 0.25,
	duration: 1,
	ease: "power1.out",
	scrollTrigger: {
		trigger: ".p-idx-srv__voice",
		start: "top 80%",
		toggleActions: "play none none none"
	}
});

ScrollTrigger.create({
    trigger: '.p-idx-about',
    start: 'top top',
    toggleClass: { targets: 'body', className: "is-scroll"},
    //markers: true,
});

const initSwiper = () => {
	const slideLength = document.querySelectorAll('.p-idx-mv__swiper-slide').length;
	const mySwiper = new Swiper('.p-idx-mv__swiper', {
		slidesPerView: 'auto',
		loop: true,
		loopedSlides: slideLength,
		disableOnInteraction: false,
		speed: 8000,
		allowTouchMove: false,
		simulateTouch: false,
		autoplay: {
			delay: 0,
			reverseDirection: true, // 逆方向に自動再生
		},
	});	

	const mySwiper2 = new Swiper('.p-idx-srv__swiper', {
		slidesPerView: 1,
		loop: true,
		effect:'fade',
		speed: 3000,
		autoplay: {
			delay: 6000,
		},
	});

};

window.addEventListener('load', function(){
	initSwiper(); // ページ読み込み後に初期化
});