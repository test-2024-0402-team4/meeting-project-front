import instance from "../utils/instance"

export const registerImgUrlRequest = async(data) => {
    return await instance.post(`/account/profile/image/${data.userId}`,data)
}


export const registerProfileRequest = async (data) => {
    return await instance.post("/account/profile", data);
}
export const getStudentProfile = async(userId) => {
    return await instance.get(`/account/student/profile/${userId}`)

}