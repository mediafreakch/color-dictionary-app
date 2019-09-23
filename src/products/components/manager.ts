import { connect } from 'react-redux'

import { AppState } from '../../store'
import { ProductList } from './list'

const mapStateToProps = (state: AppState) => ({
  products: state.products,
  colorDictionary: state.colorDictionary,
})

export default connect(mapStateToProps)(ProductList)
