import { PostProvider } from "./context/PostContext";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <PostProvider>
        <Header />
        <Main />
      </PostProvider>
    </>
  );
};

export default App;