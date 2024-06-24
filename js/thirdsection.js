// 대학 데이터(대학별, 이미지, 소속과)
const collegeData = [
	{
		name: "글로벌경영기술대학",
		info: "글로벌경영기술대학은 초연결과 초지능화로 대표되는 4차 산업혁명시대의 글로벌 경영환경에서 경영과 기술의 융합지식과 커뮤니케이션 능력을 가진 차세대 글로벌 전문 경영인을 양성하는 것을 목표로 한다.",
		image: "img/globalManagement.jpg",
		departments: [
			{ name: "관광개발학과", url: "https://www.sungkyul.ac.kr/skukr/539/subview.do" },
			{ name: "경영학과", url: "https://www.sungkyul.ac.kr/skukr/539/subview.do" },
			{ name: "글로벌물류학부", url: "https://www.sungkyul.ac.kr/skukr/549/subview.do" },
			{ name: "산업경영공학과", url: "https://www.sungkyul.ac.kr/skukr/554/subview.do" }
		]
	},
	{
		name: "사범대학",
		info: "사범대학은 학생들에게 교육현상에 대한 총체적 이해 제공을 통해 교사로서 지녀야 할 전문지식과 전인적 품성, 태도를 습득하게 하며, 사회변화에 능동적, 창의적 능력을 발휘할 수 있는 지도적 인격을 갖추게 함으로써 전인적 교사 및 교육전문가를 양성함을 목적으로 한다.",
		image: "img/education.jpg",
		departments: [
			{ name: "유아교육과", url: "https://www.sungkyul.ac.kr/skukr/562/subview.do" },
			{ name: "체육교육과", url: "https://www.sungkyul.ac.kr/skukr/567/subview.do" },
			{ name: "교직부", url: "https://www.sungkyul.ac.kr/skukr/572/subview.do" }
		]
	},
	{
		name: "사회과학대학",
		info: "사회과학대학은 기독교적 인성교육을 바탕으로 인위적·창조적 요소를 포함하여 인간사회의 여러 현상을 과학적·체계적으로 탐구하는 학문인 사회과학에 대한 교육과 연구를 수행하고 있으며 현재 6개의 학과로 구성되어 있다.",
		image: "img/socialScience.jpg",
		departments: [
			{ name: "국제개발협력학과", url: "https://www.sungkyul.ac.kr/skukr/521/subview.do" },
			{ name: "사회복지학과", url: "https://www.sungkyul.ac.kr/skukr/526/subview.do" },
			{ name: "행정학과", url: "https://www.sungkyul.ac.kr/skukr/531/subview.do" }
		]
	},
	{
		name: "신학대학",
		info: "신학대학은 그 신학사상이 성경의 핵심 교리인 중생, 성결, 신유, 재림의 사중복음을 중심으로 성결사상을 강조하며 성경을 그대로 믿는 성경적 복음주의신학을 지향하고 있다.",
		image: "img/theology.jpg",
		departments: [
			{ name: "신학부", url: "https://www.sungkyul.ac.kr/skukr/490/subview.do" },
			{ name: "신학과", url: "https://www.sungkyul.ac.kr/skukr/979/subview.do" },
			{ name: "기독교육상담학과", url: "https://www.sungkyul.ac.kr/skukr/983/subview.do" },
			{ name: "문화선교학과", url: "https://www.sungkyul.ac.kr/skukr/987/subview.do" }
		]
	},
	{
		name: "예술대학",
		info: "예술대학은 빠르게 변해가는 현대예술의 흐름에 맞추어 그에 걸맞은 영성, 실력 및 창의적 예술성의 전문적 양성을 위하여 실용적 교육에 힘쓰고 있다.",
		image: "img/artCollege.jpg",
		departments: [
			{ name: "음악학부", url: "https://www.sungkyul.ac.kr/skukr/603/subview.do" },
			{ name: "연극영화학부", url: "https://www.sungkyul.ac.kr/skukr/608/subview.do" },
			{ name: "뷰티디자인학과", url: "https://www.sungkyul.ac.kr/skukr/613/subview.do" },
			{ name: "실용음악과", url: "https://www.sungkyul.ac.kr/skukr/618/subview.do" }
		]
	},
	{
		name: "융합대학",
		info: "우리대학은 4차 산업혁명 시대를 준비하고, 대학 자체 특화전략의 일환으로 융합학부 내 다양한 융합전공을 개설 운영한다. 개설되는 융합전공은 재학생 모두에게 개방되어 주전공, 복수전공, 부전공 등으로 이수할 수 있다.",
		image: "img/convergence.jpg",
		departments: [
			{ name: "융합학부", url: "https://www.sungkyul.ac.kr/skukr/631/subview.do" }
		]
	},
	{
		name: "인문대학",
		info: "인문대학은 어·문학 능력을 향상시켜 다양한 문화현상에 대한 깊은 이해와 통찰력을 갖게 하여 전공별 전문지식과 실무능력을 갖춘 창의적 전문인으로서 국가와 인류사회를 위해 자율적으로 봉사하는 인재를 양성함을 목적으로 한다.",
		image: "img/liberalArts.jpg",
		departments: [
			{ name: "국어국문학과", url: "https://www.sungkyul.ac.kr/skukr/498/subview.do" },
			{ name: "영어영문학과", url: "https://www.sungkyul.ac.kr/skukr/503/subview.do" },
			{ name: "중어중문학과", url: "https://www.sungkyul.ac.kr/skukr/513/subview.do" }
		]
	},
	{
		name: "파이데이아칼리지",
		info: "교육을 통해 변화에 비판적이면서도 합리적으로 대응할 수 있게 하며, 미래 인재의 융·복합적 사고 능력, 창의 혁신 능력, 실천력을 배양시켜 균형 잡힌 사고와 미래 사회 선도 능력을 갖춘 지속가능 사회를 위해 헌신하는 인재를 양성한다.",
		image: "img/paideia.jpg",
		departments: [
			{ name: "파이데이아학부", url: "https://www.sungkyul.ac.kr/skukr/490/subview.do" }
		]
	},
	{
		name: "IT 공과대학",
		info: "성결대학교 공과대학은 공학기술자가 현대 사회에서 지고 있는 막중한 책임과 역할에 유의하여 교육에 임하고 있다. 공과대학은 그 전문성에 따라 컴퓨터 공학, 정보통신 공학, 멀티미디어 공학, 산업경영으로 구분하여 교육에 임하고 있다.",
		image: "img/ITtech.jpg",
		departments: [
			{ name: "컴퓨터공학과", url: "https://www.sungkyul.ac.kr/skukr/580/subview.do" },
			{ name: "정보통신공학과", url: "https://www.sungkyul.ac.kr/skukr/585/subview.do" },
			{ name: "미디어소프트웨어학과", url: "https://www.sungkyul.ac.kr/skukr/590/subview.do" },
			{ name: "도시디자인정보공학과", url: "https://www.sungkyul.ac.kr/skukr/595/subview.do" }
		]
	},
];

