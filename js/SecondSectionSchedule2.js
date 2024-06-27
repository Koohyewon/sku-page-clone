const scheduledata2 = [
    {
        "index": 1,
        "day1": "24",
        "date1": "06.24 ~ 06.24",
        "content1": "영성훈련(신학대학)",
        "day2": "27",
        "date2": "06.27 ~ 06.27",
        "content2": "성적 및 출석부 제출마감",
        "day3": "28",
        "date3": "06.28 ~ 06.28",
        "content3": "재학생 성적 열람",
        "day4": "01",
        "date4": "07.01 ~ 07.03",
        "content4": "재학생 성적정정 신청기간"
    },
    {
        "index": 2,
        "day1": "12",
        "date1": "07.12 ~ 07.15",
        "content1": "계절학기 성적 및 출석부 제출",
        "day2": "22",
        "date2": "07.22 ~ 07.26",
        "content2": "휴학∙복학 신청기간",
        "day3": "30",
        "date3": "07.30 ~ 07.30",
        "content3": "2023학년도 후기 졸업사정회",
        "day4": "09",
        "date4": "08.09 ~ 08.09",
        "content4": "후기 학기수여(학위수여식 없음)"
    }
];

// forEach를 사용하여 배열의 모든 항목 템플릿 생성
function displaySchedule2(schedule) {
    let scheduletemplate2 = '';

    scheduletemplate2 += `
        <div class="schedule-item flex flex-row box-border mb-[20px] w-2/4 overflow-hidden">
            <div class="RotateYIcon transition-transform duration-[650ms] rotate-y-0 titillium flex items-center justify-center w-[60px] h-[60px] bg-[#275fa8] rounded-full bg-[url('./img/SecondSectionScheduleRoundIconBG.png')] text-white text-[26px] font-normal">
                ${schedule.day1}
            </div>
            <div class="inline-block h-[60px] pl-[15px] flex flex-col justify-center">
                <span class="text-[#BABABA] font-normal">${schedule.date1}</span>
                <strong class="truncate text-white text-[17px] font-medium">${schedule.content1}</strong>
            </div>
        </div>
        <div class="schedule-item flex flex-row mb-[20px] w-2/4">
            <div class="RotateYIcon transition-transform duration-[650ms] rotate-y-0 titillium flex items-center justify-center w-[60px] h-[60px] bg-[#275fa8] rounded-full bg-[url('./img/SecondSectionScheduleRoundIconBG.png')] text-white text-[26px] font-normal">
                ${schedule.day2}
            </div>
            <div class="h-[60px] pl-[15px] flex flex-col justify-center">
                <span class="text-[#BABABA] font-normal">${schedule.date2}</span>
                <strong class="text-white text-[17px] font-medium">${schedule.content2}</strong>
            </div>
        </div>
        <div class="schedule-item flex flex-row mb-[20px] w-2/4">
            <div class="RotateYIcon transition-transform duration-[650ms] rotate-y-0 titillium flex items-center justify-center w-[60px] h-[60px] bg-[#275fa8] rounded-full bg-[url('./img/SecondSectionScheduleRoundIconBG.png')] text-white text-[26px] font-normal">
                ${schedule.day3}
            </div>
            <div class="h-[60px] pl-[15px] flex flex-col justify-center">
                <span class="text-[#BABABA] font-normal">${schedule.date3}</span>
                <strong class="text-white text-[17px] font-medium">${schedule.content3}</strong>
            </div>
        </div>
        <div class="schedule-item flex flex-row mb-[20px] w-2/4">
            <div class="RotateYIcon transition-transform duration-[650ms] rotate-y-0 titillium flex items-center justify-center w-[60px] h-[60px] bg-[#275fa8] rounded-full bg-[url('./img/SecondSectionScheduleRoundIconBG.png')] text-white text-[26px] font-normal">
                ${schedule.day4}
            </div>
            <div class="h-[60px] pl-[15px] flex flex-col justify-center">
                <span class="text-[#BABABA] font-normal">${schedule.date4}</span>
                <strong class="text-white text-[17px] font-medium">${schedule.content4}</strong>
            </div>
        </div>
    `;

    $(".schedule-wrapper").html(scheduletemplate2);

    // 아이콘 회전 애니메이션 추가
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
}

// 초기 설정
let currentIndex = 0;

// 페이지 로드 시 첫 번째 스케줄 데이터 표시
displaySchedule2(scheduledata2[currentIndex]);

// 이전 버튼 클릭 시 실행되는 함수
$("#SecondScheduleSectionLbtn").click(function() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = scheduledata2.length - 1; // 맨 끝으로 이동
    }
    displaySchedule2(scheduledata2[currentIndex]);
});

// 다음 버튼 클릭 시 실행되는 함수
$("#SecondScheduleSectionRbtn").click(function() {
    if (currentIndex < scheduledata2.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // 맨 처음으로 이동
    }
    displaySchedule2(scheduledata2[currentIndex]);
});

// 스케줄 뷰 업데이트 함수
function updateScheduleView() {
    const itemWidth = $(".schedule-item").outerWidth(true); // 각 스케줄 아이템의 너비
    const newPosition = -currentIndex * itemWidth; // 새로운 위치 계산

    $(".schedule-wrapper").css("transform", `translateX(${newPosition}px)`);
}
