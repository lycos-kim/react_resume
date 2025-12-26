export const header = {
    name: "김수현",
    desc: "풀스택 개발자 15년차",
    email: "shiny3sky@naver.com",
    github: "https://lycos-kim.github.io/",
    blog: "",
};

export const intro = {
    subject: "Introduce",
    profile: "profile.png",
    intro: `
    비즈니스 가치를 설계하고 레거시를 현대화하는 풀스택 개발자\n
    9년의 오너십과 책임감: HVAC-WEB 시스템의 탄생부터 글로벌 고도화까지 9년간 End-to-End 과정을 리딩 하며, 단순 개발을 넘어 프로젝트의 성공을 끝까지 견인하는 주도적 역할을 수행했습니다.\n
    복잡한 레거시의 웹 표준 전환: C++/MFC 기반 시스템을 WebAssembly 및 HTML5 Canvas 기술을 활용하여 웹으로 완벽히 포팅하고, 아키텍처 재설계를 통해 성능을 최적화했습니다.\n
    전략적 인프라 및 DB 현대화: 글로벌 서비스 대응을 위한 AWS 마이그레이션과 비용 절감을 위한 DB 전환(Oracle to MariaDB)을 성공적으로 완수했습니다.\n
    사용자 중심의 설계 철학: 기술적 화려함보다 사용자 입장에서의 시스템 활용성을 우선시하며 데이터 처리에 있어서 정확도와 실시간성 확보를 통한 비즈니스 가치의 극대화를 최우선적으로 고려합니다. 
    `
};

export const skills = {
    subject: "Skills",
    contents: [
        {
            category: "Frontend",
            desc: [
                { name: "JavaScript", proficiency: 80 },
                { name: "jQuery", proficiency: 80 },
                { name: "HTML5 Canvas", proficiency: 80 },
                { name: "WebAssembly", proficiency: 60 },
                { name: "Nexacro", proficiency: 90 },
                
            ]
        },
        {
            category: "Backend",
            desc: [
                { name: "Spring", proficiency: 90 },
                { name: "Spring Boot", proficiency: 40 },
                { name: "C++", proficiency: 50 },
                { name: "JAVA", proficiency: 90 },
                { name: "Devon", proficiency: 70 },
                { name: "eGovFrame", proficiency: 80 },
            ]
        }
    ],
};

