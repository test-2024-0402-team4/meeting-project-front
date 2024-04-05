import instance from "../utils/instance"

export const registerStudentBoard = async(data) => {
    return await instance.post("/board/student", data);
}

export const searchBoardListRequest = async(params) => {
    return await instance.get("/board/student/boardList",{params})
}