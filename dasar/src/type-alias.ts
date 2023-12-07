export type Category = {
    id: string;
    name: string;
    // optional properties, gunakan tanda ?
    description?: string
};

export type Product = {
    id: string;
    name: string;
    price: number;
    category: Category;
};

// type alias for union type
export type ID = string | number;

export type Kategori = {
    id: ID;
    nama: string;
};

export type Barang = {
    id: ID;
    nama: string;
    harga: number;
    kategori: Kategori;
};
