import Button from "./common/Button"
import { Footer } from "./common/Footer"
import { Header } from "./common/Header"
import { category } from "./Data/CategoryData" //[ 10 element ]

function Home() {

    let status=true
    let p=1
    
    
    let l=["ram","ravi","raj","pradeep"]

    let myAlluser=l.map((value,index)=><li key={index}>{index+1} {value}</li>)

    let obj={
        uname:"pradeep",
        email:"ws@gmail.com",
        phone:8888888,
    }

   let email="pradeep.wscubetech@gmail.com" 


    return (
        <div>
            <Header email={email} phone="88888888" address={"Jodhpur"} />
        <ol>
           <h3> {obj.uname}</h3>
            {obj.email}
            {obj.phone}
            {myAlluser}

            { l.map((value,index)=> <div key={index}> {index+1} {value} </div> ) }


            {
                l.map((value,index)=>{
                    return(
                        <li key={index}> {index+1} {value} </li>
                    )
                })
            
            }    

      </ol>      
            {
             status ?
             
                p==1 ?   <p className="text-center">Welcome to ws</p> : ''

            

             :
             <p>No Data Found</p>


             }
            

             { (status && p==1) &&   <p className="text-center">Welcome to ws</p> }


            <section className="bg-gray-200 py-[50px]">
                <h2 className="text-center font-bold text-[30px]">Our Category</h2>
                <div className="max-w-[1320px] mx-auto grid lg:grid-cols-3  sm:grid-cols-2  grid-cols-1 mt-[40px] gap-[20px] ">
                   {
                   
                   category.map((items,index)=>{
                     return(
                        <CategoryItems  data={items} key={index} />
                     )
                   })
                   
                   
                   }
                   
                   
                </div>

            </section>
            <Footer info={obj} /> 
            <Footer info={obj} > <p>Welcome to WS</p>  </Footer>
        </div>
    )
}

export { Home }


function CategoryItems({data}) {
    // console.log(data)
    // let {path,title}=data
    //data = 
    return (
        <div className="relative overflow-hidden group">
            <img className="group-hover:scale-[1.2] duration-500" src={data.path} />
            <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.5)] flex flex-col justify-center  items-center text-white text-[25px] font-bold">
               {data.title}
                <Button value={"Read More"}/>
            </div>
            
        </div>
    )
}