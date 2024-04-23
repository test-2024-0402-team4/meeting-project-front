import instance from "../utils/instance"

export const getTeacherProfiles = async({params}) =>{
    return await instance.get("/account/teacher/profiles",params)
    
}   

export const getTeacherProfile = async(userId) =>{
    return await instance.get(`/account/teacher/profile?userId=${userId}`)
    
}

// 선생 필수 정보 요청
export const teacherProfileRequest = async (data) => {
    return await instance.post("/account/teacher/profile", data);
}