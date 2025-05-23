import type {APIRoute}  from 'astro';
import { db, eq, Posts } from 'astro:db';

export const prerender = false;

export const GET: APIRoute = async ({ params, request})=>{

    //Este params viene por el url
    const postId = params.id ?? '';

    const posts = await db.select().from(Posts).where(eq(Posts.id, postId));
       if(posts.length === 0){

        const postNF = {
            id: postId,
            title: `Post not found`,
            likes: 0
        }

        return  new Response(JSON.stringify(postNF),{
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
       } 
//?Pero sí existe
     return  new Response(JSON.stringify(posts.at(0)),{
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
}

//Para hacer el incremento del likes
export const PUT: APIRoute = async ({ params, request})=>{
    //?Este params viene por el url
    const postId = params.id ?? '';

    const posts = await db.select().from(Posts).where(eq(Posts.id, postId));

    //?quiero obtener la cantidad de likes que hay en BD
    const {likes = 0 } = await request.json();

        
    if(posts.length === 0){
        const newPost = {
            id: postId,
            title: 'Created now',
            likes: 0
        };
// console.log({postId});

        await db.insert(Posts).values(newPost);
        posts.push(newPost);
  };

        const post = posts.at(0)!; 
        post.likes = post.likes + likes;

    await db.update(Posts).set(post).where(eq(Posts.id, postId));

    return new Response('ok!', {status: 200});
};