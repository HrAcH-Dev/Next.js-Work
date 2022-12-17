import Link from 'next/link'

export default function Contacts({ data }) {
  console.log(data);
  return (
    <div>
      <h1 style={{marginTop: '15px'}}>Contacts</h1>
      <ul>
        {data &&
          data.map(elem => {
            return (
              <li style={{marginBottom: '15px'}} key={elem.id}>
                <Link href={`/contacts/${elem.id}`}>
                  {elem.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const a = await fetch('https://jsonplaceholder.typicode.com/users')
  const b = await a.json()

  if(!b) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: b }
  }
}
