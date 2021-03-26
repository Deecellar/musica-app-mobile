<script>
	import { navigate } from 'svelte-routing';
import { onMount } from "svelte";
import { fade } from 'svelte/transition';
import { pathT } from './reactiveLocation';

let initialized = false;

onMount(() => initialized = true);

function auth()
{
    localStorage.setItem("auth","logged");
    pathT.set("b")
    navigate("/");
    location.reload();
}
</script>
{#if initialized}
<div class="container bg-gray-800" in:fade>
        <form class="flex flex-col  ">
            <div class="flex flex-col mb-2">
                <label class="pr-2 ml-1 mb-2 font-extrabold text-white text-lg" for="username">Usuario:</label>
                <input class="border ml-1 mr-1 mb-2 border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent   " type="email" name="username"/>
            </div>
    <div class="flex flex-col mb-2">
        <label class="pr-2 mb-2 ml-1 font-extrabold text-white text-lg" for="password">Contraseña:</label>
        <input class="border ml-1 mr-1 mb-2 border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" type="password" name="password"/>
    </div>
    
        </form>
        <button class="bg-green-600 hover:bg-green-800 focus:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 font-bold text-white p-2 w-full" on:click="{() => auth()}">Submit</button>
    </div>
{/if}