import Score from "../Score/Score";

const Student = (props) => {
  return ( 
    <>
      <div>
        <h1>{props.student.name}</h1>
        <p>{props.student.bio}</p>
        <Score scores={props.student.scores}/>
      </div>
    </>
  );
}
export default Student