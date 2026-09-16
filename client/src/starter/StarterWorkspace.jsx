import { useEffect, useState } from 'react'
import { Alert, Button, Card, Form, Spinner } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext.jsx'
import { quizApi } from '../api/quizApi.js'
import { progressApi } from '../api/progressApi.js'

// TASK 7 STARTER
// This intentionally plain interface proves that the completed AuthContext and API modules work.
// Build the final pages under pages/ and reusable UI under components/ without moving HTTP calls out of api/.
export default function StarterWorkspace() {
  const { user, loading, login, register, logout } = useAuth()
  const [screen, setScreen] = useState('home')

  if (loading) return <main className="starter-shell"><Spinner animation="border" /> Loading session...</main>
  if (!user) return <StarterAuth login={login} register={register} />

  return <div className="starter-layout">
    <header>
      <strong>Become a Wizzard - UI starter</strong>
      <nav>
        <Button size="sm" variant="outline-secondary" onClick={() => setScreen('home')}>Home</Button>
        <Button size="sm" variant="outline-secondary" onClick={() => setScreen('quizzes')}>Quizzes</Button>
        <Button size="sm" variant="outline-secondary" onClick={() => setScreen('progress')}>Progress</Button>
        <Button size="sm" variant="outline-danger" onClick={logout}>Log out</Button>
      </nav>
    </header>
    <main>
      {screen === 'home' && <StarterHome user={user} />}
      {screen === 'quizzes' && <StarterQuizzes />}
      {screen === 'progress' && <StarterProgress />}
    </main>
  </div>
}

function StarterAuth({ login, register }) {
  const [mode, setMode] = useState('login')
  const [error, setError] = useState('')
  const submit = async event => {
    event.preventDefault()
    setError('')
    const values = Object.fromEntries(new FormData(event.currentTarget))
    try { mode === 'login' ? await login(values) : await register(values) }
    catch (exception) { setError(exception.message) }
  }

  return <main className="starter-shell">
    <h1>Become a Wizzard</h1>
    <p>Task 7: redesign this functional starter screen.</p>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={submit}>
      {mode === 'register' && <Form.Group><Form.Label>Name</Form.Label><Form.Control name="displayName" required /></Form.Group>}
      <Form.Group><Form.Label>E-mail</Form.Label><Form.Control name="email" type="email" required defaultValue="demo@wizard.local" /></Form.Group>
      <Form.Group><Form.Label>Password</Form.Label><Form.Control name="password" type="password" required defaultValue="Wizard123!" /></Form.Group>
      <Button className="mt-3" type="submit">{mode === 'login' ? 'Log in' : 'Register'}</Button>
      <Button className="mt-3 ms-2" type="button" variant="link" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>Switch mode</Button>
    </Form>
  </main>
}

function StarterHome({ user }) {
  return <><h1>Welcome, {user.displayName}</h1><p>This is a deliberately neutral layout. Use the roadmap to design the complete experience.</p><ul><li>Quiz discovery and CRUD</li><li>Wizard battle with optional boss</li><li>Progress, history and leaderboard</li></ul></>
}

function StarterQuizzes() {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { quizApi.list().then(setItems).catch(exception => setError(exception.message)) }, [])
  return <><h1>Published quizzes</h1>{error && <Alert variant="danger">{error}</Alert>}<div className="starter-grid">{items.map(item => <Card key={item.id}><Card.Body><Card.Title>{item.title}</Card.Title><Card.Text>{item.description}</Card.Text><small>{item.questionCount} questions {item.bossFightEnabled ? '- optional boss enabled' : ''}</small><Button className="d-block mt-3" disabled>TODO: design play flow</Button></Card.Body></Card>)}</div>{!error && !items.length && <p>No quizzes found.</p>}</>
}

function StarterProgress() {
  const [value, setValue] = useState(null)
  const [error, setError] = useState('')
  useEffect(() => { progressApi.get().then(setValue).catch(exception => setError(exception.message)) }, [])
  if (error) return <Alert variant="danger">{error}</Alert>
  if (!value) return <Spinner animation="border" />
  return <><h1>Progress</h1><pre>{JSON.stringify(value, null, 2)}</pre><p>TODO: turn this raw data into an understandable visual hierarchy.</p></>
}
