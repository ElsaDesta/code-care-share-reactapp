import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";
import { Component } from "react";
import CommentList from "./components/CommentList";
import Login from "./components/Login";

// we wrap the whole thing with provider to access the store (state?-to share the state throughout our components?) and give itproperty store
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />

          <Container>
            <span>Hello wilders!</span>
            <p className="instructions">
              {" "}
              As we code from home, some of us could find it challenging to keep
              ourselves motivated. What have you learned from your experiences
              in the past four weeks? What insights can you share that could
              help others? Please share it below. You can add your name if you
              want.{" "}
            </p>
            <Login />
            <ItemModal />
            <CommentList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
