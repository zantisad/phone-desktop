import { Provider } from "react-redux"
import { store } from "../Bloc/app/Store"
import { AddNotes } from "../Bloc/components/AddNotes/AddNotes"
import { ListNotes } from "../Bloc/components/ListNotes/ListNotes"
import { EditNote } from "../Bloc/components/EditNote/EditNote"


export const Bloc = () => {
  return (
    <Provider store={store}>
      <main className="flex flex-col items-center gap-4 h-full bg-zinc-900 p-8 overflow-auto">
        <AddNotes />
        <ListNotes />
        <EditNote />
      </main>
    </Provider>
  )
}