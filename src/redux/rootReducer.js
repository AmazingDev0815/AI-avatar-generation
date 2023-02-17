// ** Reducers Imports
import product from './product/product';
import auth from './user/user'

const rootReducer = {
  auth: auth,
  product: product
}

export default rootReducer;