
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
			initSwiper();
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
	initSwiper();
	fv_start();
}
*/

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
    onEnter: () => {
        document.body.classList.add("is-scroll");
    },
    onLeaveBack: () => {
        document.body.classList.remove("is-scroll");
    },
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
		loopAdditionalSlides: 1,
		allowTouchMove: false,
		simulateTouch: false,
		autoplay: {
			delay: 0,
			reverseDirection: true, // 逆方向に自動再生
		},
		lazy: {
			loadPrevNext: true,
		},
		preloadImages: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
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