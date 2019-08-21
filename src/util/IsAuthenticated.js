// 이렇게 해 놓으면 껏다 키면 로그인 부터 시작 한다.
// 로그인 모든 조건을 확인 한다.

const isAuthenticated = (auth) => {
    const { token, userDetails } = auth;
    return token !== undefined && token !== null && userDetails !== undefined && userDetails !== null;
};

export default isAuthenticated;