export const experience = {
    subject: "Experience",
    contents: [
        {
            title: "LG㈜ LATS (LG Air conditioner Technical Solution) System 웹개발",
            subtitle: "아이링크㈜ / 개발팀 / 차장",
            period: "2016.12 ~ 2025.12",
            link: "https://lats.lge.com/",
            desc: [
                /*{ main: "HVAC (Heating, Ventilation, Air Conditioning) 개발/운영", sub: ["~ 라이브러리 사용", "~ 백엔드 개발자로 참여"] },*/
                { main: "HVAC (Heating, Ventilation, Air Conditioning) 개발/운영", sub: [] },
                { main: "LCC (Life Cycle Cost) 1차개발 ", sub: [] },
                { main: "ELAB (Energy Lab) 1차개발 ", sub: [] },
            ],
            keywords: ["JavaScript", "jQuery", "HTML5 Canvas", "WebAssembly", "Devon4.0", "Mybatis", "Python", "Oracle", "MariaDB", "AWS", "Docker", "Git", "Jenkins"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "삼성물산㈜ 원자력 발전소5,6호기 현장 PMIS(Project Management Information System) 구축",
            subtitle: "㈜두올테크 / SI팀 / 과장",
            period: "2016.08 ~ 2016.11",
            link: "",
            desc: [],
            keywords: ["ASP.Net", "C#","MS SQL"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "STX 조선해양 시스템(KPI, EIS, 옥외크레인, 제안정보시스템) 개발, 운영",
            subtitle: "바른정보기술 / 정보시스템팀 / 과장",
            period: "2015.03 ~ 2016.06",
            link: "",
            desc: [],
            keywords: ["eGovFrame", "Oracle"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "한국산업인력공단 원격훈련 모니터링 시스템 구축/운영",
            subtitle: "앤트원정보기술 / SI팀 / 과장",
            period: "2014.08 ~ 2015.01",
            link: "",
            desc: [],
            keywords: ["eGovFrame", "Oracle"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "삼성테크윈㈜에서 HDS로 시스템분리 및 업무지원시스템 운영",
            subtitle: "바른정보기술 / 정보시스템팀 / 과장",
            period: "2014.03 ~ 2014.07",
            link: "",
            desc: [],
            keywords: ["Java", "JSP", "ASP"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "ST정보기술 / SI팀 / 대리",
            subtitle: "",
            period: "2013.05 ~ 2014.03",
            link: "",
            desc: [
                { main: "두산정보통신㈜ 사회보험 취득상실 시스템 운영", sub:[]},
                { main: "두산건설㈜ HRSG사업부 HR시스템 운영", sub:[]},
                { main: "두산중공업㈜ 연구과제관리시스템(Doosan Research Management System) 구축", sub:[]}
            ],
            keywords: ["Java", "JSP", "ASP.Net", "MS SQL", "Oracle"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "(유)코아시스템 / 시스템사업팀 / 대리",
            subtitle: "",
            period: "2010.10 ~ 2013.03",
            link: "https://coresystem.kr/",
            desc: [
                { main: "효성㈜ 안전보건관리시스템 운영", sub:[]},
                { main: "효성굿스프링스㈜ 펌프선정시스템 구축", sub:[]},
                { main: "두산엔진㈜ 수출입통관시스템 구축", sub:[]},
                { main: "두산엔진㈜ 부품판매 시스템 운영", sub:[]}
            ],
            keywords: ["Java", "JSP", "XPLATFORM", "Oracle"],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "㈜아이액츠 / 개발팀 / 사원",
            subtitle: "",
            period: "2009.01 ~ 2010.09",
            link: "https://www.iacts.co.kr/",
            desc: [
                { main: "부산시의회 홈페이지 개선 및 전자회의록 구축", sub:[]},
                { main: "기업정보 홈페이지 웹 접근성 및 홈페이지 개선", sub:[]},
                { main: "진주평생학습 웹접근성 개선", sub:[]},
                { main: "부산국악원 온라인 접수시스템", sub:[]},
                { main: "부산시 시정 홈페이지 통합 3단계 산업", sub:[]}
            ],
            keywords: ["Java", "JSP", "웹표준", "웹접근성", "MySQL", "Oracle", "PHP" ],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const projects = {
    subject: "Projects",
    contents: [
        {
            title: "HVAC-WEB 개발 및 글로벌 서비스 고도화, LCC (Life Cycle Cost) 1차개발, ELAB (Energy Lab) 1차개발",
            subtitle: "HVAC (Heating, Ventilation, Air Conditioning): 냉난방 공조 시스템 건물 조건에 맞는 최적의 모델(Multi V, Multi, Single 등) 선택, 냉매, 배관 직경/길이 계산, 장비 일람표 작성을 지원하는 시스템 ",
            period: "2016.12 ~ 2025.12",
            link: "https://lats.lge.com",
            desc: [
                { main: "레거시 시스템 웹 포팅 및 WebAssembly 일부 도입", sub: ["C++/MFC 기반의 HVAC 설계 로직 및 DLL 소스를 분석", "JavaScript로 포팅하고 HTML5 Canvas로 GUI Drawing 로직 대체 구현", "WebAssembly를 도입하여 기존 MFC 코드를 웹 환경에서 재사용함", "매크로 사용으로 개발 효율을 증대 및 MFC 로직을 웹에서 똑같이 구현하여 로직 일관성 확보","LG B2B 포털을 벤치마킹하여 사용자 친화적인 웹 UI/UX 설계"] },
                { main: "글로벌 환경 최적화 및 클라우드 마이그레이션", sub:["시스템 속도 개선 및 비용 절감을 위해 AWS 클라우드 환경으로 인프라 전면 개편", "Oracle DB를 AWS RDS MariaDB로 마이그레이션. 운영 비용 절감 및 성능 최적화", "스크립트 최적화, Backend 아키텍처 개선, DB 튜닝을 통해 글로벌 사용자 대상 안정적 서비스 제공"]},
                { main: "외부 시스템 연동 및 데이터 처리", sub:["Python 기반 리포트 출력 시스템과 WebSocket 통신 (JSON 형식)을 구현", "Salesforce API (OAuth2 토큰 방식) 연동을 통해 CRM 데이터 연동 및 비즈니스 데이터 처리 자동화"]},
                { main: "프로젝트 관리 및 프로세스 개선 주도", sub:["MFC HVAC과의 비효율적인 소스 동기화 문제(대규모 패치 충돌)를 인지하여 웹 시스템의 독립적인 개발 방향성을 제시하여 개발 프로세스 안정화에 기여","MFC HVAC의 Full-Data Caching 방식을 데이터 페칭(Fetching)을 최적화", "데이터 거버넌스 확립을 통한 전사적 업무 효율 혁신(Master DB를 도입)"]}
            ],
            keywords: ["JavaScript", "jQuery", "HTML5 Canvas", "WebAssembly", "Devon4.0", "Mybatis", "Python", "Oracle", "MariaDB", "AWS", "Docker", "Git", "Jenkins"],
            folder: "lg",
            images: ["login.png","main.png","projectList.png","projectDetail_projectInfo.png","projectDetail_designInfo.png","projectDetail_simulation.png","projectDetail_model.png","projectDetail_schematic.png","projectDetail_download.png"],
            pdfs: [
                /*
                { pdf: "1.pdf", thumbnail: "1-thumbnail.png" },
                { pdf: "1.pdf", thumbnail: "2-thumbnail.png" },
                 */
            ]
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ]
};

export const awards = {
    subject: "Awards",
    contents: [
        {
            title: "대상",
            subtitle: "~ 프로젝트",
            period: "2021.01.01",
            link: "",
            desc: [{ main: "~ 프로젝트로 입상", sub: ["~ 라이브러리 사용"] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const research = {
    subject: "Research",
    contents: [
        {
            title: "~ Journal",
            subtitle: "~ 연구",
            period: "2021.01.01",
            link: "",
            desc: [{ main: "~ 에 관한 연구", sub: [] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const education = {
    subject: "Education",
    contents: [
        {
            title: "인제대학교 컴퓨터공학과 졸업",
            subtitle: "",
            period: "2000.03 ~ 2008.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "울산 성신고등학교 졸업",
            subtitle: "",
            period: "1997.03 ~ 2000.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const certificate = {
    subject: "Certificate",
    contents: [
        {
            title: "정보처리기사",
            subtitle: "한국산업인력공단",
            period: "2008.08",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "OPC (Oracle Certified Professional) 10g",
            subtitle: "Oracle",
            period: "2008.07",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const footer = { updated: "2025. 12. 24." };

//메인을 배열로 만들어서 출력한다. [experience, projects, awards, research, education, certificate]
export const main = [experience, projects, certificate]