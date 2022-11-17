import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ImportResume from "./pages/ImportResume";
import ChooseTemplate from "./pages/ChooseTemplate";
import Create from "./pages/Create";
import Export from "./pages/Export";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/choose-template" element={<ChooseTemplate />} />
        <Route path="/import-resume" element={<ImportResume />} />
        <Route path="/create" element={<Create />} />
        <Route path="/export" element={<Export />} />
      </Routes>
    </div>
  );
}

export default App;
