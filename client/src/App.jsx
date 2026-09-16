import { AuthProvider } from './context/AuthContext.jsx'
import StarterWorkspace from './starter/StarterWorkspace.jsx'

// TASK 7 STARTER
// AuthContext and API modules are completed dependencies. Replace StarterWorkspace with the designed page/component structure.
export default function App() {
  return <AuthProvider><StarterWorkspace /></AuthProvider>
}
