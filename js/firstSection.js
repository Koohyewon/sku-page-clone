//top 우측 상단의 KOR 버튼을 클릭하면 language_list가 보이게 설정
document.getElementById("languageBtn").addEventListener("click", function () {
  var languageList = document.querySelector(".language_list");
  if (languageList.classList.contains("hidden")) {
    languageList.classList.remove("hidden");
    languageList.style.maxHeight = languageList.scrollHeight + "px";
  } else {
    languageList.style.maxHeight = "0";
    languageList.classList.add("hidden");
  }
});

//nav에 마우스 호버 시 로고 이미지를 변경
const nav = document.querySelector(".nav");
const logoImg = document.querySelector(".logo-img");

nav.addEventListener("mouseover", function () {
  logoImg.src = "img/logo_blue.png";
});

nav.addEventListener("mouseout", function () {
  logoImg.src = "img/logo_white.png";
});
