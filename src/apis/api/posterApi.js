import instance from "../utils/instance"

export const getMyPosters = async(params) =>{
    return await instance.get("/student/myposters",{params})
}

export const getMyPoster = async(params) => {

    return await instance.get("/student/myposter", {params})
}

// 학생 - 공고 등록
export const studentRegisterPosterRequest = async (data) => {
    return await instance.post("/student/poster", data);
}

// 학생(본인)이 올린 공고 수정페이지
export const studentMyPosterModifyRequest = async (data) => {
    return await instance.put("/student/poster", data);
}

export const getTuteePosters = async(params) => {
    return await instance.get("/teacher/tutee/posters", {params})
}

export const getTuteePoster = async(params) => {
    return await instance.get("/teacher/tutee/poster", {params})
}