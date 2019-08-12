class StateLoader {

    loadState() {
        try {
            let state = localStorage.getItem("http://localhost:8080/state");
            if (state !== undefined && state !== null) {
                return JSON.parse(state);
            }
        } catch (error) {
            // 여기에 storage Error 메세지 넣든지 
            console.log('error storage 불러오기 에러 입니다.', error)
        }
        return this.initialState();
    }

    saveState(state) {
        try {
            let json = JSON.stringify(state);
            localStorage.setItem("http://localhost:8080/state", json);
        } catch (error) {
            console.log('error storage 저장 에러 입니다.', error)
        }
    }

    initialState() {
        return {
            auth: {
                retryCount: 0,
                token: null,
                userDetails: null,
                signupModel: null
            },
            product: {
                items: [],
                cart: []
            }
        };
    }
}

export default StateLoader;