const searchinput = document.querySelector(".search-box");
let resultsContainer = document.querySelector(".search-results");

function searchItems() {
  if (searchinput.value == "") {
    console.log(searchinput);
    resultsContainer.style.display = "none";
  } else {
    resultsContainer.style.display = "block";
  }
  let searchValue = searchinput.value.toLowerCase();
  let result = "";
  resultsContainer.innerHTML = "";

  data?.forEach((category) => {
    if (category.subcat) {
      category.subcat.forEach((sub) => {
        sub.icindekiler.forEach((product) => {
          if (product?.mehsulAdi?.toLowerCase().includes(searchValue)) {
            result += `<li onclick="goToDetailPage('${category.cat}','${product.subId}')" class="item">${product.mehsulAdi}</li>`;
          }
        });
      });
    } else {
      category.icindekiler.forEach((product) => {
        if (product.mehsulAdi.toLowerCase().includes(searchValue)) {
          result += `<li onclick="goToDetailPage('${category.cat}','${product.subId}')">${product.mehsulAdi}</li>`;
        }
      });
    }
  });

  if (result) {
    resultsContainer.innerHTML = `<ul>${result}</ul>`;
  } else {
    resultsContainer.innerHTML = "<p>Məhsul tapılmadı</p>"; // Sonuç bulunamadıysa bildir
  }
}
