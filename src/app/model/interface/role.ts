export interface IRole {
    roleId: number
    role: string
}

export interface IDesignation {
    designationId: number
    designation: string
}

export interface apiResponseModel {
    message: string
    result: boolean
    data: any
}