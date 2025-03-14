import styles from "./TrickItem.module.css"

export default function TrickItem({ trick, trickId, setTrickId }) {
  return (
    <div >
      <button 
        key = {trick.id}
        className={`${styles.buttonContainer} ${trick.id === trickId ? styles.active : ""}`}
        onClick={() => {
          // console.log(trick.name);
          setTrickId(trick.id);

          console.log(trick.id)
          console.log(trickId)
        }}

        // style={{
        //   backgroundColor: trick.id === trickId ? "red" : "",
        //   border: trick.id === trickId ? "1px solid red" : "",
        //   color: trick.id === trickId ? "white" : "",
        // }}
      >
        {trick.name}
      </button>
    </div>
  );
}
