import instance from "../utils/instance"

export const getRegion = async () => {
    return await instance.get("/auth/option/regions");
}

export const getStudentType = async () => {
    return await instance.get("/auth/option/studentTypes");
}

export const getUniversity = async () => {
    return await instance.get("/auth/option/universities");
}

export const getGraduateState = async () => {
    return await instance.get("/auth/option/graduateStates");
}