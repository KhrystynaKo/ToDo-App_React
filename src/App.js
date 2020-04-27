import React from "react";
import { Provider } from "react-redux";
import "./styles.css";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
import MarcAllTodos from "./MarcAllTodos";
import { createStore } from "redux";
import todoApp from "./reducers/todoApp";
const store = createStore(todoApp);

const App = () => {
  return (
    <Provider store={store}>
      <section className='todoapp'>
        <Header />
        <section className='main'>
          <MarcAllTodos />
          <TodoList />
        </section>
        <Footer />
      </section>
    </Provider>
  );
};
export default App;
