
function populateCarousel(carouselSelector, dataItem) {
    const carouselHeader = document.querySelector(`${carouselSelector} h4`);
    const carousel = document.querySelector(`${carouselSelector} .owl-carousel`);
    
    carouselHeader.innerHTML = dataItem.name;
    let carouselHTML = '';
    dataItem.subcat ? dataItem.subcat.forEach((category) => {
      category.icindekiler.forEach((item) => {
        carouselHTML += `
          <div  class="item">
            <div onclick="goToDetailPage('${dataItem.cat}','${item.subId}')"  class="item-card">
              <div class="item-img"> <img src="img/${item.mainImg}" alt="logo"/></div>
              <div class="item-p">
                <h6>${item.mehsulAdi}</h6>
                <p>${category.subname}</p>
                <a href="#">ətraflı</a>
              </div>  
            </div>
          </div>`;
      });
    }) : dataItem.icindekiler.forEach((item) => {
          carouselHTML += `
            <div class="item">
              <div onclick="goToDetailPage('${dataItem.cat}','${item.subId}')" class="item-card">
                <div class="item-img"> <img src="img/${item.mainImg}" alt="logo"/></div>
                <div class="item-p">
                  <h6>${item.mehsulAdi}</h6>
                  <a href="#">ətraflı</a>
                </div>  
              </div>
            </div>`;
        });
    
    carousel.innerHTML = carouselHTML;
    initializeCarousel(`${carouselSelector} .owl-carousel`);
  }
  
function initializeCarousel(selector) {
    const owlInstance = $(selector).data('owl.carousel');
    if (owlInstance) {
      owlInstance.destroy();
    }
  
    $(selector).owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeOut: 5000,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1100: {
          items: 4,
        }
      },
    });
  }

  
  document.addEventListener("DOMContentLoaded", () => {
    populateCarousel(".cards", data[0]);
    populateCarousel(".cards2", data[1]);
    populateCarousel(".cards3", data[2]);
    populateCarousel(".cards4", data[3]);
    populateCarousel(".cards4", data[4]);
    populateCarousel(".cards6", data[6]);
    // populateCarousel(".cards5", data[4]);
    initializeCarousel(".cards .owl-carousel");
    initializeCarousel(".cards2 .owl-carousel");
    initializeCarousel(".cards3 .owl-carousel");
    initializeCarousel(".cards4 .owl-carousel");
    initializeCarousel(".cards5 .owl-carousel");
    initializeCarousel(".cards6 .owl-carousel");
    // initializeCarousel(".cards5 .owl-carousel");
  });
  

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeOut: 1000,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },

    400: {
      items: 2,
    },
    700: {
      items: 1,
    },
    1100: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});


