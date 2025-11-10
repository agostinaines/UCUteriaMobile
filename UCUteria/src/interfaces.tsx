interface Product {
    id: string,
    name: string,
    price: number,
    category: string,
    image: string,
    description: string,
    displayName: string, 
    isVisible: boolean
}

interface MenuItemsProps {
    item: Product
}

interface SearchFilterBarProps {
    handleSearch: (search: string) => void
}

export {Product, MenuItemsProps, SearchFilterBarProps}