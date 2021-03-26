<script lang="ts">
	import { navigate } from 'svelte-routing';
import { pathT } from './reactiveLocation';

    function navTo(route : string)
    {
        navigate(route);
        pathT.set(route);
    }
</script>

<div class="flex flex-col ">
    <button class="m-4 bg-green-500 p-2 hover:bg-green-800 focus:bg-green-800 text-white font-extrabold" on:click="{() => navTo("register") }">Registrarse</button>
    <button class="m-4 bg-green-400 p-2 hover:bg-green-700 focus:bg-green-700 text-white font-extrabold" on:click="{() => navTo("login") }">Iniciar Sesion</button>
</div>  