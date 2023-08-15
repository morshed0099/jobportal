import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { useEffect } from "react";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, [])
  return (
    <div className="mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
