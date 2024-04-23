import MeetingLayout from "./components/MeetingLayout/MeetingLayout";
import RootContainer from "./components/RootContainer/RootContainer";
import RootFooter from "./components/RootFooter/RootFooter";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";
import SideProfile from "./components/SideProfile/SideProfile";
import Homepage from "./pages/Homepage/Homepage";
import AuthRoute from "./routes/AuthRoute";
import MeetingRoute from "./routes/MeetingRoute";


function App() {

  return (
    <>
    <RootLayout>
      <RootHeader />
        <RootContainer >
         <AuthRoute />
          <MeetingRoute />
        </RootContainer>
      <RootFooter />
    </RootLayout>

    </>
  )
}

export default App;
