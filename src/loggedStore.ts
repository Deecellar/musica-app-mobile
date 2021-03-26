
import { readable, writable } from "svelte/store";

const logged = localStorage.getItem("auth");
export const loggedTime = writable(logged);
loggedTime.subscribe(value => {
    localStorage.setItem("auth", value === 'logged' ? '' : 'logged');
});
export const isLogged = readable(logged, x=> x(''));