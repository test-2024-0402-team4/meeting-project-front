import RootContainer from "./components/RootContainer/RootContainer";
import RootLayout from "./components/RootLayout/RootLayout";
import SideProfile from "./components/SideProfile/SideProfile";
import MeetingRoute from "./routes/MeetingRoute";


function App() {

  return (
    <>
      <RootLayout>
      <SideProfile/>
        <RootContainer>
           <MeetingRoute />
        </RootContainer>
      </RootLayout>
    </>

  )
}

export default App;
