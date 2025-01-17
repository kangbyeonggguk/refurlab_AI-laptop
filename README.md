# 💻 리퍼연구소(Refurlab) 

![Group 427322276](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/659d6e39-8b82-4c0e-9fce-3710f5f6afa3)
- 2023.09.25~2023.12.29
- URL : https://refurlab.site
- Test ID : test
- Test PW : testPASSWORD
  <br>
  <br>
  <br>
## 프로젝트 소개
- 리퍼연구소는 중고 노트북을 판매할 때 전문가의 판단 전에 AI를 통해 파손도에 따라 등급 판정을 받아볼 수 있는 서비스를 제공합니다. 
- 노트북의 부위 별 사진을 업로드 해 각 부위 별 파손도와 노트북의 전체 등급을 판정 받고 판매 여부를 결정할 수 있습니다.
- 수리 후 판매하는 노트북의 판매 정보도 확인할 수 있습니다.
  <br>
  <br>
  <br>
## 기술 스택
  <div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white">
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white">
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
  <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
  <img src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white">
  <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
  <img src="https://img.shields.io/badge/googlecolab-F9AB00?style=for-the-badge&logo=googlecolab&logoColor=white">
  <img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">
  </div>
  <br>
  <br>
  
## 역할 분담
### 강병국(FE, BE)
- **UI**
  - 페이지 : 구매하기, 노트북 등급 확인, 내 정보 수정, 관리자 페이지, 등급제 안내
- **기능 및 컴포넌트**
  - 네비게이션 바, 모달창을 이용한 노트북 정렬, 페이지네이션, 검색
- **컨트롤러 및 API** 
  - 관리자 컨트롤러, 소셜 로그인, 문자 인증, 등급 측정한 노트북 정보 불러오기

### 김홍래(FE)
- **UI**
  - 페이지 : 홈, 로그인, 회원가입, 매입신청서 작성 페이지
- **기능 및 컴포넌트**
  - 로그인 유지와 그에 따른 화면 변화

### 음정애(FE)
  - **UI**
    - 페이지 : AI 측정 로딩, AI 등급 측정 결과, 전문가 등급 측정 신청, 관리자 페이지
  - **기능 및 컴포넌트**
    - 로딩 애니메이션

### 박찬익(BE)
  - **컨트롤러 및 API**
    - 노트북 판매 정보 불러오기

### 이수민(BE)
  - **컨트롤러 및 API**
    - 회원가입, 로그인, 로그아웃, 토큰 재발급, AI 등급 측정, 전문가 등급 측정 신청
  <br>
  <br>

## 페이지별 기능
### [홈 화면]
- 사이트 접속 시 초기 화면으로 네비게이션 바, 사이트 안내문구와 등급 측정 신청 페이지로 이동되는 버튼이 있습니다.
- 로그인이 되어 있는 경우에는 다른 페이지로 이동이 가능하지만 아닌 경우에는 로그인 페이지로 이동되게 됩니다.
    
![home](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/7616ea78-082a-4de6-987e-89f636a8126d)
<br>
### [회원가입]
- 회원가입에 필요한 정보를 입력하면 유효성 검사를 진행하고 맞지 않는 경우 입력창 하단에 경고문이 표시됩니다.
- 아이디 형식이 유효하지 않거나 서버의 중복확인 요청을 통과하지 못한 경우, 그 외 입력창의 유효성 검사 결과가 통과하지 못 했을 때 경고 문구가 표시됩니다.
- 모든 유효성 검사가 통과된 경우 회원가입하기 버튼을 클릭해 회원가입을 진행합니다.

![signup](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/c47f9e69-8f30-4aab-b439-f6a3a1294c54)
<br>
### [로그인]
- 아이디와 비밀번호를 입력하면 유효성 검사를 진행하고 맞지 않는 경우 입력창 하단에 경고문이 표시됩니다.
- 모든 유효성 검사가 통과된 경우 로그인하기 버튼을 클릭해 로그인을 진행하고 홈 화면으로 이동합니다.
  
![recording-ezgif com-video-to-gif-converter (2)](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/e8068efd-243a-42d2-9b59-ae5a20b1eb08)
<br>
 ### [로그아웃]
- 네비게이션 바의 로그아웃 버튼을 클릭해 로그아웃을 진행하고 로컬 스토리지의 토큰과 유저 정보를 삭제합니다.

![logout](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/f61573e1-8b19-4258-80c2-ef39aef9fb20)
<br>
### [구매하기]
- 판매 중인 노트북들을 볼 수 있으며 정렬 기능을 사용해 가격의 오름차순, 내림차순으로 정렬하거나 특정 등급에 해당하는 노트북의 정보들만 확인할 수 있습니다.
- 상품을 클릭하면 상품 상세 페이지로 이동합니다.

![laptop sell](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/c195a8cd-6f6b-4df8-9c6c-9d4739cd40d9)
<br>
### [매입신청서 작성]
- 노트북 정보와 부위별 사진을 업로드하고 AI 등급 측정하기 버튼을 클릭해 AI 등급 측정을 받습니다.
- 측정이 완료되는 동안 로딩 화면이 나오고 완료 후 부위별 등급과 노트북 전체 등급이 표시됩니다.
- 측정 완료 화면에서 내부 등급 측정하기 버튼을 통해 전문가 등급 측정을 신청할 수 있습니다.
  
![매입신청서 작성](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/0c2334bb-7383-4cd9-813d-d4b3aa5fc4ca)
![측정 결과](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/3635fbc7-1523-4397-b8fc-96bbee1216ff)
<br>
### [노트북 등급]
- 해당 계정이 측정 완료한 노트북들의 정보를 모아 볼 수 있습니다.
- 정렬 기능을 통해 날짜순으로 오름차순, 내림차순으로 정렬하거나 특정 등급에 해당하는 노트북의 정보들만 확인할 수 있습니다.
  
