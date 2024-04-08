import instance from "../utils/instance";

export const signupRequest = async (data) => {
    return await instance.post("/auth/signup", data);
}