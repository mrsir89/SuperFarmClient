class StateLoader {

    loadState() {
        try {
            console.log(localStorage.getItem)
            let state = localStorage.getItem("http://localhost:8080/state");
            console.log(' loadState 실행 ', state)
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
            console.log(' saveState 실행 ', state)
            let json = JSON.stringify(state);
            localStorage.setItem("http://localhost:8080/state", json);
        } catch (error) {
            console.log('error storage 저장 에러 입니다.', error)
        }
    }

    // 여기 auth에 장바구니, 구매한 목록 추가 
    // product에 카테고리 추가 (upper: [], lower: [])
    initialState() {

        return {

            auth: {
                retryCount: 0,
                token: null,
                userDetails: null,
                signupModel: {}
            },
            product: {
                productBoard: [],
                category: [],
                productBoardDetail: {},
                

            },
            cart: {
                cartlist: []
            },
            board: {
                reviewBoard: [],
                qnaBoard: [],
                noticeBoard: [],
                frequentlyBoard:[]
            },
            userEdit: {
                userDetails: []
            },
            order: {

            }
        }
    };
}

export default StateLoader;
