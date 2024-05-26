//top 우측 상단의 KOR 버튼을 클릭하면 language_list가 보이게 설정
document.getElementById('languageBtn').addEventListener('click', function() {
    var languageList = document.querySelector('.language_list');
    if (languageList.classList.contains('show')) {
        languageList.classList.remove('show');
    } else {
        languageList.classList.add('show');
    }
});