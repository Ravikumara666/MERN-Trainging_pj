// Corrected name (capitalize it)
export let Student = () => {
  const s1 = {
    name: "Rahul",
    age: 20,
    marks: 90,
  };

  return (
    <>
      <h1>Hello nimmouna</h1>
      <StudentList studentInfo={s1} />
    </>
  );
};

function StudentList(props) {
  return (
    <>
      <h1>Student Name is {props.studentInfo.name}</h1>
    </>
  );
}
