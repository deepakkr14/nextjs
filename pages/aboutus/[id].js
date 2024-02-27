//  dynamic rutes
import { useRouter } from "next/router";
const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
function Developer() {
  const router = useRouter();
  const id = router.query.id;
  const validid=details.findIndex(x => x.id == id)
 const validation=validid != -1 ? true : false
  return (
    <>
      <h2>hello i am dynamic routes </h2>
     {validation && <h5>
        got the data of {details[id]}
        {details[id].name} and role of {details[id].role}
      </h5>} 
     {!validation && <h5>
       no Developer found
      </h5>} 
    </>
  );
}

export default Developer;


// function Developer(){
//     return <h2>hell i am deepak kumar</h2>

// }

// export default Developer;