import { SET_COMPANIES } from "./types"

export const setCompanies = (companiesInformations) => {
    return {
        type: SET_COMPANIES,
        payload:companiesInformations
    }
}
