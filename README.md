# 개인 프로젝트 03 - Genshinimpact Web, 리메이크!

## 👥 Member Info

### 이유승

## 💪🏻프로젝트 목표

- 게임 ‘원신’을 주제로 하는 웹 페이지
- 리메이크에서는 React.js / Context API 등의 사용 능력 증진, 웹 스토리지를 활용한 간단한 데이터 CRUD 기능의 구현 과거에 작성한 난잡한 코드를 더 깨끗한 형태로 개선하는 것을 목표로 진행하였음

### ✔️ 배포

- `Google Firebase Hosting` [🔗Link](https://prj03deploy.web.app/)

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

- 실행 방법 (2가지 중 택 1)
  > 1. 배포 링크를 통한 접속
  > 2. ZIP 파일 다운로드 및 압축 풀기 후 코드 에디터로 실행

```
$ npm i
$ npm run start
```

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)

#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development

![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

## 주요 기능
### 슬라이드 쇼.
  <details>
  <summary>기능 설명</summary>
  
  ```
import { useEffect, useRef, useState } from 'react';

import './Sildeshow.css';

import leftarrow from '../styles/btnleft.png';
import rightarrow from '../styles/btnright.png';

const Sildeshow = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = 5;

  const showSlide = (index) => {
    const listLength = slideLength - 1;

    if (index < 0) {
      setCurrentSlide(listLength);
      return;
    } 
    else if (index > listLength) {
      setCurrentSlide(0);
      return;
    }

    if (index <= listLength) {
      setCurrentSlide(index);
      return;
    } 
  };

  var isActive1 = 'inactive';
  var isActive2 = 'inactive';
  var isActive3 = 'inactive';
  var isActive4 = 'inactive';
  var isActive5 = 'inactive';

  switch (currentSlide) {
    case 0:
        isActive1 = 'active';
        break;
    case 1:
        isActive2 = 'active';
        break;
    case 2:
        isActive3 = 'active';
        break;
    case 3:
        isActive4 = 'active';
        break;
    case 4:
        isActive5 = 'active';
        break;
    default:
        break;
}

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useEffect(() => {
    showSlide(0);
  }, []);

  useInterval(() => {
    showSlide(currentSlide);
    setCurrentSlide(currentSlide + 1);

    if (currentSlide > slideLength - 2) {
      setCurrentSlide(0);
    }
  }, 2000);

  return (
    <div className='sildeshow'>

      <img className='sildebutton' src={leftarrow} width='150px' height='150px' alt='' onClick={() => {showSlide(currentSlide - 1)}}/>

      <div className='sildeblock'>

        <div className={['slideimg', `img_${currentSlide}`].join(' ')}/>
      
        <div className='slidepoint'>
            <div className='iconpointer'>
              <button className={['point', `point_${isActive1}`].join(' ')} onClick={() => {showSlide(0)}}/>
              <button className={['point', `point_${isActive2}`].join(' ')} onClick={() => {showSlide(1)}}/>
              <button className={['point', `point_${isActive3}`].join(' ')} onClick={() => {showSlide(2)}}/>
              <button className={['point', `point_${isActive4}`].join(' ')} onClick={() => {showSlide(3)}}/>
              <button className={['point', `point_${isActive5}`].join(' ')} onClick={() => {showSlide(4)}}/>
            </div>
        </div>
      </div>

      <img className='sildebutton' src={rightarrow} width='150px' height='150px' alt='' onClick={() => {showSlide(currentSlide + 1)}}/>

    </div>
  );
};

export default Sildeshow;
  ```

  이번 프로젝트의 슬라이드 쇼는 라이브러리의 사용 없이, 바닐라 자바스크립트만을 가지고 구현하였습니다.

  몇 번째 슬라이드가 화면에 보여져야 하는지 useState로 currentSlide의 값을 제어하고, 좌우에 배치된 버튼을 클릭했을 때 currentSlide의 값이 변화하도록 구현하였습니다. 이때 슬라이드의 전체 길이를 기준으로 currentSlide의 값이 최소값과 최대값에 도달하였을 경우 각각 마지막 슬라이드와 처음 슬라이드가 화면에 출력될 수 있도록 로직을 구현하였습니다. 그리고 이 로직을 활용하여 useInterval을 통해 슬라이드가 일정 시간마다 자동으로 넘어가는 기능도 구현하였습니다.

  </details>

### 페이지네이션
<details>
<summary>기능 설명</summary>

```
import '../ResetStyle.css';
import './pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='paganation-outer'>
            {pageNumbers.map(number => (
                <div className='paganation-btu' key={number}>
                    <button className='paganation-button gifont' onClick={() => paginate(number)}>{number}</button>
                </div>
            ))}
        </div>
    );
};

export default Pagination;
```

우선 페이지네이션 기능을 사용해야하는 컴포넌트에서 필요한 데이터를 호출하여 받아옵니다. 그 다음에는 모든 데이터의 갯수가 얼마인지, 페이지 당 화면에 출력되어야 하는 아이템은 몇 개인지, 전체 아이템의 index에서 가장 처음과 끝 index가 어떻게 되는지 계산합니다.

페이지네이션 컴포넌트는 이 정보들을 props로 받아, 모든 데이터의 갯수와 페이지 당 화면에 출력되어야 하는 아이템의 갯수를 이용해 페이지의 총 길이를 계산하고 이를 map 함수를 이용해 화면에 출력되어야 하는 버튼들을 능동적으로 렌더링합니다. 버튼을 클릭했을 때는 해당 index가 컴포넌트로 넘어가며 컴포넌트에서는 이 값을 이용해 화면에 출력되어야하는 아이템들을 식별하게 됩니다. 

</details>

## 담당 역할

- 프로젝트 기획, UI 디자인, 기능 구현, 프로젝트 버전 관리 등 개발 전반.

## 성과

- Typescript 사용 방법과 사용 이유.
- styled-components 사용 경험 및 사용 능력 증진.
- 커스텀 훅의 사용 이유와 사용 방법 숙지.

## 개선할 점

- Type을 적용하고 사용하는데 이해와 더 숙련된 방법을 익혀야한다.
- 전역 관리 라이브러리 + styled-components + Typescript의 동시 사용 방법 공부.
(JavaScript를 사용했을 때와는 상당히 다르다..)

## 🌲프로젝트 구조

```bash
src
 ┣ assets
 ┃ ┣ fonts
 ┃ ┃ ┗ ja-jp.ttf
 ┃ ┣ background.jpg
 ┃ ┗ menu.png
 ┣ components
 ┃ ┣ Common
 ┃ ┃ ┣ Error.tsx
 ┃ ┃ ┗ Loading.tsx
 ┃ ┣ Info
 ┃ ┃ ┣ ListContainer.tsx
 ┃ ┃ ┗ ListItem.tsx
 ┃ ┣ CharactersList.tsx
 ┃ ┗ MenuBar.tsx
 ┣ constants
 ┃ ┗ fetchData.tsx
 ┣ context
 ┃ ┗ AppDataContext.tsx
 ┣ hooks
 ┃ ┣ useFetchCharacters.tsx
 ┃ ┗ useInfiniteScroll.tsx
 ┣ pages
 ┃ ┣ InfoItemPage.tsx
 ┃ ┗ MainPage.tsx
 ┣ router
 ┃ ┗ AppRouter.tsx
 ┣ styles
 ┃ ┣ GlobalStyles.tsx
 ┃ ┣ InfoListCommonStyles.tsx
 ┃ ┗ ModalCommonStyles.tsx
 ┣ test
 ┃ ┗ AppRouter.test.tsx
 ┣ util
 ┃ ┗ getCharacterImagePath.tsx
 ┣ App.tsx
 ┣ declarations.d.ts
 ┣ index.css
 ┗ index.tsx
```
