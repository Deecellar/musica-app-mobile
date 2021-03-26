import { Writable, writable } from "svelte/store";

export class SongModel {
    title : string;
    artist: string;
    album : string;
    duration : Writable<string>;
    location : string;
    currentTime: Writable<string>;
    audio : AudioContext;
    audioFile : HTMLAudioElement;
    source : MediaElementAudioSourceNode;
    playInterval : number = 0;
    constructor(title : string, artist : string ,album : string, location: string)
    {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.location = location;
        this.currentTime = writable("0:00")        ;
        this.audio = new AudioContext();
        this.audioFile = new Audio(location);
        this.audioFile.controls = false;
        this.source = this.audio.createMediaElementSource(this.audioFile);
        this.source.connect(this.audio.destination);
        this.audioFile.currentTime = 0;
        this.audioFile.pause();
        this.duration = writable("0:00")
        this.reset();
    }
    private format(time : number) : string {   
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;
    
        var ret = "";
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        console.log(ret);
        return ret;
    }
    
    addTime()
    {
        this.currentTime.set(this.format(this.audioFile.currentTime));
        this.duration.set(this.format(this.audioFile.duration));
    }

    startOrPause()
    {
        if(this.audioFile.paused)
        {
            this.start();
            return;
        }
        this.stop();
    }

    setLoop()
    {

    }
    start()
    {
        this.audioFile.play();
        this.playInterval =  setInterval( () => this.addTime(), 1000); 
    }

    stop()
    {
        this.audioFile.pause();
        clearInterval(this.playInterval);
    }

    reset()
    {
        this.audioFile.currentTime = 0;
        this.currentTime.set(this.format(this.audioFile.currentTime));
    }
}