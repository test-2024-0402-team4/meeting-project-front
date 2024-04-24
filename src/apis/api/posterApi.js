import instance from "../utils/instance"

export const getMyPosters = async(params) =>{
    return await instance.get("/account/student/myposters",{params})
    
}

export const getMyPoster = async(params) => {
    return await instance.get("/account/student/myposter", {params})
}