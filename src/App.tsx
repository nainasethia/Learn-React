import { useState } from "react";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

export const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {/* Show the alert when the button is clicked */}
      <Button onClick={() => setAlertVisible(true)}>Button with Alert</Button>

      {/* Conditionally render the alert */}
      {alertVisible && (
        <Alert type="warning" onClose={() => setAlertVisible(false)}>
          This is a dismissable alert.
        </Alert>
      )}
    </>
  );
};

export default App;
