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

export const getStudentIdRequest = async(userId) => {
    return await instance.get(`/student/board/write/${userId}`)
}

export const getStudentIdByStudentBoardIdRequest = async(studentBoardId) => {
    return await instance.get(`/student/board/single/${studentBoardId}`)
}


export const getTeacherIdRequest = async(userId) => {
    return await instance.get(`/teacher/board/write/${userId}`)
}

export const getTeacherIdByTeacherBoardIdRequest = async(teacherBoardId) => {
    return await instance.get(`/teacher/board/single/${teacherBoardId}`)
}

export const deleteBoardRequest = async(studentBoardId) => {
    return await instance.delete(`/student/board/${studentBoardId}`)
}

export const updateBoardRequest = async({studentBoardId, data}) => {
    return await instance.put(`/student/board/${studentBoardId}`,data)
}

export const updateBoardViewCountRequest = async(studentBoardId) => {
    return await instance.put(`/student/board/view/${studentBoardId}`)
}

export const registerStudentCommentRequest = async(data) => {
    return await instance.post(`/student/board/comment/${data.studentBoardId}`, data)
}

export const getStudentCommentRequest = async(studentBoardId) => {
    return await instance.get(`/student/board/comments/${studentBoardId}`)
}

export const deleteStudentCommentRequest = async(studentCommentId) => {
    return await instance.delete(`/student/board/comment/${studentCommentId}`)
}

export const updateStudentCommentRequest = async(data) => {
    return await instance.put(`/student/board/comment/${data.studentCommentId}`,data)
}


export const searchNoticeBoardListRequest = async(params) => {
    return await instance.get("/notice/boards",{params})
}

export const getNoticeCount = async(params) => {
    return await instance.get("/notice/boards/count",{params})
}

export const getSingleNoticeBoardReqeust = async(noticeId) => {
    return await instance.get(`/notice/board/${noticeId}`)
}

export const updateNoticeBoardViewCountRequest = async(noticeId) => {
    return await instance.put(`/notice/board/view/${noticeId}`)
}



