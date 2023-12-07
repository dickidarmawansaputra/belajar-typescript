export enum RoleUser {
    ADMIN = "ADMIN",
    OPERATOR = "OPERATOR",
    AUTHOR = "AUTHOR"
}

export type User = {
    id: string,
    username: string,
    role: RoleUser
}