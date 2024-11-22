import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import AmmoInput from './components/AmmoInput'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <AmmoInput />
      </Container>
    </Provider>
  )
}

export default App
