import React from 'react'

import { Product } from '../index'

type Props = { products: Product[]; colorDictionary: any }

export const ProductList = ({ products, colorDictionary }: Props) => (
  <table>
    <tbody>
      {products.map(({ name, color, price }, i) => {
        const isColorInDictionary = colorDictionary[color]

        return (
          <tr key={i}>
            <td>{name}</td>
            <td>
              {isColorInDictionary ? (
                <>
                  <del>{color}</del> {colorDictionary[color]}
                </>
              ) : (
                color
              )}
            </td>
            <td>CHF {price}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
)
