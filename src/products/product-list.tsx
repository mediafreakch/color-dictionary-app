import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { Product } from './index'
import './product-list.scss'

type Props = { products: Product[]; colorDictionary: any }

export const ProductList = ({ products, colorDictionary }: Props) => (
  <Card className="product-list">
    <CardContent>
      <Typography variant="h6" align="left">
        Products
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Phone Model</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({ name, color, price }, i) => {
            const isColorInDictionary = colorDictionary[color]

            return (
              <TableRow key={i}>
                <TableCell>{name}</TableCell>
                <TableCell>
                  {isColorInDictionary ? (
                    <>
                      <del>{color}</del> {colorDictionary[color]}
                    </>
                  ) : (
                    color
                  )}
                </TableCell>
                <TableCell>CHF {price}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
)
