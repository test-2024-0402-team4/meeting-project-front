import instance from "../utils/instance"

export const disableAccount = async(userId) => {
    return await instance.put(`admin/users/${userId}/disable`)
} 