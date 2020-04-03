// import React, {useState } from 'react';
// import Counter from './Counter'
// import CounterHooks from './CounterHooks'
// export const ThemeContext = React.createContext()

// function App() {
//   const [theme, setTheme] = useState('purple')
//   return  (
//     <ThemeContext.Provider value ={{ backgroundColor: theme }}>
//     Counter
//     <Counter initialCount={3}/>
//     Counter Hooks
//     <CounterHooks initialCount={2}/>

//     <button onClick={() => setTheme(prevTheme => {
//       return prevTheme === 'purple' ? 'blue' : 'purple'
//     })}>Toggle Theme</button>

//     </ThemeContext.Provider>
//   )
// }
// export default App;