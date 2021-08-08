
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import {  AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom';

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch> {/*Swith não permite que eu chame duas rotas ao mesmo tempo*/}
      <Route path="/" exact component={Home}/>
      <Route path="/rooms/new" component={NewRoom}/>
      <Route path="/rooms/:id" component={Room}/>

      <Route path="/admin/rooms/:id" component={AdminRoom}/>
      </Switch>  
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
//exportar sem o default permite exportar mais de uma coisa de um mesmo arquivo