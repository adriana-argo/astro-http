<<<<<<< HEAD
import type { APIRoute } from 'astro';
=======

import type {APIRoute}  from 'astro';
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
import { getCollection, getEntry } from 'astro:content';

export const prerender = false;

<<<<<<< HEAD
export const GET: APIRoute = async ({ params, request }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');

  if (slug) {
    const post = await getEntry('blog', slug);

    if (post) {
      return new Response(JSON.stringify(post), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify({ msg: `Post ${slug} not found` }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const posts = await getCollection('blog');

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
=======
export const GET: APIRoute = async ({ params, request})=>{
    const url = new URL(request.url);
    const slug =  url.searchParams.get('slug');
    
    //?ask if there QP
    // const post = posts.filter(postSlug => postSlug.id === slug); 
    // return new Response( JSON.stringify(post), {status: 200,
    //     headers: {
        //         'Content-Type': 'application/json',
        //     }});    
        if (slug) {       
            const post = await getEntry('blog', slug);
            
             if (post) {
                return new Response(JSON.stringify(post), {
                status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });   
            }
            return new Response(JSON.stringify({ msg: `Post ${slug} not found` }), {
                status: 404,
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            }




            const posts = await getCollection('blog');


    // console.log(slug);
    
    return new Response( JSON.stringify(posts), {status: 200,
        headers: {
            'Content-Type': 'application/json',
        }});
}
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
