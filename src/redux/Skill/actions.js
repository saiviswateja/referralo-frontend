import { SET_SKILLS } from "./types"

export const setSkills = (skillsInformation) => {
    return {
        type: SET_SKILLS,
        payload:skillsInformation
    }
}
