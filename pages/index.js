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
                pathname: "/[jobId]",
                query: { jobId: post.id }
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
  const res = await axios.get("https://web3.career/api/v1?token=aGZHTzmfhRKbU9eh5WdYs1f9i3SKQKtc");
  // console.log(res.data[2])
  return {
    props: { data: res.data[2].slice(0, 10) },
  }
}

