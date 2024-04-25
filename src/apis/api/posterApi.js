import instance from "../utils/instance"

export const getMyPosters = async(params) =>{
    return await instance.get("/account/student/myposters",{params})
    
}

export const getMyPoster = async(params) => {
    return await instance.get("/account/student/myposter", {params})
}

// 학생 - 공고 등록
export const studentRegisterPosterRequest = async (data) => {
    return await instance.post("/account/student/poster", data);
}