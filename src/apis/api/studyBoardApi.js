import instance from "../utils/instance"

export const registerStudyBoard = async(data) => {
    return await instance.post("/study/board", data);
}

export const searchStudyBoardListRequest = async(params) => {
    return await instance.get("/study/boards",{params})
}

export const getStudyCount = async(params) => {
    return await instance.get("/study/boards/count",{params})
}

export const getSingleStudyBoardReqeust = async(studyBoardId) => {
    return await instance.get(`/study/board/${studyBoardId}`)
}

export const deleteStudyBoardRequest = async(studyBoardId) => {
    return await instance.delete(`/study/board/${studyBoardId}`)
}

export const updateStudyBoardRequest = async({studyBoardId, data}) => {
    return await instance.put(`/study/board/${studyBoardId}`,data)
}