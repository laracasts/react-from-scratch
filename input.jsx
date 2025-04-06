function H1({ children }) {
  return <h1>{children}</h1>
}

function Greeting() {
  return <h2>Hello there!</h2>
}

export function App() {
  return (
    <>
      <Greeting />
      <H1>Hi!</H1>
      <ul className="my-cool-list">
        <li>hello</li>
        <li>world</li>
      </ul>
    </>
  )
}
