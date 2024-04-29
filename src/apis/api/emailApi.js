import instance from "../utils/instance"

export const sendEmailTeacherProfile = async(data) => {
    return await instance.post("/mail/send", data);
}
