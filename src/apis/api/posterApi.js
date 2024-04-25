import instance from "../utils/instance"

export const getMyPosters = async(params) =>{
    return await instance.get("/student/myposters",{params})
}

export const getMyPoster = async(params) => {
    return await instance.get("/student/myposter", {params})
}

export const getTuteePosters = async(params) => {
    return await instance.get("/teacher/tutee/posters", {params})
}

export const getTuteePoster = async(params) => {
    return await instance.get("/teacher/tutee/poster", {params})
}