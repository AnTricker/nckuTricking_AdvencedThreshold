import { useEffect, useState } from "react";

export default function TrickDetail({ trickData, trickId }) {
  const [trick, setTrick] = useState({});

  useEffect(() => {
    console.log(trickId);
    const foundTrick = trickData.find((trick) => trick.id === trickId);
    setTrick(foundTrick);
  }, [trickId]);

  return <div 
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      color: "white",
    }}
    >
      <div>
        <h1 style={{ color:"red", textAlign: "center" }}> {trick.name} </h1>
      </div>
      <div>
        <video
          style={{
            margin: "5px",
            width: "100%",
            height: "auto",
          }}
          src= {`${import.meta.env.BASE_URL}assets/${trick.id}.mp4`}
          autoPlay
          loop
          muted
          playsInline
          alt="not found"
        />
      </div>

      <div style={{margin:"10px", padding:"10px", color:"white", backgroundColor:"red", borderRadius:"10px"}}>
        <strong> {trick.type} </strong>
      </div>

      <div style={{padding:"10px", color:"white"}}>
      <p> {trick.introduction} </p>
      </div>
  </div>
}
