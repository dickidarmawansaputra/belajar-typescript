export interface Seller {
    id: string,
    name: string,
    address?: string
    // readonly properties
    readonly npwp: string
}