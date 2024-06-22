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

//nav 각 하위 목록
const data = [
  {
    성결소개: {
      교육이념: {
        title: "교육이념",
        items: [
          {
            name: "대학이념",
            link: "https://www.sungkyul.ac.kr/skukr/233/subview.do",
          },
          {
            name: "VISION 2030",
            link: "https://www.sungkyul.ac.kr/skukr/234/subview.do",
          },
          {
            name: "대학별 교육목표",
            link: "https://www.sungkyul.ac.kr/skukr/235/subview.do",
          },
        ],
      },
      총장실: {
        title: "총장실",
        items: [
          {
            name: "총장인사말",
            link: "https://www.sungkyul.ac.kr/skukr/236/subview.do",
          },
          {
            name: "총장소개",
            link: "https://www.sungkyul.ac.kr/skukr/237/subview.do",
          },
          {
            name: "역대 학장 및 총장",
            link: "https://www.sungkyul.ac.kr/skukr/238/subview.do",
          },
        ],
      },
      학교법인: {
        title: "학교법인",
        items: [
          {
            name: "이사장소개",
            link: "https://www.sungkyul.ac.kr/skukr/239/subview.do",
          },
          {
            name: "역대 이사장",
            link: "https://www.sungkyul.ac.kr/skukr/240/subview.do",
          },
          {
            name: "법인 임원",
            link: "https://www.sungkyul.ac.kr/skukr/241/subview.do",
          },
          {
            name: "이사회",
            link: "https://www.sungkyul.ac.kr/skukr/242/subview.do",
          },
          {
            name: "기부금 공개",
            link: "https://www.sungkyul.ac.kr/skukr/243/subview.do",
          },
          {
            name: "산하기관",
            link: "https://www.sungkyul.ac.kr/skukr/244/subview.do",
          },
        ],
      },
      성결의역사: {
        title: "성결의 역사",
        items: [
          {
            name: "연혁",
            link: "https://www.sungkyul.ac.kr/skukr/375/subview.do",
          },
          {
            name: "설립자",
            link: "https://www.sungkyul.ac.kr/skukr/381/subview.do",
          },
        ],
      },
      성결의상징: {
        title: "성결의 상징",
        items: [
          {
            name: "UI",
            link: "https://www.sungkyul.ac.kr/skukr/247/subview.do",
          },
          {
            name: "교가",
            link: "https://www.sungkyul.ac.kr/skukr/248/subview.do",
          },
        ],
      },
      대학현황: {
        title: "대학현황",
        items: [
          {
            name: "기구표",
            link: "https://www.sungkyul.ac.kr/skukr/249/subview.do",
          },
          {
            name: "교직원찾기",
            link: "https://www.sungkyul.ac.kr/skukr/250/subview.do",
          },
          {
            name: "부속기관",
            link: "https://www.sungkyul.ac.kr/skukr/383/subview.do",
          },
          {
            name: "자매결연학교",
            link: "https://www.sungkyul.ac.kr/skukr/252/subview.do",
          },
          {
            name: "규정집",
            link: "https://www.sungkyul.ac.kr/skukr/253/subview.do",
          },
          {
            name: "예결산공고",
            link: "https://www.sungkyul.ac.kr/skukr/254/subview.do",
          },
        ],
      },
      성결대홍보: {
        title: "성결대 홍보",
        items: [
          {
            name: "홍보 미디어센터",
            link: "https://www.sungkyul.ac.kr/skukr/401/subview.do",
          },
          {
            name: "성결대학보",
            link: "https://www.skunewspaper.co.kr/",
          },
          {
            name: "SKU NEWS",
            link: "https://www.skunews.co.kr/",
          },
        ],
      },
      캠퍼스안내: {
        title: "캠퍼스안내",
        items: [
          {
            name: "캠퍼스투어",
            link: "https://www.sungkyul.ac.kr/skukr/261/subview.do",
          },
          {
            name: "찾아오시는길",
            link: "https://www.sungkyul.ac.kr/skukr/262/subview.do",
          },
          {
            name: "교내 전화번호",
            link: "https://www.sungkyul.ac.kr/skukr/263/subview.do",
          },
        ],
      },
    },
  },

  {
    대학및대학원: {
      대학: {
        title: "대학",
        items: [
          {
            name: "신학대학",
            link: "https://www.sungkyul.ac.kr/skukr/487/subview.do",
          },
          {
            name: "인문대학",
            link: "https://www.sungkyul.ac.kr/skukr/495/subview.do",
          },
          {
            name: "사회과학대학",
            link: "https://www.sungkyul.ac.kr/skukr/518/subview.do",
          },
          {
            name: "글로벌경영기술대학",
            link: "https://www.sungkyul.ac.kr/skukr/536/subview.do",
          },
          {
            name: "사범대학",
            link: "https://www.sungkyul.ac.kr/skukr/559/subview.do",
          },
          {
            name: "IT공과대학",
            link: "https://www.sungkyul.ac.kr/skukr/577/subview.do",
          },
          {
            name: "예술대학",
            link: "https://www.sungkyul.ac.kr/skukr/600/subview.do",
          },
          {
            name: "파이데이아칼리지",
            link: "https://www.sungkyul.ac.kr/skukr/623/subview.do",
          },
          {
            name: "융합대학",
            link: "https://www.sungkyul.ac.kr/skukr/631/subview.do",
          },
        ],
      },
      대학원: {
        title: "대학원",
        items: [
          {
            name: "일반대학원",
            link: "https://www.sungkyul.ac.kr/grad/3846/subview.do",
          },
          {
            name: "신학대학원",
            link: "https://www.sungkyul.ac.kr/grad/3850/subview.do",
          },
          {
            name: "사회복지대학원",
            link: "https://www.sungkyul.ac.kr/grad/3854/subview.do",
          },
          {
            name: "교육대학원",
            link: "https://www.sungkyul.ac.kr/grad/6472/subview.do",
          },
          {
            name: "프라임대학원",
            link: "https://www.sungkyul.ac.kr/grad/3862/subview.do",
          },
        ],
      },
      계약학과: {
        title: "계약학과",
        items: [],
      },
    },
  },

  {
    입학안내: {
      대학: {
        title: "대학",
        items: [
          {
            name: "입학전형안내",
            link: "https://www.sungkyul.ac.kr/ipsi/index.do",
          },
          {
            name: "수시",
            link: "https://www.sungkyul.ac.kr/ipsi/93/subview.do",
          },
          {
            name: "정시",
            link: "https://www.sungkyul.ac.kr/ipsi/97/subview.do",
          },
          {
            name: "편입학",
            link: "https://www.sungkyul.ac.kr/ipsi/101/subview.do",
          },
          {
            name: "재외국민/세터민",
            link: "https://www.sungkyul.ac.kr/ipsi/105/subview.do",
          },
          {
            name: "외국인전형",
            link: "https://www.sungkyul.ac.kr/global/index.do",
          },
        ],
      },
      대학원: {
        title: "대학원",
        items: [
          {
            name: "일반대학원",
            link: "https://www.sungkyul.ac.kr/grad/3837/subview.do",
          },
          {
            name: "신학대학원",
            link: "https://www.sungkyul.ac.kr/grad/3838/subview.do",
          },
          {
            name: "사회복지대학원",
            link: "https://www.sungkyul.ac.kr/grad/3840/subview.do",
          },
          {
            name: "교육대학원",
            link: "https://www.sungkyul.ac.kr/grad/3841/subview.do",
          },
          {
            name: "프라임대학원",
            link: "https://www.sungkyul.ac.kr/grad/3842/subview.do",
          },
          {
            name: "편입학",
            link: "https://www.sungkyul.ac.kr/grad/3815/subview.do",
          },
          {
            name: "외국인전형",
            link: "https://www.sungkyul.ac.kr/grad/3814/subview.do",
          },
        ],
      },
      계약학과: {
        title: "계약학과",
        items: [],
      },
      외국인입학: {
        title: "외국인 입학",
        items: [
          {
            name: "학부교육과정",
            link: "https://www.sungkyul.ac.kr/global/index.do",
          },
          {
            name: "한국어교육과정",
            link: "https://www.sungkyul.ac.kr/sklanguage/index.do",
          },
        ],
      },
    },
  },

  {
    대학생활: {
      자치조직: {
        title: "자치조직",
        items: [
          {
            name: "총학생회 회칙",
            link: "https://www.sungkyul.ac.kr/skukr/640/subview.do",
          },
          {
            name: "자치조직",
            link: "https://www.sungkyul.ac.kr/skukr/297/subview.do",
          },
          {
            name: "선거시행세칙",
            link: "https://www.sungkyul.ac.kr/skukr/656/subview.do",
          },
        ],
      },
      동아리: {
        title: "동아리",
        items: [
          {
            name: "기독분과",
            link: "https://www.sungkyul.ac.kr/skukr/439/subview.do",
          },
          {
            name: "문화분과",
            link: "https://www.sungkyul.ac.kr/skukr/448/subview.do",
          },
          {
            name: "예능분과",
            link: "https://www.sungkyul.ac.kr/skukr/453/subview.do",
          },
          {
            name: "체육분과",
            link: "https://www.sungkyul.ac.kr/skukr/458/subview.do",
          },
          {
            name: "학술/봉사분과",
            link: "https://www.sungkyul.ac.kr/skukr/462/subview.do",
          },
        ],
      },
      학교시설: {
        title: "학교시설",
        items: [
          {
            name: "생활관",
            link: "https://www.sungkyul.ac.kr/skukr/304/subview.do",
          },
          {
            name: "보건소",
            link: "https://www.sungkyul.ac.kr/skukr/305/subview.do",
          },
          {
            name: "학술정보관",
            link: "https://www.sungkyul.ac.kr/skukr/306/subview.do",
          },
          {
            name: "복지시설이용",
            link: "https://www.sungkyul.ac.kr/skukr/307/subview.do",
          },
          {
            name: "대학일자리플러스센터",
            link: "https://success.sungkyul.ac.kr/Recruit/LocalService.aspx",
          },
          {
            name: "학생상담센터",
            link: "https://www.sungkyul.ac.kr/skukr/309/subview.do",
          },
          {
            name: "사회봉사센터",
            link: "https://www.sungkyul.ac.kr/withyou/index.do",
          },
          {
            name: "장애학생지원센터",
            link: "https://www.sungkyul.ac.kr/skukr/311/subview.do",
          },
          {
            name: "교수학습지원센터",
            link: "https://ctl.sungkyul.ac.kr/",
          },
          {
            name: "교육혁신지원센터",
            link: "https://www.sungkyul.ac.kr/sites/cei/index.do",
          },
        ],
      },
      사이버신고센터: {
        title: "사이버신고센터",
        items: [
          {
            name: "인권침해 및 성희롱, 성폭력",
            link: "https://www.sungkyul.ac.kr/skukr/312/subview.do",
          },
        ],
      },
    },
  },

  {
    서비스: {
      학사정보: {
        title: "학사정보",
        items: [
          {
            name: "학사일정",
            link: "https://www.sungkyul.ac.kr/skukr/313/subview.do",
          },
          {
            name: "수강신청안내",
            link: "https://www.sungkyul.ac.kr/skukr/321/subview.do",
          },
          {
            name: "학적변동",
            link: "https://www.sungkyul.ac.kr/skukr/468/subview.do",
          },
          {
            name: "부, 복수전공",
            link: "https://www.sungkyul.ac.kr/skukr/471/subview.do",
          },
          {
            name: "교직",
            link: "https://www.sungkyul.ac.kr/skukr/316/subview.do",
          },
          {
            name: "평생교육사",
            link: "https://www.sungkyul.ac.kr/skukr/317/subview.do",
          },
          {
            name: "증명서 발급",
            link: "https://www.sungkyul.ac.kr/skukr/318/subview.do",
          },
          {
            name: "계절학기",
            link: "https://www.sungkyul.ac.kr/skukr/322/subview.do",
          },
          {
            name: "학점교류안내",
            link: "https://www.sungkyul.ac.kr/skukr/319/subview.do",
          },
        ],
      },
      대학직장예비군: {
        title: "대학직장예비군",
        items: [
          {
            name: "병무행정",
            link: "https://www.sungkyul.ac.kr/skukr/324/subview.do",
          },
          {
            name: "군종장교후보생 선발안내",
            link: "https://www.sungkyul.ac.kr/skukr/325/subview.do",
          },
          {
            name: "예비군 안내",
            link: "https://www.sungkyul.ac.kr/skukr/326/subview.do",
          },
          {
            name: "대학직장예비군부대",
            link: "https://www.sungkyul.ac.kr/skukr/327/subview.do",
          },
        ],
      },
      통합역량개발시스템: {
        title: "통합역량개발시스템 (SUCCESS)",
        items: [],
      },
      학술정보관: {
        title: "학술정보관",
        items: [
          {
            name: "XR센터",
            link: "https://www.sungkyul.ac.kr/xrcenter/index.do",
          },
          {
            name: "통합예약시스템",
            link: "https://xrclicker.sungkyul.ac.kr/MakerLibrary/k/#0",
          },
        ],
      },
      등록및장학정보: {
        title: "등록/장학정보",
        items: [
          {
            name: "등록",
            link: "https://www.sungkyul.ac.kr/skukr/329/subview.do",
          },
          {
            name: "장학",
            link: "https://www.sungkyul.ac.kr/skukr/330/subview.do",
          },
          {
            name: "학자금 대출",
            link: "https://www.sungkyul.ac.kr/skukr/331/subview.do",
          },
          {
            name: "학자금중복지원방지",
            link: "https://www.sungkyul.ac.kr/skukr/332/subview.do",
          },
          {
            name: "학생증발급",
            link: "https://www.sungkyul.ac.kr/skukr/333/subview.do",
          },
          {
            name: "장학금 관련 서류 발급 안내",
            link: "https://www.sungkyul.ac.kr/skukr/7161/subview.do",
          },
        ],
      },
      IT지원서비스: {
        title: "IT지원서비스",
        items: [
          {
            name: "SKY 시스템 소개",
            link: "https://www.sungkyul.ac.kr/skukr/334/subview.do",
          },
          {
            name: "메뉴얼 게시판",
            link: "https://www.sungkyul.ac.kr/skukr/335/subview.do",
          },
          {
            name: "교내 백신 설치",
            link: "https://www.sungkyul.ac.kr/skukr/336/subview.do",
          },
          {
            name: "교내 정보화 서비스 안내",
            link: "https://www.sungkyul.ac.kr/skukr/337/subview.do",
          },
          {
            name: "학부(과) 홈페이지 관리",
            link: "https://www.sungkyul.ac.kr/skukr/338/subview.do",
          },
          {
            name: "정보보호",
            link: "https://www.sungkyul.ac.kr/skukr/339/subview.do",
          },
        ],
      },
      주간식단안내: {
        title: "주간식단안내",
        items: [
          {
            name: "학생식당",
            link: "https://www.sungkyul.ac.kr/skukr/340/subview.do",
          },
          {
            name: "교직원식당",
            link: "https://www.sungkyul.ac.kr/skukr/341/subview.do",
          },
        ],
      },
      원격지원서비스: {
        title: "원격지원서비스",
        items: [],
      },
    },
  },

  {
    성결광장: {
      공지사항: {
        title: "공지사항",
        items: [
          {
            name: "새소식",
            link: "https://www.sungkyul.ac.kr/skukr/342/subview.do",
          },
          {
            name: "학사",
            link: "https://www.sungkyul.ac.kr/skukr/343/subview.do",
          },
          {
            name: "학생",
            link: "https://www.sungkyul.ac.kr/skukr/901/subview.do",
          },
          {
            name: "장학/등록/학자금",
            link: "https://www.sungkyul.ac.kr/skukr/344/subview.do",
          },
          {
            name: "입학",
            link: "https://www.sungkyul.ac.kr/skukr/345/subview.do",
          },
          {
            name: "취업/진로개발/창업",
            link: "https://www.sungkyul.ac.kr/skukr/346/subview.do",
          },
          {
            name: "공모/행사",
            link: "https://www.sungkyul.ac.kr/skukr/347/subview.do",
          },
          {
            name: "교육/글로벌",
            link: "https://www.sungkyul.ac.kr/skukr/348/subview.do",
          },
          {
            name: "일반",
            link: "https://www.sungkyul.ac.kr/skukr/349/subview.do",
          },
          {
            name: "입찰구매정보",
            link: "https://www.sungkyul.ac.kr/skukr/350/subview.do",
          },
          {
            name: "사회봉사센터",
            link: "https://www.sungkyul.ac.kr/skukr/351/subview.do",
          },
          {
            name: "장애학생지원센터",
            link: "https://www.sungkyul.ac.kr/skukr/352/subview.do",
          },
          {
            name: "생활관",
            link: "https://www.sungkyul.ac.kr/skukr/353/subview.do",
          },
          {
            name: "비교과",
            link: "https://www.sungkyul.ac.kr/skukr/354/subview.do",
          },
        ],
      },
      통합민원: {
        title: "구성원참여소통(통합민원)",
        items: [
          {
            name: "학사/학적변동",
            link: "https://www.sungkyul.ac.kr/skukr/355/subview.do",
          },
          {
            name: "장학/학자금대출",
            link: "https://www.sungkyul.ac.kr/skukr/356/subview.do",
          },
          {
            name: "등록금",
            link: "https://www.sungkyul.ac.kr/skukr/357/subview.do",
          },
          {
            name: "예비군",
            link: "https://www.sungkyul.ac.kr/skukr/360/subview.do",
          },
          {
            name: "교목실",
            link: "https://www.sungkyul.ac.kr/skukr/361/subview.do",
          },
          {
            name: "IT서비스",
            link: "https://www.sungkyul.ac.kr/skukr/362/subview.do",
          },
          {
            name: "소비자생활협동조합",
            link: "https://www.sungkyul.ac.kr/skukr/363/subview.do",
          },
          {
            name: "시설물수리요청",
            link: "https://www.sungkyul.ac.kr/skukr/364/subview.do",
          },
          {
            name: "공익신고",
            link: "https://www.sungkyul.ac.kr/skukr/6463/subview.do",
          },
        ],
      },
      정책제안: {
        title: "구성원참여소통(학사구조 및 정책제안)",
        items: [
          {
            name: "교내인 정책제안",
            link: "https://www.sungkyul.ac.kr/skukr/902/subview.do",
          },
          {
            name: "교외인 정책제안",
            link: "https://www.sungkyul.ac.kr/skukr/903/subview.do",
          },
        ],
      },
      알림방: {
        title: "알림방",
        items: [
          {
            name: "청탁금지",
            link: "https://www.sungkyul.ac.kr/skukr/368/subview.do",
          },
          {
            name: "개인정보처리방침",
            link: "https://www.sungkyul.ac.kr/skukr/482/subview.do",
          },
        ],
      },
      자료실: {
        title: "자료실",
        items: [
          {
            name: "각종신청서",
            link: "https://www.sungkyul.ac.kr/skukr/370/subview.do",
          },
          {
            name: "행정자료실",
            link: "https://www.sungkyul.ac.kr/skukr/371/subview.do",
          },
        ],
      },
    },
  },
];

