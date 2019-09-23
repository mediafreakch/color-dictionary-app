import { connect } from 'react-redux'

import { AppState } from '../../store'
import { ColorDictionaryList } from './list'
import { removeColor, updateColor } from '../state'

const mapStateToProps = (state: AppState) => ({
  colorDictionary: state.colorDictionary,
})

const mapDispatchToProps = {
  removeColor,
  updateColor
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorDictionaryList)
