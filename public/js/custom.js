

Fancybox.bind("[data-fancybox]");
 

//  alert('load')
setTimeout(function () {
  function animateSVGPaths() {
    // Select all SVGs with the class 'animated_svg' within elements with 'data-scroll-section-inview'
    const animatedSVGs = document.querySelectorAll("[data-scroll-section-inview] .animated_svg");
    animatedSVGs.forEach((svg) => {
      const paths = svg.querySelectorAll("path");

      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        // Trigger a reflow to apply the styles
        path.getBoundingClientRect();
        // Animate the strokeDashoffset to create the drawing effect
        path.style.transition = "stroke-dashoffset 6s ease";
        path.style.strokeDashoffset = "0";
      });
    });

    // Elements to fade in sequentially
    const bannerContentElements = [
      ".banner_content .sub_title",
      ".banner_content .h1_title",
      ".banner_content .banner_btn_wp",
    ];

    // Apply the fade-in class to each element with a delay
    bannerContentElements.forEach((selector, index) => {
      setTimeout(() => {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.add("fade-in");
        }
      }, (index + 1) * 1000);
    });
  }

  // Function to debounce resize events
  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });

  // Call the function to animate SVG paths initially
  animateSVGPaths();

  // Update scroll state on window resize with debounce
  window.addEventListener("resize", debounce(() => {
    scroll.update();
    animateSVGPaths();
  }, 200));

  // Re-animate SVG paths on scroll
  scroll.on("scroll", animateSVGPaths);

}, 50);

setTimeout( function(){

var workSlider = new Swiper(".work_tab", {
  direction: "horizontal",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: true,
  },
});


  const tabBoxes = document.querySelectorAll(".work_tab_box");

  tabBoxes.forEach((tabBox) => {
    tabBox.addEventListener("mouseenter", () => {
      tabBoxes.forEach((box) => box.classList.remove("work_tab_active"));
      tabBox.classList.add("work_tab_active");
    });
  });


var homeClientSlider = new Swiper(".home_clients_slider", {
  slidesPerView: 1.2,
  loop: true,
  spaceBetween: 64,
  speed: 700,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    type: "bullets",
    renderBullet: function (currentClass, totalClass) {
      return '<span class="' + totalClass + '"><b></b></span>';
    },
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    769: {
      spaceBetween: 30,
      slidesPerView: 1.2,
    },
    1201: {
      spaceBetween: 64,
    },
  },
  speed: 1000,
});

var ourNumberSlider = new Swiper(".our_number_slider", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 106,
  speed: 700,
  grabCursor: true,
  freeMode: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      spaceBetween: 40,
    },
    1201: {
      spaceBetween: 106,
    },
  },
  speed: 1000,
});


var heroSlider = new Swiper(".hero-slider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  speed: 700,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    type: "bullets",
    renderBullet: function (currentClass, totalClass) {
      return '<span className="' + totalClass + '"><b></b></span>';
    },
  },
});


  const numberSlide = document.querySelectorAll(".our_number_slide");

  numberSlide.forEach((numberSlides) => {
    numberSlides.addEventListener("mouseenter", () => {
      numberSlide.forEach((box) => box.classList.remove("number_slide_active"));
      numberSlides.classList.add("number_slide_active");
    });
  });


  var claritySlider = new Swiper(".clarity_slider_1", {
    direction: "vertical",
    autoHeight: true,
    rewind: true,
    spaceBetween: 24,
    speed: 800,
    freeMode: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: "auto",
      },
      992: {
        direction: "vertical",
      },
    },
    speed: 1000,
  });
  
  var claritySlider = new Swiper(".clarity_slider_2", {
    direction: "vertical",
    autoHeight: true,
    rewind: true,
    spaceBetween: 24,
    speed: 800,
    reverseDirection: true,
    freeMode: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3000,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: "auto",
      },
      992: {
        direction: "vertical",
      },
    },
    speed: 1000,
  });
  
  

var testimonialsSlider = new Swiper(".testimonials_slider", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 30,
  speed: 700,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var cardImageSlider = new Swiper(".card_top_content_right_slider", {
  slidesPerView: 3.2,
  loop: true,
  spaceBetween: 14,
  speed: 700,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
});

  const cardTitles = document.querySelectorAll(".card_title");

  cardTitles.forEach((cardTitle) => {
    cardTitle.addEventListener("click", () => {
      document.querySelectorAll(".card_box").forEach((cardBox) => {
        cardBox.classList.remove("active_card_box");
      });

      cardTitle.parentElement.classList.add("active_card_box");
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 991) {
      var complianceSlider = new Swiper(".compliance_wp", {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 700,
        grabCursor: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: "true",
          type: "bullets",
          renderBullet: function (currentClass, totalClass) {
            return '<span class="' + totalClass + '"><b></b></span>';
          },
        },
        speed: 1000,
      });
    }
  });
  
  


  var managementServiceSlider = new Swiper(".management_service_slider", {
    slidesPerView: 2.2,
    loop: true,
    spaceBetween: 30,
    speed: 700,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
      type: "bullets",
      renderBullet: function (currentClass, totalClass) {
        return '<span class="' + totalClass + '"><b></b></span>';
      },
    },
    breakpoints: {
      0: {
        spaceBetween: 15,
        slidesPerView: 1.1,
      },
      576: {
        spaceBetween: 15,
        slidesPerView: 1.8,
      },
      992: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
    },
    speed: 1000,
  });

var financialAdvisorSlider = new Swiper(".financial_advisor_slider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 15,
  speed: 700,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    767: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
  speed: 1000,
});
var lifeSlider = new Swiper(".life_sec_slider", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 15,
  speed: 700,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    type: "bullets",
    renderBullet: function (currentClass, totalClass) {
      return '<span class="' + totalClass + '"><b></b></span>';
    },
  },
  speed: 1000,
});
var openJobSlider = new Swiper(".open_job_slider", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 34,
  speed: 700,
  grabCursor: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    type: "bullets",
    renderBullet: function (currentClass, totalClass) {
      return '<span class="' + totalClass + '"><b></b></span>';
    },
  },
  breakpoints: {
    0: {
      spaceBetween: 10,
      slidesPerView: 1,
    },
    767: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1201: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  speed: 1000,
});
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".help_you_tab ul li");
  const contents = document.querySelectorAll(".help_you_tab_content");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("help_you_tab_active"));
      contents.forEach((content) => {
        content.classList.remove("help_you_tab_content_active");
        content.style.display = "none";
        content.style.opacity = "0";
      });
      button.classList.add("help_you_tab_active");
      const tab = document.getElementById(button.getAttribute("data-tab"));
      tab.style.display = "block";
      tab.offsetHeight;
      tab.style.opacity = "1";
      tab.classList.add("help_you_tab_content_active");
    });
  });

  buttons[0]?.click();
});


},5);


document.addEventListener("DOMContentLoaded", function () {
  const meetMemberButton = document.querySelector(".meet_member_play_btn");
  const meetMemberCloseButton = document.querySelector(
    ".meet_member_close_btn"
  );
  const videoContainer = document.querySelector(".video_container");
  const videoSection = document.querySelector(".meet_sec");
  setTimeout( function(){
  meetMemberButton.addEventListener("click", function () {
    videoContainer.style.clipPath = "circle(100% at 50% 50%)";
    videoSection.classList.add("video_active");
  });

  meetMemberCloseButton.addEventListener("click", function () {
    videoContainer.style.clipPath = "circle(18% at 50% 50%)";
    videoSection.classList.remove("video_active");
  });
});
});










