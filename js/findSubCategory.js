const categpryCards = document.querySelector(".categoryCards");

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  const subcat = params.get("subcat");
  return { cat, subcat };
}
let dat = [];
document.addEventListener("DOMContentLoaded", () => {
  const { cat, subcat } = getQueryParams();
  let esmer = data.find((item) => item.cat == cat);
  let kod = "";
  console.log(cat);

  if (cat) {
    let category = esmer.subcat.find((item) => (item.catname == subcat));
    console.log(esmer,'esmer', category, 'category');
    kod += `
    <div class="category-main">
    <h5 class="category-head">${category.subname}</h5>
    <div class="category-item">
    `;
    category.icindekiler.forEach((item) => {
        (kod += ` 
                    <div  onclick="goToDetailPage('${esmer.cat}','${item.subId}')" class="item">
                        <div class="item-card">
                        <div class="item-img"> <img src="img/${item.mainImg}" alt="logo"/></div>
                        <div class="item-p"><h6>${item.mehsulAdi}</h6>
                        <p>${category.subname}</p>
                        <a href="#">ətraflı</a>
                        </div>  
                        </div>
                    </div>
                `);
    });
    kod += `</div></div>`;
    categpryCards.innerHTML += kod;
  } else {
    const categoryCards = document.querySelector(".categoryCards");
    let kodCategory = "";
    data[0].subcat.forEach((category) => {
      kodCategory += `
  <div class="category-main">
  <h5 class="category-head">${category.subname}</h5>
  <div class="category-item">
  `;
      category.icindekiler.forEach((item) => {
        kodCategory += ` 
                  <div class="item">
                      <div class="item-card">
                      <div class="item-img"> <img src="img/${item.mainImg}" alt="logo"/></div>
                      <div class="item-p"><h6>${item.mehsulAdi}</h6>
                      <p>${category.subname}</p>
                      <a href="#">ətraflı</a>
                      </div>  
                      </div>
                  </div>
              `;
      });
      kodCategory += `</div></div>`;
    });
    categoryCards.innerHTML += kodCategory;
  }
});

function goToSubCatPage(cat, subcat) {
  window.location.href = `category.html?cat=${cat}&subcat=${subcat}`;
}
