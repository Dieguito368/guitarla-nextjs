import Post from '@/app/ui/components/post';
import { getPosts } from '@/app/lib/data';

const Posts = async () => {
    const posts = await getPosts();

    return (
        <>
            <h2 className='heading'>Blog</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    posts.map(post => (
                        <Post key={ post.id } post={ post.attributes } />
                    ))
                }
            </div>
        </>
    )
}

export default Posts;