![노트북 등급](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/ab858cfa-221d-43c6-8937-97fe817f32d2)
<br>
### [내 정보 수정]
- 내 정보 수정 이전에 휴대전화 인증을 진행합니다.
- 휴대전화를 입력 후 인증요청을 하게 되면 휴대전화로 인증번호가 전송되고, 인증번호를 입력해 서버에 확인 요청을 완료한 후에 내 정보 수정 페이지로 이동할 수 있습니다.
- 내 정보 수정 페이지에서는 모든 입력창의 유효성 검사를 통과하였을 경우 내 정보 수정하기 버튼을 클릭해 정보 수정을 진행하고 홈 화면으로 이동합니다.
  
![본인인증](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/be8eb932-d089-484b-ae5d-e39dd8528fa5)
![내정보수정](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/1d4d2f80-e800-42c9-91d2-8aed9744d713)
<br>
### [관리자 페이지-유저 리스트]
- 등록 된 유저 정보들을 확인할 수 있습니다.
- 검색 기능을 통해 특정 유저의 정보만을 확인할 수 있고, 더보기를 클릭해 유저 상세 정보를 볼 수 있습니다.
  
![관리자 페이지 유저리스트](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/b098d921-eeb9-403d-9089-e8a6ca2d17fd)
<br>
### [관리자 페이지-매입 신청서 리스트]
- 등록 된 매입 신청서 리스트를 확인할 수 있습니다.
- 검색 기능을 통해 특정 유저의 매입 신청서 정보만을 확인할 수 있고, 더보기를 클릭해 매입 신청서 상세 정보를 볼 수 있습니다.
- 노트북 이미지를 클릭하면 모달창에서 확대한 사진을 볼 수 있습니다.
- 수정하기로 진행 상황을 변경할 수 있으며 삭제하기로 해당 매입 신청서를 삭제할 수 있습니다.
  
![매입신청서 리스트](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/068c0eff-df0b-4cb4-aa37-7bfbe4cbdced)
<br>

### [관리자 페이지-노트북 리스트]
- 등록 된 노트북 리스트를 확인할 수 있습니다.
- 노트북 추가 버튼으로 모달창을 열고 노트북 정보를 입력하여 새로운 노트북을 추가할 수 있습니다.
- 검색 기능을 통해 특정 노트북의 정만을 확인할 수 있고, 더보기를 클릭해 노트북 상세 정보를 볼 수 있습니다.
- 노트북 이미지를 클릭하면 모달창에서 확대한 사진을 볼 수 있습니다.
- 수정하기로 노트북 정보를 변경할 수 있으며 삭제하기로 해당 노트북 정보를 삭제할 수 있습니다.

![노트북리스트](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/9d176b46-fbf2-438c-ab51-89b538a64b90)
<br>
### [관리자 페이지-판매 노트북 리스트]
- 등록 된 판매 노트북 리스트를 확인할 수 있습니다.
- 노트북 추가 버튼으로 모달창을 열고 판매 노트북 정보를 입력하여 새로운 판매 노트북을 추가할 수 있습니다.
- 판매 노트북 정보 중 모델은 노트북 리스트에 등록된 노트북이 표시됩니다.
- 검색 기능을 통해 특정 노트북의 정만을 확인할 수 있고, 더보기를 클릭해 노트북 상세 정보를 볼 수 있습니다.
- 수정하기로 노트북 정보를 변경할 수 있으며 삭제하기로 해당 노트북 정보를 삭제할 수 있습니다.
  
![판매 노트북 리스트](https://github.com/kangbyeonggguk/refurlab_AI-laptop/assets/152140608/d91cb546-1300-4457-bf66-51b30c8bffa8)
<br>
### [모바일]
- 모바일 환경에서도 불편함이 없도록 반응형 웹을 제작하여 브라우저 사이즈에 따른 UI, 그리드의 변경을 구현하였습니다.
- 모바일 환경에서는 하단에 메뉴 탭이 표시됩니다.
  
<img src=https://github.com/kangbyeonggguk/Refurlab_AI-laptop/assets/152140608/b336e1c0-8b17-4713-bb8f-deb4125c48c2 width=430 height=932>
<br>
<br>

## 브랜치 전략
- Git-flow 전략으로 main, develop 필수 브랜치와 보조 브랜치로 feature 브랜치를 사용했습니다.
  - feature 브랜치는 각 기능 별 개발에 사용했습니다.
  - develop 브랜치는 feature에서 개발된 내용을 저장하는 데 사용했습니다.
  - main 브랜치는 배포하는 역할로 사용했습니다.
  <br>
  <br>

## 후기
브라우저 사이즈에 따른 그리드 변경과 외부 api를 사용해 보는 등 역량을 성장시킬 수 있었습니다.
문자 인증 파트를 구현할 때 보안성을 고려해 로직을 수정했었는데, 프로젝트를 진행해보며 고민의 폭이 넓어진 것 같다는 생각이 들었습니다.
이외에도 Git-flow 전략이나 Notion, Slack과 같이 협업을 위한 툴 사용도 좋은 경험이 된 것 같습니다.
기존까지 개인 프로젝트만 진행해보다 처음으로 협업을 진행해보니 고려해야 할 점도 많았고, 새로 알게 된 것도 많은 시간이 되었습니다.
고민했음에도 명확한 해결책을 찾지 못한 문제들에 아쉬움이 남고, 계속해서 고민해 나가 개선해 나가야겠다 생각하고 있습니다.

