const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('focus', function() {
        const charCount = this.textContent.length;
        this.style.width = (charCount * 1.8) + 'em';
    });

    button.addEventListener('blur', function() {
        this.style.width = ''; // 원래 크기로 되돌리기
    });
});

function ServicechangeBtn() {
    const btnimg = document.getElementById('ServiceBtn');

    const html = `<img class="cursor-pointer mx-[10px]" src="/img/SecondSectionServicePlayIcon.png" alt="" onclick="">`

    btnimg.innerHTML = html;
}
