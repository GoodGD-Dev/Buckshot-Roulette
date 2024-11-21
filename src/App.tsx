import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './styles'
import store from './store'
import Entrada from './components/TestInput'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Entrada />
      </Container>
    </Provider>
  )
}

export default App
