import instansce from "../utils/instance";


export const signinRequest = async (data) => {
    const response = await instansce.post("/auth/signin", data);
    return response;
}

export const findIdRequest = async (data) => {
    const response = await instansce.get(`/auth/findId?name=${data.name}&email=${data.email}`);
    return response
}

// 비밀번호 찾기 - 확인
export const findPasswordRequest = async (data) => {
    const response = await instansce.get(`/auth/findPassword?username=${data.username}&email=${data.email}`);
    return response
}

// 비밀번호 찾기 - 수정
export const modifyPasswordRequest = async (data) => {
    const response = await instansce.put("/auth/modifyPassword", data)
    return response;
}