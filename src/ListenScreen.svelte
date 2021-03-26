<script lang="ts">
import { musicPlayer } from "./currentSong";
import { SongModel } from "./songModel";


    let songs = [
        new SongModel("Assembled Virtual Peryton","Lessness","Short Electronic Songs","./../assets/music/less-ses-01.mp3")
    ]
    let current = 0;

    let fav = [1,2,3,5]

    function changeTo(i : number)
    {
        musicPlayer.change(songs[i]);
        current = i;
    }
</script>
<div class="flex bg-gray-900 text-white font-bold">
    <div class="p-2 w-8 flex-shrink-0"></div>
    <div class="p-2 w-8 flex-shrink-0"></div>
    <div class="p-2 w-full">Title</div>
    <div class="p-2 w-full">Artist</div>
    <div class="p-2 w-full">Album</div>
    <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
  </div>
{#each songs as song,i}
<div class="flex border-b bg-gray-900 text-white font-bold border-gray-800 hover:bg-gray-800" on:click={() => changeTo(i)}>
    <div class="p-3 w-8 flex-shrink-0">{current === i ? "▶️" : " " }</div>
    <div class="p-3 w-8 flex-shrink-0">{fav.includes(i) ? "❤️" : " "}</div>
    <div class="p-3 w-full">{song.title}</div>
    <div class="p-3 w-full">{song.artist}</div>
    <div class="p-3 w-full">{song.album}</div>
    <div class="p-3 w-12 flex-shrink-0 text-right">{song.duration}</div>
  </div>
{/each}

<div 
>

</div>