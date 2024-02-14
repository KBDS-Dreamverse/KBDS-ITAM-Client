export const BASE_URL = "http://localhost:8080/kbitam"

export const API = {

    //회원관리 API
    LOGIN: `${BASE_URL}/login`,
    USER_INFO: `${BASE_URL}/userInfo`,
    DEPT_INFO: `${BASE_URL}/dept`,

    EXPIRE: `${BASE_URL}/{dept}/{contId}/expire`,
    STOP: `${BASE_URL}/{dept}/{contId}/stop`,
    DASHBOARD: `${BASE_URL}/{dept}/{contId}/dashboard`,
    INFO: `${BASE_URL}/{dept}/{contId}/info`,
    REQUEST_ADMIN_LIST :`${BASE_URL}/getassetadminList/{conId}`,
    DEPT_ASSET: `${BASE_URL}/dept/asset`,
    INSTALLGUIDE: `${BASE_URL}/{dept}/{contId}/installguide`,
    USEAGEGUIDE: `${BASE_URL}/{dept}/{contId}/usageguide`


    //CLIENT API


    //ASSET 관리 API

    //ADMIN API

}