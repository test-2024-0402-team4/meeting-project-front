import instance from "../utils/instance"

export const disableAccount = async(userId) => {
    return await instance.put(`admin/users/${userId}/disable`)
} 
export const getDeclareStudentBoard = async() => {
    return await instance.get(`admin/declare/student/board`)
} 

export const getDeclareTeacherBoard = async() => {
    return await instance.get(`admin/declare/teacher/board`)
} 

export const getDeclareStudyBoard = async() => {
    return await instance.get(`admin/declare/study/board`)
} 

export const getDeclareStudyComment = async() => {
    return await instance.get(`admin/declare/study/comment`)
} 

export const getDeclareStudentComment = async() => {
    return await instance.get(`admin/declare/student/comment`)
} 

export const getDeclareTeacherComment = async() => {
    return await instance.get(`admin/declare/teacher/comment`)
} 

export const getUserStatus = async(userId) => {
    return await instance.get(`admin/api/users/${userId}`)
} 

export const getDeclareUser = async() => {
    return await instance.get(`admin/declare/user`)
} 