import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    url: "https://api.themoviedb.org/3/search/movie?api_key=f8602937b8588cbfcb2642e2d6ed1338&language=en-US&query=",
    movieList: []
});

