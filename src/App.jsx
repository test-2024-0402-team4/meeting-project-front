import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import SideProfile from "./components/SideProfile/SideProfile";
import Homepage from "./pages/Homepage/Homepage";
import MeetingRoute from "./routes/MeetingRoute";


function App() {

  return (
    <>
      <RootContainer>
        <RootHeader />
        <RootLayout>
          <MeetingRoute />
          <SideProfile />
        </RootLayout>
      </RootContainer>
    </>

  )
}

export default App;
