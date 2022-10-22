/**
 * The type of the grocery item
 */
export type Grocery = {
    /**
     * The name of the item
     * @type `string`
     */
    item: string,
    /**
     * The count of this item
     * @type `number`
     */
    quantity: number
}

/**
 * The type of the list of grocery items
 * @type `Grocery[]`
 */
export type GroceryList = Grocery[];