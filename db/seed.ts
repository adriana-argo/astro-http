import { getCollection } from 'astro:content';
import { Clients, db, Posts } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {

	
  await db.insert(Clients).values([
    { id: 1, name: "Abel Gonzalez", age: 58, isActive: true },
    { id: 2, name: "Adriana Sanchez", age: 53, isActive:false },
    { id: 3, name: "Aysbel Gonzalez", age: 40, isActive:true },
    { id: 4, name: "Carlos Gonzalez", age: 26, isActive:false },
    { id: 5, name: "Moises Gonzalez", age: 18, isActive:true },
    { id: 6, name: "Patricia Gonzalez", age: 26, isActive:false },
  ]);

  const posts = await getCollection('blog');

  await db.insert(Posts).values(
    posts.map(p => ({
      id: p.id,
      title: p.data.title,
      likes: Math.round(Math.random() * 100)

    }))
  )
  console.log('Seed executed');
  
	// console.log(Clients);
	
	// TODO
}
