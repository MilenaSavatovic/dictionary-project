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
        <footer className="text-center">
          Coded by
          <a
            href="https://github.com/MilenaSavatovic/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Milena Savatovic
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
