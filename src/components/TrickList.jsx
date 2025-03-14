import TrickItem from "./TrickItem";

export default function TrickList({ trickData, trickId, setTrickId }) {
  return (
    <div 
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "0",
      color: "white",
    }}
    >
      {trickData.map((trick) => (
        <TrickItem 
        key={trick.id} trick={trick} trickId={trickId} setTrickId={setTrickId} />
      ))}
    </div>
  );
}
