const btn = document.getElementById("menu-btn")
const mobile_menu = document.getElementById("mobile-menu")

btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	mobile_menu.classList.toggle("flex")
	mobile_menu.classList.toggle("hidden")
})


if (window.visualViewport.width >= 950 ) {
	var header = document.getElementById("Header")
	header.style.height = String(window.visualViewport.height - 79) + "px"
}


window.addEventListener('DOMContentLoaded', () => {
  // get all progress bar
  const elements = [].slice.call(document.querySelectorAll('.pie'));
  // call to function
  const circle = new CircularProgressBar('pie');

  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  // if IntersectionObserver is supported by the browser
  if ('IntersectionObserver' in window) {
    const config = {
      root: null,
      rootMargin: '0px',
      threshold: 0.75,
    };

    const ovserver = new IntersectionObserver((entries, observer) => {
      entries.map((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
          circle.initial(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, config);

    elements.map((item) => {
      ovserver.observe(item);
    });
  } else {
    // if the browser does not support IntersectionObserver
    // we run all progress bars at once
    elements.map((element) => {
      circle.initial(element);
    });
  }
});

function onFormSubmit() {
	var name = document.getElementById("NameInput")
	var message = document.getElementById("MessageInput")
	var ntech_number = "271005898"

	window.open(`https://wa.me/${ntech_number}?text=From:${name.value} ${message.value}`);

	name.value = "";
	message.value = "A message...";
}

