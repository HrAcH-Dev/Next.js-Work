import Link from 'next/link';


export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  return {
    props: { burgers: data }
  }
}

const Contacts = ({ burgers}) => {
  console.log(burgers)
  return (
    <div>
      <h1>Burgers</h1>
      {burgers.map(burger => (
        <Link href={`/contacts/${burger.id}`} key={burger.id}>
          <a>             
            <div>
              <h3>{ burger.name }</h3>
              <p>{ burger.desc }</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Contacts;