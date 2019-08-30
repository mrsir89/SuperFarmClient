import { Actions } from'../actions/index';
// 인터셉터 정의
// 인터셉터는 여러개 만들수 있다.
/*
    현재 만드는 인터셉터는 request 할때의 interceptor이다.
    req = xmlhttprequest  javaScript에서 ajax headere를 가지고 있다.
*/
//                            [리덕스함수] [xmlhttprequest] -> header를 갖고있다.
const requestInterceptor = ({ getState }, req) => {
    const { auth } = getState();
    const { token } = auth;
    const { userDeatils } = auth;
    let { headers, url } = req;

    

    if (token !== undefined && token !== null && url !== '/oauth/token') {
        const { access_token } = token;

        if (access_token !== undefined && access_token !== null) {
            // 여기서 토큰을 갱신해도 안전함.
            headers = { ...headers, 'Authorization': `Bearer ${access_token}` };
        }
    }
    console.log('requestInterceptor  headers', headers)
    console.log('requestInterceptor  ...req ', req)
    return { ...req, headers }
};

// 리턴.  request 도 있고 response도 있음.
const interceptors = {

    request: [
        requestInterceptor
    ]
};

export default interceptors;
// 토큰을 받는 시점에 토큰을 받은 시간(현재시간 타임스탬프)을 저장한다.
// 토큰을 받은 시간(approvedTime+expires_in)과 현재시간을 비교하여 현재시간이 더 크면 토큰 소멸
// 리프레시 토큰 리트라이에서 실패해도 갱신 가능.