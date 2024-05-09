import instance from "../utils/instance"

export const deleteUser = async(userId) => {
    return await instance.delete(`auth/user/${userId}`)
} 

export const declareUser = async(data) => {
    return await instance.post(`account/declare/user`, data)
}