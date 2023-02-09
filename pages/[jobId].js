import axios from "axios";
import { useRouter } from "next/router";


// router is required for fallback: true
const Post = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }


    return (
        // {[2][0].map(inner) => (
        //     {inner[2]?[0].map(post) => (

        //     )}
        // )}
        // <div>
        //     <h1>Job Description</h1>
        //     <h2>{post.title}</h2>
        //     <p>{post.description}</p>
        // </div>
        <div>
            {
                Object.keys([2][0]).map(post => (
                    <div>
                        {post[2][0].map(jobs => (
                            <>
                                <p>{jobs.title}</p>
                                <div>
                                    {jobs.description}
                                </div>
                            </>
                        ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Post;


export const getServerSideProps = async ({ params }) => {
    const { data } = await axios.get(`https://web3.career/api/v1?token=aGZHTzmfhRKbU9eh5WdYs1f9i3SKQKtc/${params.id}`);
    const posts =  data
    // console.log(posts)

    if (!data) {
        return {
            notFound: true,
        };
    }

    const post = posts;
    return {
        props: {
            post
        }
    };
};


// export const getStaticProps = async ({ params }) => {

//     const { data } = await axios.get(`https://web3.career/api/v1?token=aGZHTzmfhRKbU9eh5WdYs1f9i3SKQKtc/${params.id}`)
//     const post = data
//     return {
//         props: {
//             post
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const { data } = await axios.get("https://web3.career/api/v1?token=aGZHTzmfhRKbU9eh5WdYs1f9i3SKQKtc")
//     const posts = data[2].slice(0, 10)
//     const paths = posts.map((post) => ({ params: { jobId: post.id.toString()} }))
//     // console.log(data[2])
//     console.log(paths)
//     return {
//         paths,
//         fallback: true
//     }
// }



// export async function getStaticProps(context) {
//     const {params} = context
//     const response = await fetch(`https://web3.career/api/v1?token=aGZHTzmfhRKbU9eh5WdYs1f9i3SKQKtc/${params.id}`)
//     const data = await response.json()
//     console.log(data)

//     if (!data.id) {
//         return {
//             notFound: true
//         }
//     }

//     return {
//         props: {
//             post: data,
//         },
//         revalidate: 10
//     }
// }