function createSubMenuContent(subMenuData) {
  let content = "";
  for (const category in subMenuData) {
    const section = subMenuData[category];
    content += `<div>
                  <div>${section.title}</div>
                  <div class="w-full border-[1px] border-black/[.05] my-2"></div>
                  <div class="font-light text-sm">
                    <ul class="list-none my-2">`;
    section.items.forEach((item) => {
      content += `<li class="flex items-center mb-2 mr-4 hover:text-[#295CA4]">
                    <div class="w-1 h-1 mr-2 bg-[#969696]"></div>
                    <a href="${item.link}">${item.name}</a>
                  </li>`;
    });
    content += `    </ul>
                  </div>
                </div>`;
  }
  return content;
}

function populateSubMenus() {
  const sungkyulContent = createSubMenuContent(data[0].성결소개);
  document.getElementById("submenu-content-sungkyul").innerHTML =
    sungkyulContent;

  const collegeContent = createSubMenuContent(data[1].대학및대학원);
  document.getElementById("submenu-content-college").innerHTML = collegeContent;

  const admissionContent = createSubMenuContent(data[2].입학안내);
  document.getElementById("submenu-content-admission").innerHTML =
    admissionContent;

  const campusLifeContent = createSubMenuContent(data[3].대학생활);
  document.getElementById("submenu-content-campuslife").innerHTML =
    campusLifeContent;

  const serviceContent = createSubMenuContent(data[4].서비스);
  document.getElementById("submenu-content-service").innerHTML = serviceContent;

  const squareContent = createSubMenuContent(data[5].성결광장);
  document.getElementById("submenu-content-square").innerHTML = squareContent;
}

document.addEventListener("DOMContentLoaded", populateSubMenus);
