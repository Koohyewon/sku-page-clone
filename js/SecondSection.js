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

// 아이콘 y축 360도 회전 js
const icons = document.querySelectorAll('.RotateYIcon');

icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.classList.remove('rotate-y-0');
        icon.classList.add('rotate-y-360');
    });

    icon.addEventListener('mouseout', () => {
        icon.classList.remove('rotate-y-360');
        icon.classList.add('rotate-y-0');
    });
});

