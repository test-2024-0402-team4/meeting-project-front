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


// 학생 프로필 수정
export const modifyStudentProfile = async (data) => {
    return await instance.put(`/student/profile`, data);
}

// 선생님 프로필 수정
export const modifyTeacherProfile = async (data) => {
    return await instance.put(`/teacher/profile`, data);
}


