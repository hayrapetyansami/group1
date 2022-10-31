"use strict";
import test	from "./modules/test"

window.addEventListener("load", function () {
	const navMenu = document.querySelector(".nav_menu");
	const navMenuOpenBtn = document.querySelector(".mobile_menu_btn");
	const lightBtn = document.querySelector("#lightBtn");
	const darkBtn = document.querySelector("#darkBtn");
	const body = document.querySelector("body");
	const languageBtn = document.querySelector(".current_language");
	const languageList = document.querySelector(".all_languages");
	const beforeElemOnMobile = navMenu.nextElementSibling;
	const userFavoritesBtn = document.querySelector(".user_favorites");
	const userFavoriteWrapper = document.querySelector(".favorite_wrapper");
	const userFavoriteWrapperClose = document.querySelector(".favorite_wrapper__close");

	const loader = setTimeout(() => {
		try {
			document.querySelector('.loader').remove();
		} catch {}
	}, 1500);;

	if (window.localStorage.getItem("dark")) {
		body.classList.add("dark_mode");
		sliderPathMode("dark-path");
	}

	function whenUserFromMobile() {
		if (window.innerWidth <= 960) {
			navMenu.insertAdjacentElement("beforeend", beforeElemOnMobile);
			beforeElemOnMobile.classList.add("whenUserFromMobile");
		} else {
			navMenu.after(beforeElemOnMobile);
			beforeElemOnMobile.classList.remove("whenUserFromMobile");
		}
	}

	window.addEventListener("resize", whenUserFromMobile);
	whenUserFromMobile();

	function sliderPathMode(mode) {
		const swiperBig = document.querySelectorAll(".swiper.swiper-big .swiper-wrapper .swiper-slide .path");

		swiperBig.forEach(item => {
			item.innerHTML = `<img src="img/${mode}.svg" alt="path">`
		});
	}

	// sliders
	try {
		const bigSwiper = new Swiper(".swiper.swiper-big", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 1,
			watchSlidesProgress: true,
		});
		const bigSwiperNav = new Swiper(".swiper.swiper-nav", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 3,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: bigSwiper
			},
		});

		const options = {
			loop: true,
			spaceBetween: 24,
			slidesPerView: 5,
			autoplay: {
				delay: 1500
			},
			// speed: 1000,
			breakpoints: {
				420: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				960: {
					slidesPerView: 3
				},
				1320: {
					slidesPerView: 4
				}
			}
		}
		const leftSwiper = new Swiper(".swiper.left", options);
		const rightSwiper = new Swiper(".swiper.right", options);

		function evt(parent, childs) {
			const node = document.querySelectorAll(childs);

			node.forEach(child => {
				child.addEventListener("mouseover", () => {
					parent.autoplay.stop();
				});
				child.addEventListener("mouseleave", () => {
					parent.autoplay.start();
				});
			});
		}

		evt(leftSwiper, ".swiper.left .swiper-wrapper .swiper-slide");
		evt(rightSwiper, ".swiper.right .swiper-wrapper .swiper-slide");
	} catch {};

	// favorite
	try {
		const addToFavoriteBtn = document.querySelectorAll("[data-add-to-fav]");
		const userFavoriteWrapperContent = userFavoriteWrapper.querySelector(".favorite_wrapper__content");
		const favCount = document.querySelector(".favorite_wrapper__header h3 span");
		let i = 0;

		addToFavoriteBtn.forEach((btn, index) => {
			btn.addEventListener("click", function () {
				// localStorage.setItem(`prod${index}`, index);
				const item = this.parentElement.parentElement.parentElement;
				const href = item.querySelector("a").href;
				const img = item.querySelector("img").src;
				const alt = item.querySelector("img").alt;
				const count = item.querySelector("span").textContent;
				const title = item.querySelector("h3").textContent;
				const status = item.querySelector("p.status").textContent;
				const price = item.querySelector(".product_body__tp p").textContent;

				// favCount.textContent = ++i;

				const fav = {
					href: href,
					img: img,
					alt: alt,
					count: count,
					title: title,
					status: status,
					price: price
				}

				fetch("favorite.json")
				.then(data => data.json())
				.then(data => console.log(data));
			});
		});

		// fetch("favorite.json")
		// .then(data => data.json())
		// .then(data => {
		// 	data.forEach(dataObj => {
		// 		userFavoriteWrapperContent.innerHTML += `
		// 			<a href="${dataObj.href}" class="favorite_item">
		// 				<div class="favorite_item__cover">
		// 					<img src="${dataObj.img}" alt="${dataObj.alt}">
		// 					<div class="countOfImages">
		// 						<img src="img/pictures-icon.svg" alt="pictures-icon">
		// 						<span>${dataObj.count}</span>
		// 					</div>
		// 				</div>
		// 				<div class="favorite_item__body">
		// 					<h3>${dataObj.title}</h3>
		// 					<p class="favorite_item__status available">${dataObj.status}</p>
		// 					<p class="favorite_item__price">${dataObj.price}</p>
		// 					<div class="removeFromFavorites">
		// 						<img src="img/heart-icon.svg" alt="remove from favorite">
		// 					</div>
		// 				</div>
		// 			</a>
		// 		`;
		// 	})
		// });
	} catch {}

	// Contact Form
	try {
		const form = document.querySelector(".index__fifth__section__right form");
		const all = form.querySelectorAll("input, textarea");

		form.addEventListener("submit", (e) => {
			e.preventDefault();
			let state;

			const formData = new FormData(e.target);
			const obj = {};
			formData.forEach((value, key) => {
				obj[key] = value;
			});

			all.forEach(item => {
				if (item.value.trim() === "") {
					state = false;
				} else {
					state = true;
				}
			})

			if (state) {
				fetch("url", {
					method: "POST",
					headers: {
						"content-type":"application/json"
					},
					body: obj
				});
			} else {
				e.target.insertAdjacentHTML("afterend", `
					<p style="margin-top:24px;color:#d00;font-weight:normal;letter-spacing:1.5px;">
						*Please fill all fields
					</p>
				`);
			}
		});
	} catch {}

	// Product Options
	try {
		const productMinusBtn = document.querySelector("#minus");
		const productPlusBtn = document.querySelector("#plus");
		const productCountInput = document.querySelector("#countOfProduct");
		const productPrice = document.querySelector("#productPrice");

		productPlusBtn.addEventListener("click", function () {
			let val = parseInt(productCountInput.value);
			productCountInput.value = ++val;
			productPrice.textContent = parseInt(productPrice.textContent) + parseInt(productPrice.textContent);
		});

		productMinusBtn.addEventListener("click", function () {
			let val = parseInt(productCountInput.value);
			
			if (val > 1) {
				productCountInput.value = --val;
			}
		});
	} catch {}

	navMenuOpenBtn.addEventListener("click", function () {
		if (!this.classList.contains("open")) {
			this.classList.add("open");
			navMenu.classList.add("active_nav");
		} else {
			this.classList.remove("open");
			navMenu.classList.remove("active_nav");
		}
	});
	lightBtn.addEventListener("click", () => {
		body.classList.add("dark_mode");
		sliderPathMode("dark-path")
		window.localStorage.setItem("dark", true);
	});
	darkBtn.addEventListener("click", () => {
		body.removeAttribute("class");
		sliderPathMode("light-path");
		window.localStorage.removeItem("dark", true);
	});
	languageBtn.addEventListener("click", () => {
		languageList.classList.add("active_all_langs");
	});
	languageList.addEventListener("mouseleave", (e) => {
		const tick = setTimeout(() => {
			e.target.classList.remove("active_all_langs");
		}, 1000);

		if (!languageList.matches(".active_all_langs")) {
			clearTimeout(tick);
		}
	});
	userFavoritesBtn.addEventListener("click", () => {
		if (!userFavoriteWrapper.classList.contains("favorite_wrapper__active")) {
			userFavoriteWrapper.classList.add("favorite_wrapper__active");
			const layer = document.createElement("div");
			layer.classList.add("layer");
			layer.style.cssText = `
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100vh;
				background-color: rgba(0, 0, 0, 0.6);
				transition: all 0.6s;
				z-index: 99999;
			`;
			document.body.prepend(layer);

			if (navMenuOpenBtn.matches(".open") && navMenu.matches(".active_nav")) {
				navMenuOpenBtn.classList.remove("open");
				navMenu.classList.remove("active_nav");
			}
		} else {
			userFavoriteWrapper.classList.remove("favorite_wrapper__active");
		}
	});
	userFavoriteWrapperClose.addEventListener("click", () => {
		userFavoriteWrapper.classList.remove("favorite_wrapper__active");
		document.querySelector(".layer").remove();
	});
});

test();