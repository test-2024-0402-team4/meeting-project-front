import instance from "../utils/instance"

export const registerImgUrlRequest = async(data) => {
    return await instance.post(`/account/profile/image/${data.userId}`,data)
}