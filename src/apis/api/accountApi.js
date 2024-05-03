import instance from "../utils/instance"

export const deleteUser = async(userId) => {
    return await instance.delete(`auth/user/${userId}`)
} 