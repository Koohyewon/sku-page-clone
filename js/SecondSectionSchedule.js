const scheduledata = [
    {
        "id": "Schedulebtn1",
        "content1": "2024학년도 제 3차 평생교육사 자격증 발급 신청 안내",
        "date1" : "2023.06.20",
        "content2": "- 2024-1학기 신학대학 영성훈련 안내",
        "date2" : "2023.06.10",
        "content3": "- 2024학년도 1학기 강의평가 실시 안내",
        "date3" : "2023.06.07",
        "content4": "- 2024학년도 1학기 성적처리 일정 안내",
        "date4" : "2023.06.07",
        "content5": "- 학칙 개정(안) 공고",
        "date5" : "2023.06.04",
    },
    {
        "id": "Schedulebtn2",
        "content1": "- 성결대-안양식기독교연합회, 기독교 글로벌 리더 양성 위한 업무 협약",
        "date1" : "날짜",
        "content2": "새소식 내용 2",
        "date2" : "날짜",
        "content3": "새소식 내용 3",
        "date3" : "날짜",
        "content4": "새소식 내용 4",
        "date4" : "날짜",
        "content5": "새소식 내용 5",
        "date5" : "날짜",
    },
    {
        "id": "Schedulebtn3",
        "content1": "장학/등록 내용 1",
        "date" : "날짜1",
        "content2": "장학/등록 내용 2",
        "date" : "날짜2",
        "content3": "장학/등록 내용 3",
        "date" : "날짜3",
        "content4": "장학/등록 내용 4",
        "date" : "날짜4",
        "content5": "장학/등록 내용 5",
        "date" : "날짜5",
    },
    {
        "id": "Schedulebtn4",
        "content1": "입학 내용 1",
        "date" : "날짜1",
        "content2": "입학 내용 2",
        "date" : "날짜2",
        "content3": "입학 내용 3",
        "date" : "날짜3",
        "content4": "입학 내용 4",
        "date" : "날짜4",
        "content5": "입학내용 5",
        "date" : "날짜5",
    },
    {
        "id": "Schedulebtn5",
        "content1": "취업 내용 1",
        "date" : "날짜1",
        "content2": "취업 내용 2",
        "date" : "날짜2",
        "content3": "취업 내용 3",
        "date" : "날짜3",
        "content4": "취업 내용 4",
        "date" : "날짜4",
        "content5": "취업 내용 5",
        "date" : "날짜5",
    },
    {
        "id": "Schedulebtn6",
        "content1": "학생 내용 1",
        "date" : "날짜1",
        "content2": "학생 내용 2",
        "date" : "날짜2",
        "content3": "학생 내용 3",
        "date" : "날짜3",
        "content4": "학생 내용 4",
        "date" : "날짜4",
        "content5": "학생 내용 5",
        "date" : "날짜5",
    },
    {
        "id": "Schedulebtn7",
        "content1": "글로벌 내용 1",
        "date" : "날짜1",
        "content2": "글로벌 내용 2",
        "date" : "날짜2",
        "content3": "글로벌 내용 3",
        "date" : "날짜3",
        "content4": "글로벌 내용 4",
        "date" : "날짜4",
        "content5": "글로벌 내용 5",
        "date" : "날짜5",
    },
    {
        "id": "Schedulebtn8",
        "content1": "일반 내용 1",
        "date" : "날짜1",
        "content2": "일반 내용 2",
        "date" : "날짜2",
        "content3": "일반 내용 3",
        "date" : "날짜3",
        "content4": "일반 내용 4",
        "date" : "날짜4",
        "content5": "일반 내용 5",
        "date" : "날짜5",
    },
    {
        "id": "Schedulebtn9",
        "content1": "비교과 내용 1",
        "date" : "날짜1",
        "content2": "비교과 내용 2",
        "date" : "날짜2",
        "content3": "비교과 내용 3",
        "date" : "날짜3",
        "content4": "비교과 내용 4",
        "date" : "날짜4",
        "content5": "비교과 내용 5",
        "date" : "날짜5",
    }
];

// 일정 데이터를 표시하는 함수
function displaySchedule(schedule) {
    const scheduletemplate =
    `
    <div class="scheduletemplate w-full flex flex-row justify-between py-[17px] px-[40px] border-solid border-b-[1px] border-[#E4E4E4] overflow-hidden">
        <a class="truncate" href=""><span class="scheduletemplateC text-[#2C2C2C] text-[18px] font-light">${schedule.content1}</span></a>
        <span class="titillium overflow-hidden text-[#656565] text-[16px] font-light">${schedule.date1}</span>
    </div>
    <div class="scheduletemplate w-full flex flex-row justify-between py-[17px] px-[40px] border-solid border-b-[1px] border-[#E4E4E4] overflow-hidden">
        <a class="truncate" href=""><span class="scheduletemplateC text-[#2C2C2C] text-[18px] font-light">${schedule.content2}</span></a>
        <span class="titillium overflow-hidden text-[#656565] text-[16px] font-light">${schedule.date2}</span>
    </div>
    <div class="scheduletemplate w-full flex flex-row justify-between py-[17px] px-[40px] border-solid border-b-[1px] border-[#E4E4E4] overflow-hidden">
        <a class="truncate" href=""><span class="scheduletemplateC text-[#2C2C2C] text-[18px] font-light">${schedule.content3}</span></a>
        <span class="titillium overflow-hidden text-[#656565] text-[16px] font-light">${schedule.date3}</span>
    </div>
    <div class="scheduletemplate w-full flex flex-row justify-between py-[17px] px-[40px] border-solid border-b-[1px] border-[#E4E4E4] overflow-hidden">
        <a class="truncate" href=""><span class="scheduletemplateC text-[#2C2C2C] text-[18px] font-light">${schedule.content4}</span></a>
        <span class="titillium overflow-hidden text-[#656565] text-[16px] font-light">${schedule.date4}</span>
    </div>
    <div class="scheduletemplate w-full flex flex-row justify-between py-[17px] px-[40px] border-solid border-b-[1px] border-[#E4E4E4] overflow-hidden">
        <a class="truncate" href=""><span class="scheduletemplateC text-[#2C2C2C] text-[18px] font-light">${schedule.content5}</span></a>
        <span class="titillium overflow-hidden text-[#656565] text-[16px] font-light">${schedule.date5}</span>
    </div>
    `;
    $(".SecondScheduleSection").html(scheduletemplate);
}

// 페이지 로드 시 첫 번째 버튼의 내용을 표시
$(document).ready(function() {
    displaySchedule(scheduledata[0]);

    // 버튼 클릭 이벤트 핸들러
    $(".button").click(function() {
        const buttonId = $(this).attr('id');
        const schedule = scheduledata.find(s => s.id === buttonId);
        if (schedule) {
            displaySchedule(schedule);
        }
    });
});

document.addEventListener('DOMContentLoaded',()=>{
    document.get
}
)





