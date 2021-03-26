<script lang="ts">
  import { onMount } from "svelte";

  import { Link, navigate } from "svelte-routing";
  import { xlink_attr } from "svelte/internal";
  import { pathT } from "./reactiveLocation";

  let registerScreen = 0;
  function change(optional: string = "") {
    let number = 0;
    switch (window.location.pathname) {
      case "/":
        break;
      case "/register":
        number = 1;
        break;
      case "/login":
        number = 2;
        break;
    }
    registerScreen = number;
    switch (registerScreen) {
      case 0:
        navigate("");
        break;
      case 1:
        navigate("register");
        break;
      case 2:
        navigate("login");
        break;
    }
  }
  onMount(() => {
    pathT.subscribe(() => {
      change();
    });
  });
  $: $pathT, change;
</script>

<aside
  class="fixed bottom-0 left-0 right-0 z-50 transform flex h-14 shadow-sm bg-gray-800"
>
  <div
    class="flex-grow text-center text-xs flex flex-col justify-center"
    on:click={() => change()}
  >
    <div class="flex flex-col justify-center items-center">
      <figure class="w-5 flex flex-col  ">
        <svg
          class="stroke-current  {registerScreen != 0
            ? 'text-white'
            : 'text-red-500'}"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </figure>
      <Link to="" class=" {registerScreen != 0 ? 'text-white' : 'text-red-500'}"
        >Inicio</Link
      >
    </div>
  </div>
  <div class="flex-grow text-center text-xs flex flex-col justify-center">
    <div
      class="flex flex-col justify-center items-center"
      on:click={() => change()}
    >
      <figure class="w-5 flex flex-col  ">
        <svg
          class="stroke-current  {registerScreen != 1
            ? 'text-white'
            : 'text-red-500'}"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      </figure>
      <Link
        to="register"
        class=" {registerScreen != 1 ? 'text-white' : 'text-red-500'}"
        >Registrarse</Link
      >
    </div>
  </div>
  <div class="flex-grow text-center text-xs flex flex-col justify-center">
    <div
      class="flex flex-col justify-center items-center"
      on:click={() => change()}
    >
      <figure class="w-5 flex flex-col  ">
        <svg
          class="stroke-current  {registerScreen != 2
            ? 'text-white'
            : 'text-red-500'}"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      </figure>
      <Link
        to="login"
        class=" {registerScreen != 2 ? 'text-white' : 'text-red-500'}"
        >Entrar</Link
      >
    </div>
  </div>
</aside>
