import axios from 'axios';


//POST new city
function* postCitySaga(action) {
    console.log('hit!');
    try {
        console.log(action.payload);
        yield axios.post()
        
    }
    
}