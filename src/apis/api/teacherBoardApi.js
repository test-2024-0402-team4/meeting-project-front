import instance from "../utils/instance"

export const registerTeacherBoard = async(data) => {
    return await instance.post("/teacher/board", data);
}

export const searchTeacherBoardListRequest = async(params) => {
    return await instance.get("/teacher/boards",{params})
}

export const getTeacherCount = async(params) => {
    return await instance.get("/teacher/boards/count",{params})
}

export const getSingleTeacherBoardReqeust = async(teacherBoardId) => {
    return await instance.get(`/teacher/board/${teacherBoardId}`)
}

export const deleteTeacherBoardRequest = async(teacherBoardId) => {
    return await instance.delete(`/teacher/board/${teacherBoardId}`)
}

export const updateTeacherBoardRequest = async({teacherBoardId, data}) => {
    return await instance.put(`/teacher/board/${teacherBoardId}`,data)
}