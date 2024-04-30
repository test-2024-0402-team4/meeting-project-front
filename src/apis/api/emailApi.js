import instance from "../utils/instance"

export const sendEmailTeacherProfile = async(data) => {
    return await instance.post("/mail/send/profile", data);
}

export const sendApplyEmail = async(data) => {
    return await instance.post("/mail/send/lesson", data);
}
