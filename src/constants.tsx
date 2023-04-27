import Callback from './routes/callback'
import Compose from './routes/compose'
import RuducerCustom from './routes/reducer_custom'
import Ruducer from './routes/reducer'
import UpdateChild from './routes/update_child'
import ListKey from './routes/list_key'
import TicTacToe from './routes/tic_tac_toe'
export const routes = [
      {
        path: "callback",
        element: <Callback />
      },
      {
        path: "compose",
        element: <Compose />
      },
      {
        path: "reducer_custom",
        element: <RuducerCustom />
      },
      {
        path: "reducer",
        element: <Ruducer />
      },
      {
        path: "update_child",
        element: <UpdateChild />
      },
      {
        path: "list_key",
        element: <ListKey />
      },
      {
        path: "tic_tac_toe",
        element: <TicTacToe />
      }
    ]
