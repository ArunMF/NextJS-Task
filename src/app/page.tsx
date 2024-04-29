import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div style={{ padding: '20px' }}>
        <h1>First-Task</h1>
        <div style={{display:"flex", justifyContent:"center"}}>
          <Link href={{ pathname: '/allDetails' }}>
          <button style={{ backgroundColor: "green", border:"none",padding:"10px",width:"100px",borderRadius:"10px" }}><b></b>Get started</button>
          </Link>
          </div>
      </div>
    </main>
  );
}
