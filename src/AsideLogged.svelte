<script lang="ts">
import { onMount } from 'svelte';

	import { navigate } from 'svelte-routing';
import type { Writable } from 'svelte/store';
import { musicPlayer } from './currentSong';
import type { SongModel } from './songModel';
let duration : Writable<string>;
let current : Writable<string>;

    function out()
    {
        localStorage.clear();
        navigate("/")
        location.reload();    
    }
    onMount(() => {
      musicPlayer.subscribe((model : SongModel) => {
      const music = document.getElementById("music");
      music!.appendChild(model.audioFile);
      duration = model.duration;
      current = model.currentTime;
    });

    })
    
</script>
<div class="hidden" id="music">
</div>
<div class="bg-gray-700 flex-none w-full left-0 bottom-0 fixed z-50 shadow-sm text-white h-22 px-5 flex items-center justify-between">
        <div class="flex items-center">
          <div class="ml-3">
            <div><button class="hover:underline" on:click="{() => out()}">✕</button></div>
            <div><a href="#" class="text-xs text-gray-500 hover:underline hover:text-white">{$musicPlayer.artist}</a></div>
          </div>
        </div>
        <div class="player-controls flex flex-col justify-center">
          <div class="flex justify-center">
            <button>
              <svg class="fill-current text-gray-400 hover:text-white h-4 w-4" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/></svg>
            </button>
            <button class="ml-8">
              <svg class="fill-current text-gray-400 hover:text-white h-6 w-6" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
            </button>
            <button class="ml-8" on:click="{() => $musicPlayer.startOrPause()}">
              <svg class="fill-current  hover:text-white h-8 w-8" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM7 6l8 4-8 4V6z"/></svg>
            </button>
            <button class="ml-8">
              <svg class="fill-current text-gray-400 hover:text-white h-6 w-6" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
            </button>
            <button class="ml-8">
              <svg class="fill-current text-gray-400 hover:text-white h-4 w-4" viewBox="0 0 24 24" width="24" height="24"><path d="M5.41 16H18a2 2 0 002-2 1 1 0 012 0 4 4 0 01-4 4H5.41l2.3 2.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 111.42 1.4L5.4 16zM6 8a2 2 0 00-2 2 1 1 0 01-2 0 4 4 0 014-4h12.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4L18.6 8H6z"/></svg>
            </button>
          </div>
          <div class="max-w-full mt-3 flex items-center justify-center">
            <div class=" text-xs text-gray-500">{$current}</div>
            <div class="bg-gray-500 rounded-lg w-full xl:w-200 h-1 ml-3"></div>
            <div class="ml-3 text-xs text-gray-500">{$duration}</div>
          </div>
        </div>

      </div>