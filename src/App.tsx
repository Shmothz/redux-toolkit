import { useSelector, useDispatch } from 'react-redux'
import { IStore } from './store'
import { ChangeEvent, useState } from 'react'
import { addData } from './store/slices/oneSlice'

function App() {
 const dispatch = useDispatch()

 const { data } = useSelector((state: IStore) => state.one)
 const [value, setValue] = useState<string>('')

 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value)
 }
 const handleClick = () => {
  dispatch(addData(value))
  setValue('')
 }

 return (
  <div>
   {data.map((item) => (
    <div key={item}>{item}</div>
   ))}
   <input value={value} onChange={handleChange} />
   <button onClick={handleClick}>Кнопка</button>
  </div>
 )
}

export default App
