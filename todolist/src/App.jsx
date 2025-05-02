import React, { useState } from 'react'

function App() {

  let [userTxt, setUsertxt] = useState('')
  let [allTodo, setAlltodo] = useState([])

  let saveTodo = () => {

    let obj = {
      txt: userTxt,
      isStatus: true
    }
    //Copy    //New Obj Push
    setAlltodo([...allTodo, obj])
    setUsertxt('')


  }

  let deleteToDo=(currentIndex)=>{
 
    if(confirm("Are you Sure want to Delete ?")){
      //method1
      // let oldData=[...allTodo]
      // oldData.splice(currentIndex,1)
      // setAlltodo(oldData)

      //method2

      let filterData=allTodo.filter((items,index)=>index!=currentIndex)
      setAlltodo(filterData)

      
    }
 
  }

  // let l=[10,20,30,40]

  // l.filter((v,i)=>i!=1)

  //   let user=[ {txt:"HTML CODE",isStatus:true}, {txt:"CSS CODE",isStatus:true} ]

  //  let obj={
  //   txt:"JS CODE",
  //   isStatus:true
  //  }

  //   let oldata=[...user,obj]
























  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todo List</h1>

        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={userTxt}
              onChange={(event) => setUsertxt(event.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />


            <button
              onClick={saveTodo}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {/* Sample Todo Items */}


          {
            allTodo.length >= 1 ?
              allTodo.map((items, index) => {
                return (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                    {index+1}
                      <span className="text-gray-800">
                        {items.txt}
                      </span>
                    </div>
                    <button onClick={()=>deleteToDo(index)} className="text-red-500 hover:text-red-700">
                      Delete
                    </button>
                  </div>
                )
              })

              :
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-gray-800">No Data Found</span>
                </div>
              </div>


          }





        </div>
      </div>
    </div>
  )
}

export default App
