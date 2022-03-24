import { useState } from "react"

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

  console.log(data)
  
  return (
    <div>
      <Form data={data} setData={setData}/>
    </div>
  );
}

export default App;
