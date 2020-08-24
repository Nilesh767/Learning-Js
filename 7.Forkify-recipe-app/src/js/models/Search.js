import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() { //add query as parameter - if there is an issue after commit
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}