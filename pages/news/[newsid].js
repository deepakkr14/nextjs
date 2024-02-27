//  dynamic rutes
import { useRouter } from "next/router";
const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
function Dynamic() {
  const router = useRouter();
  const newsid = router.query.newsid;
  const validid=details.findIndex(x => x.id == newsid)
 const validation=validid != -1 ? true : false
  return (
    <>
      <h2>hello i am dynamic routes </h2>
     {validation && <h5>
        got the data of {details[newsid]}
        {details[newsid].name} and role of {details[newsid].role}
      </h5>} 
     {!validation && <h5>
       no Developer found
      </h5>} 
    </>
  );
}

export default Dynamic;
