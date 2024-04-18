import instansce from "../utils/instance";


export const signinRequest = async (data) => {
    const response = await instansce.post("/auth/signin", data);
    return response;
}

export const findIdRequest = async (data) => {
    const response = await instansce.get(`/auth/findId?name=${data.name}&email=${data.email}`);
    return response
}