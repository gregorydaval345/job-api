import axios from "axios";
import Link from "next/link";


const Index = (props) => {
  const posts = props.data;

  return (
    <div>
      <h1>
        Home
      </h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={{
                pathname: "/[id]",
                query: { id: post.id }
              }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Index;

export const getStaticProps = async () => {
  const res = await (await axios.get("https://web3.career/api/v1?token=aGZHTzmfhRKbU9eh5WdYs1f9i3SKQKtc", {
    headers: {
      Accept: 'application/json'
    }
  }));
  console.log(res.data)
  return {
    props: { data: res.data.slice(0, 10) },
  }
}

