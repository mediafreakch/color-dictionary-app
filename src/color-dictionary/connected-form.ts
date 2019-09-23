import { connect } from 'react-redux'

import { ColorForm } from './form'
import { addColor, updateColor } from './state'

const mapDispatchToProps = {
  addColorTransform: addColor,
  editColor: updateColor,
}

export default connect(
  null,
  mapDispatchToProps
)(ColorForm)
