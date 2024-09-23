export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}


//Sintaxis para interfaces

/* export interface CartItem extends Guitar {
    quantity: number
}
 */

//Utility types

/* export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
    quantity: number
} 
 */