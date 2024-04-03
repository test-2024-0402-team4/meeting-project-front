import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import BoardListPage from "./pages/BoardListPage/BoardListPage";


function App() {

  return (
    <>
      <RootLayout>
        <RootContainer>
          <RootHeader/>
          <BoardListPage/>
        </RootContainer>
      </RootLayout>
    </>

  )
}

export default App;
