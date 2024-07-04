# React Router

1. Install

`npm install react-router-dom@6`

2. Import to the main app file all the `react-router` objects

`import {BrowserRoute, Routes, Route, Link} from 'react-router-dom'


```
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}> <--- Nested Routes 
            <Route path="/home" element={<Home />} />
            <Route path="/procedures" element={<Procedures />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <div> The divide between</div>
      </Router>
    </div>
  );
}

```

Layout Component
```
export default function Layout() {
  return (
    <div>
      <S.Nav>
        <Link to="/">Go to Home Page</Link>{" "}
        <Link to="/procedures">See Our Procedures</Link>{" "}
        <Link to="/contact">Contact Us!</Link>
      </S.Nav>
      <S.Section>
        <S.Div>2fr</S.Div>
        <S.Div>3fr</S.Div>
      </S.Section>
      <hr />
      <Outlet />
    </div>
  );
}
```