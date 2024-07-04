# React Browser Router 

Official docs [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)

## Install
React Browser router current build version 6.2.2. requires at least React v16.8

`npm install react-router-dom@6`

## Import Setup
* BrowserRouter as Router
* Routes
* Route
* Link

## Hooks
* useParams // `:slug` syntax to get data from the query string

## Setup
Wrap the content of the parent component in `Router`
    
    <div>
        <Router>
            <Routes> // declare what endpoint points to which component
                <Route path="/" element={<Import Components />}>
                <Route path="/home" element={<Import Components />}>
            </Routes>
        </Router>
    </div>


## Nav Bar (Links)
Create a Nav & list structure.

    <nav>
        <ul>
            <li>
                <Link to='/' > Home </Link> // link replaces the anchor tag
            </li>    
            <li>
                <Link to='/about'> About </Link>
            </li>    
        </ul>
    </nav>

## Nested Routes
If you wanted to have multiple navs or keep links static at the top

    <div>
        <Router> 
            <Routes>
                <Route path="/" element={Layout}> // component with links inside
                    <Route path="/home" element={}></Route> // nested route
                    <Route path="/about" element={}></Route> // nested Routes
                </Route>
            </Routes>
        </Routes>
    </div>