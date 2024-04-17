import MeetingLayout from "./components/MeetingLayout/MeetingLayout";
import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import SideProfile from "./components/SideProfile/SideProfile";
import AuthPage from "./pages/AuthPage/AuthPage";
import Homepage from "./pages/Homepage/Homepage";
import MeetingRoute from "./routes/MeetingRoute";


function App() {

  return (
    <>
    <RootLayout>
      <RootContainer>
        <RootHeader />
          <MeetingLayout>
            <MeetingRoute />
            {/* <SideProfile /> */}
          </MeetingLayout>
      </RootContainer>
    </RootLayout>
    </>
  )
}

export default App;