//하단 페이지 번호 전환
function updatePageIndex() {
	const pageIndex = document.getElementById('pageIndex');
	const totalColleges = collegeData.length;
	pageIndex.textContent = `${String(currentIndex + 1).padStart(2, '0')}/${String(totalColleges).padStart(2, '0')}`;
}

let currentIndex = 0;

function collegeInfoChange() {
	const collegeImage = document.getElementById('collegeImage');
	const collegeName = document.getElementById('collegeName');
	const collegeInfo = document.getElementById('collegeInfo');
	const departmentList = document.getElementById('departmentList');

	// 페이드 아웃
	//collegeImage.classList.add('opacity-0');
	collegeName.classList.add('opacity-0');
	collegeInfo.classList.add('opacity-0');

	setTimeout(() => {
		// 대학 정보 변경
		const college = collegeData[currentIndex];
		collegeImage.src = college.image;
		collegeName.textContent = college.name;
		collegeInfo.textContent = college.info;

		departmentList.innerHTML = '';
		college.departments.forEach(depart => {
			const li = document.createElement('li');
			li.innerHTML = `<a href="${depart.url}" class="block py-2 bg-white rounded-full text-sm text-gray-800 text-center transition-all duration-300 hover:bg-blue-500 hover:text-white">${depart.name}</a>`;
			departmentList.appendChild(li);
		});

		// 학과가 3개보다 적으면 대학 소개 파트(id:collegeTextContent)의 크기가 바뀌는 것 방지 목적의 li 요소 생성(투명 요소)
		if (college.departments.length < 3) {
			const dummyCount = 2 - college.departments.length;
			for (let i = 0; i < dummyCount; i++) {
				const dummyLi = document.createElement('li');
				dummyLi.innerHTML = '<div class="py-2 bg-transparent"></div>';
				departmentList.appendChild(dummyLi);
			}
		}

		// 페이드 인
		//collegeImage.classList.remove('opacity-0');
		collegeName.classList.remove('opacity-0');
		collegeInfo.classList.remove('opacity-0');

		updatePageIndex();
	}, 500); // 0.5초 후에 내용 변경
}

// 버튼 누르면 인덱스 조절해서 대학 내용 바꿈 (끝에서 다시 처음으로 갈 수 있게)
document.getElementById('prevBtn').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + collegeData.length) % collegeData.length;
	collegeInfoChange();
});

document.getElementById('nextBtn').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % collegeData.length;
	collegeInfoChange();
});

collegeInfoChange();

document.addEventListener('DOMContentLoaded', function () {
	const newsBox = document.querySelector('.news_detail');
	const upButton = document.getElementById('newsUpBtn');
	const downButton = document.getElementById('newsDownBtn');

	function smoothScroll(element, targetScroll, duration) {
		const startScroll = element.scrollTop;
		const distance = targetScroll - startScroll;
		let startTime = null;

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = easeInOutCubic(timeElapsed, startScroll, distance, duration);
			element.scrollTop = run;
			if (timeElapsed < duration) requestAnimationFrame(animation);
		}

		function easeInOutCubic(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t * t + b;
			t -= 2;
			return c / 2 * (t * t * t + 2) + b;
		}

		requestAnimationFrame(animation);
	}

	upButton.addEventListener('click', function () {
		const targetScroll = newsBox.scrollTop - 530;
		smoothScroll(newsBox, targetScroll, 1000);
	});

	downButton.addEventListener('click', function () {
		const targetScroll = newsBox.scrollTop + 530;
		smoothScroll(newsBox, targetScroll, 1000);
	});
});
