import { column, defineDb, defineTable } from 'astro:db';

const Clients = defineTable({
  columns: {
   id: column.number({primaryKey: true}),
   name: column.text(),
   age: column.number(),
   isActive: column.boolean(),
  }
})

<<<<<<< HEAD
//?Control de los likes

const Posts = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    title: column.text(),
    likes: column.number(),
  }
})
=======
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61

// https://astro.build/db/config
export default defineDb({
  tables: {
<<<<<<< HEAD
    Clients,
    Posts
=======
    Clients
>>>>>>> ba94768611a2cf2a7f4a3c16d72c726a9b51bf61
  }
});
