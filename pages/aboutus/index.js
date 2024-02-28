import Link from "next/link";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
function AboutUs() {
  return (
    <>
      <h2>hell i am about us page</h2>
      <h3>These are the developers</h3>

      <ul>
        {details.map((each) => (
          <li>
            <Link href={`/aboutus/${each.id}`}> {each.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AboutUs;
