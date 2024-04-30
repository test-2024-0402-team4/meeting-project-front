import instance from "../utils/instance"

export const registerImgUrlRequest = async(data) => {
    return await instance.post(`/account/profile/image/${data.userId}`,data)
}


export const registerProfileRequest = async (data) => {
    return await instance.post("/account/profile", data);
}

export const getStudentProfile = async (userId) => {
    return await instance.get(`/student/profile/${userId}`)
}

export const searchStudentMypageBoardsRequest = async(userId,params) => {
    return await instance.get(`student/mypage/boards/${userId}`,{params})
}

export const getStudentMypageCount = async(userId,params) => {
    return await instance.get(`student/boards/count/${userId}`,{params})
}

export const searchStudyMypageBoardsRequest = async(userId,params) => {
    return await instance.get(`student/mypage/boards/study/${userId}`,{params})
}

export const getStudyMypageCount = async(userId,params) => {
    return await instance.get(`student/boards/count/study/${userId}`,{params})
}

export const modifyStudentProfile = async (data) => {
    return await instance.put(`/student/profile`, data);
}



