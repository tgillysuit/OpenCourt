import './App.css'

function App() {

  function addEvent({eventId}) {
    console.log(eventId)
  }

  return (
    <>
      <h1>Open Court</h1>
      <h2>Add an Event</h2>
      <form action={addEvent}>
        <input type="text" name="eventId" value="Add Event Here" />
        <button type="submit">Add Event</button>
      </form>
    </>
  )
}

export default App
