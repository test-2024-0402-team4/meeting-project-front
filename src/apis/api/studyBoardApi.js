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

export const updateStudyBoardViewCountRequest = async(studyBoardId) => {
    return await instance.put(`/study/board/view/${studyBoardId}`)
}


export const registerStudyCommentRequest = async(data) => {
    return await instance.post(`/study/board/comment/${data.studyBoardId}`, data)
}

export const getStudyCommentRequest = async(studyBoardId) => {
    return await instance.get(`/study/board/comments/${studyBoardId}`)
}

export const deleteStudyCommentRequest = async(studyCommentId) => {
    return await instance.delete(`/study/board/comment/${studyCommentId}`)
}

export const updateStudyCommentRequest = async(data) => {
    return await instance.put(`/study/board/comment/${data.studyCommentId}`,data)
}

export const getUserIdByStudyBoardIdRequest = async(studyBoardId) => {
    return await instance.get(`/study/board/single/${studyBoardId}`)
}

export const getUserGenderType = async(userId) => {
    return await instance.get(`/study/board/genderImg/${userId}`)
}

export const getUserNicknameByStuduBoard = async(userId) => {
    return await instance.get(`/study/board/nickname/${userId}`)
}