import { Provider } from 'react-redux'
import './App.css'
import Cart from './layouts/Cart'
import Items from './layouts/Items'
import { store } from './app/store'

function App() {

  return (
    <Provider store={store}>
      <div className='grid grid-cols-3 gap-5 m-16'>
        <div className='col-span-2'>
          <Items />
        </div>
        <Cart />
      </div>
    </Provider>

  )
}

export default App
