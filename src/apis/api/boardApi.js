import instance from "../utils/instance"

export const registerStudentBoard = async(data) => {
    return await instance.post("/board/student", data);
}

export const searchBoardListRequest = async(params) => {
    return await instance.get("/board/student/boardList",{params})
}

export const getStudentCount = async(params) => {
    return await instance.get("/board/student/boardList/count",{params})
}

export const getSingleBoardReqeust = async(studentBoardId) => {
    return await instance.get(`/board/student/comment/${studentBoardId}`)
}

export const deleteBoardRequest = async(studentBoardId) => {
    return await instance.delete(`/board/student/comment/${studentBoardId}`)
}

export const updateBoardRequest = async({studentBoardId, data}) => {
    return await instance.put(`/board/student/update/${studentBoardId}`,data)
}