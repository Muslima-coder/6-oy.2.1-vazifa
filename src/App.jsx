import { useRef, useState } from "react"

const App = () => {
  const [users, setUsers] = useState([
    {id:1, name:"Mark", age:16},
    {id:2, name:"Stive", age:10},
    {id:3, name:"Bob", age:19},
    {id:4, name:"Alex", age:21},
    {id:5, name:"Anna", age:20}
  ])

  const street = [
     {id:1,name:"UK", userId:5},
    {id:2,name:"USA", userId:4},
    {id:3,name:"Ukrain", userId:3},
    {id:4,name:"Russian", userId:2},
    {id:5,name:"Korea", userId:1}
  ]

  const [userId, setUserId] = useState(0)

  return (
    <div className="flex flex-col justify-center">
      <ul className="pt-20 pb-5 mx-auto ">
        {users.map(item => (
          <li className="text-[18px] font-medium text-white " onClick={() => setUserId(item.id)}  key={item.id}>name: {item.name}   id: {item.id}   age: {item.age} </li>
        ))}
      </ul>
        <ul className="py-5 mx-auto text-center">
          {street.filter(item => item.userId == userId).map(item => <p className=" text-red-800 text-[18px] font-normal " key={item.id}>Country: {item.name}</p>)}
        </ul>

    </div>
  )
}

export default App
