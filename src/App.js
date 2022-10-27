import "./App.css";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import AccordionDesktopContainer from "./components/AccordionDesktopContainer";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            height: "100vh",
          }}
        >
          <AccordionDesktopContainer />
        </Box>
      </Container>
    </div>
  );
}

export default App;
