<template>
    <div v-if="isLoading">Loading...</div>
    
    <button v-else-if="likeCount === 0" @click="likePost" >
        Like this Post
    </button>

    <button v-else @click="likePost" >
        Likes
        <span>{{ likeCount}}</span>
        <h5>{{likeClicks}} <span>Clicks</span></h5>
    </button>
</template>


<!-- ! aqui recibimos desde slug el ID para buscar el post -->
<script lang="ts" setup>
import { ref, watch } from 'vue';
import confetti  from 'canvas-confetti';
import debounce from 'lodash.debounce';

    interface Props {
        postId: string;
    }
    // ?Para poder manejar las Props en VUE
    const props = defineProps<Props>();

    // console.log(props.postId);
    // Necesito 3 variables reactivas 
        //? Cantidad de likes actuales
    const likeCount = ref(0); 
    const likeClicks = ref(0); 
    const isLoading = ref(true); 

// Vue puede estar pendiente cuando las variables reactivas cambian de valor
//Efecto secundario con un Watch

watch(likeCount, debounce(()=>{
        

    // console.log(`new likes, ${likeCount.value}`);
    fetch(`/api/posts/likes/${props.postId}`, {
        method: 'PUT',
        headers: {
             'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes: likeClicks.value})
    });
    likeClicks.value = 0
}, 1000))



    const likePost = async()=>{
        //Hacer click en el boton
         likeCount.value ++
         likeClicks.value ++

         confetti({
            particleCount: 100,
            spread: 70,
            origin:{
                x: Math.random(),
                y: Math.random() - 0.2
            }
         })
        // console.log('Hola Abel desde vuejs');    
    }
    
    
    //Peticion fetch para traer la informacion de la BD 
    const getCurentLikes = async()=>{
        const resp = await fetch(`/api/posts/likes/${props.postId}`);
        if(!resp.ok) 
        // console.error("Error en la respuesta:", resp.status, resp.statusText);
        return; 
    
        const data = await resp.json();
        //  console.log("Es un array?:", Array.isArray(data));
        likeCount.value = data.likes;
        console.log(data);
        isLoading.value = false;
    };

getCurentLikes();
    
</script>

<style scoped>
button {
    background-color: #5e51bc;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
}

button:hover{
    background-color: #4a3f9a;
}

span{
    color: yellow;
    padding: 5px;
}
h5{
    color: whitesmoke;
    margin-top: 5px;
}
</style>

