import { useState, useEffect } from "react"

import Form from "./components/Form";

function App() {
  const [data, setData] = useState({
    nama: "",
    email: "",
    noHP: "",
    latar: "",
    kelas: "",
    harapan: ""
  })
  
  return (
    <div>
      <Form setData={setData}/>
    </div>
  );
}

export default App;
