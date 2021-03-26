import { writable } from 'svelte/store';
import { SongModel } from './songModel';

function createMusic()
{
    let def = new SongModel("Assembled Virtual Peryton","Lessness","Short Electronic Songs","./../assets/music/less-ses-01.mp3")
    
    const {subscribe, set, } = writable(def);

    return {
        subscribe,
        change: (s : SongModel) => set(s),
        reset : () => set(def)
    }
}

export const musicPlayer = createMusic();