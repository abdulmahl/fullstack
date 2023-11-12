const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name} you are {props.age}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div> 
      greeting app created by <a href="https://github.com/abdulmahl" target="_blank">mduChainz</a>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: "Peter", age: 10 },
    { name: "Maya", age: 36 },
  ]
  
  return (
    <>
      <h1>Greetings</h1>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={friends[0].name} age={friends[0].age}/>
      <Footer />
    </>
  )
}

export default App