import Link from 'next/link'
import { promises as fs } from 'fs';
export default async function Home() {
  const itemId = '123'
  const file = await fs.readFile(process.cwd()+'/src/app/data.json','utf8');
  const data = JSON.parse(file)
  
  return (
    <main>
       <div style={{padding:'20px'}}>
        <h1>First-Task</h1>
        <div>
          <h2 style={{textAlign:"center"}}>All user details</h2>
          <table style={{width:"100%"}}>
            <tr style={{fontSize:"30px",backgroundColor:'beige'}}>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status & Date</th>
            </tr>
            {
              data.data.map((item)=>(
                <tr key={item.id} style={{color:"1px solid black",backgroundColor:'beige'}}>
                <th>{item.id}</th>

                <th><Link href={{
                  pathname:'/viewDetails',
                  query: { 
                    userId : item.id,
                    username : item.name,
                    userDesc : item.description,
                    userStatus : item.status,
                    userDate : item.createdAt
                   }
                }} style={{textDecoration:"none"}}>{item.name}</Link></th>
                
                <th style={{width:"500px",padding:"10px"}}>{item.description}</th>
                <th>
                  {
                    item.status == 'Online'? <p style={{color:"green"}}>{item.status}</p> : <p style={{color:"red"}}>{item.status}</p>
                  }
                  
                  <p>{item.createdAt}</p>
                </th>
              </tr>
              ))
            }
          </table>
        </div>
      </div>
    </main>
  );
}
