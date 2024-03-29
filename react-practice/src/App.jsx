import Student from "./Student"

function App() {

  return(
    <>
      <Student name= "sanchez" age={28}  isStudent={true}/>
      <Student name= "mike" age={27}  isStudent={false}/>
      <Student name= "sam" age={26}  isStudent={false}/>
      <Student name= "risper" age={25}  isStudent={true}/>
    </>
  )
}

export default App
