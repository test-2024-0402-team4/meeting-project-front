import instance from "../utils/instance"

export const registerStudentBoard = async(data) => {
    return await instance.post("/student/board", data);
}

export const searchBoardListRequest = async(params) => {
    return await instance.get("/student/boards",{params})
}

export const getStudentCount = async(params) => {
    return await instance.get("/student/boards/count",{params})
}

export const getSingleBoardReqeust = async(studentBoardId) => {
    return await instance.get(`/student/board/${studentBoardId}`)
}

export const deleteBoardRequest = async(studentBoardId) => {
    return await instance.delete(`/student/board/${studentBoardId}`)
}

export const updateBoardRequest = async({studentBoardId, data}) => {
    return await instance.put(`/student/board/${studentBoardId}`,data)
}

export const getStudentCommentRequest = async(studentBoardId) => {
    return await instance.get(`/student/board/comments/${studentBoardId}`)
}
