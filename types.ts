
export interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price: string;
    priceValue: number;
    image: string;
    category: string;
    status: 'Available' | 'Sold Out';
}

export interface MenuCategory {
    title: string;
    items: MenuItem[];
}

export interface CartItem extends MenuItem {
    quantity: number;
}
