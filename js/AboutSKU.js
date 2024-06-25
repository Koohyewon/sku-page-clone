$(document).ready(function () {
    const AboutSKUIMG = [
        {
            "number" : "01",
            "AboutSKULink": "https://www.sungkyul.ac.kr/skukr/342/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc2t1a3IlMkY5NyUyRjM0MzkzJTJGYXJ0Y2xWaWV3LmRvJTNGaXNWaWV3TWluZSUzRGZhbHNlJTI2YmJzQ2xTZXElM0QlMjZzcmNoV3JkJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZwYWdlJTNEMSUyNmJic09wZW5XcmRTZXElM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNnNyY2hDb2x1bW4lM0QlMjZwYXNzd29yZCUzRCUyNg%3D%3D",
            "img": "/img/AboutSKUBImg1.jpg",
            "content": "홍보 아이템 제보 안내",
        },
        {
            "number" : "02",
            "AboutSKULink": "https://www.youtube.com/watch?v=qQU7cquSmGU",
            "img": "/img/AboutSKUBImg2.jpg",
            "content": "성결대학교 소개",
        },
        {
            "number" : "03",
            "AboutSKULink": "https://www.sungkyul.ac.kr/skukr/486/subview.do",
            "img": "/img/AboutSKUBImg3.jpg",
            "content": "개인정보보호 교육영상",
        },
        {
            "number" : "04",
            "AboutSKULink": "https://fund.sungkyul.ac.kr/",
            "img": "/img/AboutSKUBImg4.jpg",
            "content": "성결대학교 발전기금",
        },
        {
            "number" : "05",
            "AboutSKULink": "https://www.youtube.com/watch?v=F62uflyKOQs",
            "img": "/img/AboutSKUBImg5.jpg",
            "content": "성결대학교 비교과 교육과정 안내",
        },
        {
            "number" : "06",
            "AboutSKULink": "http://skebook.co.kr/",
            "img": "/img/AboutSKUBImg6.jpg",
            "content": "성결대학교 비교과 교육과정 가이드북",
        }
    ];

    let currentIndex = 0;
    let slideshowInterval;

    function displayAboutSKU(index) {
        const aboutsku = AboutSKUIMG[index];
        const aboutskutemplate =
            `
                <div class="flex flex-row items-center justify-between mt-[38px] mb-[19px]">
                    <h2 class="titillium text-[34px]">ABOUT SKU</h2>
                    <div class="flex flex-row">
                        <span class="titillium text-black text-[14px]">${aboutsku.number}</span>
                        <img class="mx-[5px]" src="/img/ABOUTSKUSL.png" alt="">
                        <span class="titillium text-[#9299a6] text-[14px] mr-[15px]">06</span>
                        <img id="prev" class="cursor-pointer h-[16px]" src="/img/ABOUTSKUPrevICON.png" alt="">
                        <img id="stop" class="cursor-pointer h-[16px] mx-[10px]" src="/img/ABOUTSKUStopICON.png" alt="">
                        <img id="next" class="cursor-pointer h-[16px]" src="/img/ABOUTSKUNextICON.png" alt="">
                    </div>
                </div>
                <a id="AboutSKULink" href="${aboutsku.AboutSKULink}" target="_blank">
                    <div class="relative">
                        <img class="w-full" src="${aboutsku.img}" alt="">
                        <div class="absolute left-0 bottom-0 w-full py-[10px] px-[20px] bg-[rgba(26,47,66,0.9)] text-16px text-white">${aboutsku.content}</div>
                    </div>
                </a>
            `;
        $(".AboutSKU").html(aboutskutemplate);
    }

    function startSlideshow() {
        slideshowInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % AboutSKUIMG.length;
            displayAboutSKU(currentIndex);
        }, 5000); // 5초마다 슬라이드 변경
    }

    function stopSlideshow() {
        clearInterval(slideshowInterval);
    }

    $('#prev').click(function () {
        stopSlideshow();
        currentIndex = (currentIndex - 1 + AboutSKUIMG.length) % AboutSKUIMG.length;
        displayAboutSKU(currentIndex);
    });

    $('#next').click(function () {
        stopSlideshow();
        currentIndex = (currentIndex + 1) % AboutSKUIMG.length;
        displayAboutSKU(currentIndex);
    });

    $('#stop').click(function () {
        stopSlideshow();
    });

    // 초기 화면 표시
    displayAboutSKU(currentIndex);

    // 자동 슬라이드쇼 시작
    startSlideshow();
});
