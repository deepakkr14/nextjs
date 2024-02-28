//  dynamic rutes
import { useRouter } from "next/router";
function Developer() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const router = useRouter();
  const id = router.query.id;
  const detail = details.find((x) => x.id == id);
  return (
    <div>
      {detail ? (
        <div>
          <h1>{detail.name}</h1>
          <p>{detail.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
}

export default Developer;
