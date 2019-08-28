# THIS REPOSITORY IS FOR ❗️FRONTEND❗️ONLY


❗️src/index.js 파일 맨 위에 해당 프로젝트 버전과 날짜 명시



----------------------------------------------------------------------------------------------------

.js 등 파일명, folder 명  CamelCase 사용 (ex: ProductList.js)

stateless,  

----------------------------------------------------------------------------------------------------



❗️Git Clone 부터 merge 까지


git remote를 내 로컬에 복사하기(프로젝트 다운)

 $ git clone https://github.com/mrsir89/SuperFarmClient


'SuperFarmClient' 프로젝트가 복사됨, 해당 프로젝트로 이동하기

 $ cd SuperFarmClient 


내가 push(remote에 upload)할 branch로 이동하기

 $ git checkout 브랜치명


- 내 로컬(내 컴퓨터 드라이브)과 remote의 내 branch가 동기화 된다.

- 여기서 프로젝트 오픈하여 작업한다.

- 변경사항이 생긴다.


변경된 프로젝트를 내 branch에 upload 하기

 $ git branch--------------------------------(현재 branch 어디인지 확인!!)
 
 $ git status--------------------------------(상태확인, 무엇이 바뀌었는지 빨간색으로 처리됨)
 
 $ git add 변경된파일이름------------------------(변경사항이 초록색으로 바뀜(staging 영역으로) -A는 전부 다)
 
 $ git commit -m "description"---------------(commit message 작성, 여기서부터 merge 가능)
 
 $ git push----------------------------------(remote 저장소에 upload 됨. Test가능하고 기능구현 완전한 버전만 신중히 push)  
 



merge 하기 (merge전 두 branch의 소스는 각자 변경사항이 있고 commit까지 완료된 상태여야 함)

 $ git branch--------------------------------(현재 branch 확인, HEAD가 됨)
 
 $ git merge merge할branch이름(끌어당길 브랜치)
 














----------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
