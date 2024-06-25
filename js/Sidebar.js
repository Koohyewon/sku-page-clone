const toggleButton = document.getElementById('toggleButton');
const toggleImage = document.getElementById('toggleImage');
const sideMenu = document.getElementById('sideMenu');
let isOpen = false;

toggleButton.addEventListener('click', function() {
    if (isOpen) {
        sideMenu.classList.remove('open');
        setTimeout(() => {
            sideMenu.style.right = '-105px';
            toggleButton.innerHTML = '<span class="pb-[13px]">OPEN</span><img id="toggleImage" src="/img/SideOpenArrow.png" alt="arrow">';
        }, 300); // 애니메이션 시간이 지난 후에 버튼 텍스트 변경
    } else {
        sideMenu.classList.add('open');
        sideMenu.style.right = '0';
        toggleButton.innerHTML = '<span class="pb-[13px]">CLOSE</span><img id="toggleImage" src="/img/SideCloseArrow.png" alt="arrow">';
    }
    isOpen = !isOpen;
});


//const ToGoBtn = document.getElementsByClassName('ToGoBtn')

//ToGoBtn.addEventListener('click', function(){
   // if ()
//});