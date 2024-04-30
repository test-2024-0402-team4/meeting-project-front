import instance from "../utils/instance"

export const getTeacherProfiles = async(params) =>{
    return await instance.get("/student/tutor/profiles",{params})
    
}   

export const getTeacherProfile = async (params) => {
    return await instance.get("/student/tutor/profile", { params });
}

// 선생 필수 정보 요청
export const teacherProfileRequest = async (data) => {
    return await instance.post("/account/teacher/profile", data);
}

export const getTeacherMypageProfile = async(userId) => {
    return await instance.get(`/teacher/mypage/profile/${userId}`)
}


export const searchTeacherMypageBoardsRequest = async(userId,params) => {
    return await instance.get(`teacher/mypage/boards/${userId}`,{params})
}

export const getTeacherMypageCount = async(userId,params) => {
    return await instance.get(`teacher/boards/count/${userId}`,{params})
}

export const searchTeacherStudyMypageBoardsRequest = async(userId,params) => {
    return await instance.get(`teacher/mypage/boards/study/${userId}`,{params})
}

export const getTeacherStudyMypageCount = async(userId,params) => {
    return await instance.get(`teacher/boards/count/study/${userId}`,{params})
}