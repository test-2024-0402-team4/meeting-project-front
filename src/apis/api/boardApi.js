import instance from "../utils/instance"

export const registerStudentBoard = async(data) => {
    return await instance.post("/board/student", data);
}

export const searchBoardListRequest = async(params) => {
    return await instance.get("/board/student/boardList",{params})
}

export const getSingleBoardReqeust = async(params) => {
    return await instance.get(`/board/student/comment/5`,{params})
}

export const deleteBoardRequest = async(data) => {
    return await instance.delete(`/board/student/comment/${data.studentBoardId}`,{data})
    
}