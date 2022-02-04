import './App.css'
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultWord="wine" />
        </main>
        <footer className="text-center">Coded by Milena Savatovic</footer>
      </div>
    </div>
  )
}

export default App
