import {Link} from 'next/link'
const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
function AboutUs(){
    return<> <h2>hell i am about us  page</h2>
    <h3>These are the developers</h3>
    <Link href="/aboutus/1">Yash </Link>
    <Link href="/aboutus/2">Vaibhav </Link>
    <Link href="/aboutus/3">Suresh </Link>
    </>
}

export default AboutUs;