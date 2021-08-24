
import { BrowserRouter, Redirect, Route, Switch, useParams} from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';
import light from './themes/light'
import dark from './themes/dark'

import {  AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',light)

  function toggleTheme(){
    setTheme(theme.title == 'light' ? dark : light)
  }

  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <AuthContextProvider>
      <Switch> {/*Swith não permite que eu chame duas rotas ao mesmo tempo*/}
      <Route path="/" exact render={() => <Home toggleTheme={toggleTheme}/>}/>
      <Route path="/rooms/new" render={() => <NewRoom toggleTheme={toggleTheme}/>}/>
      <Route path="/rooms/:id" render={() => <Room toggleTheme={toggleTheme}/>}/>
      <Route path="/admin/rooms/:id" render={() => <AdminRoom toggleTheme={toggleTheme}/>}/>
      </Switch>  
      </AuthContextProvider>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
//exportar sem o default permite exportar mais de uma coisa de um mesmo arquivo