export const BASE_URL = "http://localhost:8080/kbitam"

export const API = {

    //회원관리 API
    LOGIN: `${BASE_URL}/login`,
    USER_INFO: `${BASE_URL}/userInfo`,
    DEPT_INFO: `${BASE_URL}/dept`,

    EXPIRE: `${BASE_URL}/{dept}/{contId}/expire`,
    STOP: `${BASE_URL}/{dept}/{contId}/stop`,
    DASHBOARD: `${BASE_URL}/{dept}/{contId}/dashboard`,
    REQUEST_ADMIN_LIST :`${BASE_URL}/getassetadminList/{conId}`,

    DEPT_ASSET: `${BASE_URL}/dept/asset`


    //CLIENT API


    //ASSET 관리 API

    //ADMIN API

}