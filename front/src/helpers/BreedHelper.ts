import store from '../store';
import reduxAction from "../actions/reduxAction";

abstract class BreedHelper{

    /**
    * @author Johann BERNARD
    */
    public static setBreedSelected(breed:string) {
        store.dispatch(reduxAction("SET_BREEDS_SELECTED", breed))
        BreedHelper.getBreedImageRandom(breed)
    } 

    /**
    * @author Johann BERNARD
    */
    public static getBreeds() {
        store.dispatch(reduxAction("SET_BREEDS_LOADING", true))
        fetch("http://localhost:3001/dogs/breeds",{
            method: "GET",
            headers: {
                Accept: 'application/json'
            }
        })
        .then((response:any) => response.json())
        .then((result:any) => {
            if (result.status){
                store.dispatch(reduxAction("SET_BREEDS", result.value))
                //Sélectionne la première race par défaut
                if(result.value.length > 0){
                    BreedHelper.setBreedSelected(result.value[0])
                }
            }else{
                store.dispatch(reduxAction("SET_BREEDS_ERROR", result.message))
            }
            store.dispatch(reduxAction("SET_BREEDS_LOADING", false))
        })
        .catch(() => {
            store.dispatch(reduxAction("SET_BREEDS_ERROR", "Une erreur s'est produite, veuillez réessayer plus tard."))
            store.dispatch(reduxAction("SET_BREEDS_LOADING", false))
        })
    }
    
     /**
    * @author Johann BERNARD
    */
     public static getBreedImageRandom(breedInput?:string) {
        const breed : string = breedInput ? breedInput : (store.getState().breed_selected as string)
        if(!breed){ return }

        store.dispatch(reduxAction("SET_BREED_IMAGE_LOADING", true))
        fetch("https://dog.ceo/api/breed/"+breed.toLowerCase()+"/images/random",{
            method: "GET",
            headers: {
                Accept: 'application/json'
            }
        })
        .then((response:any) => response.json())
        .then((result:any) => {
            if (result.status === "success"){
                store.dispatch(reduxAction("SET_BREED_IMAGE", result.message))
            }else{
                store.dispatch(reduxAction("SET_BREED_IMAGE_ERROR", "Une erreur s'est produite. Veuillez réessayer plus tard."))
            }
            store.dispatch(reduxAction("SET_BREED_IMAGE_LOADING", false))
        })
        .catch(() => {
            store.dispatch(reduxAction("SET_BREED_IMAGE_ERROR", "Une erreur s'est produite, veuillez réessayer plus tard."))
            store.dispatch(reduxAction("SET_BREED_IMAGE_LOADING", false))
        })
    }
 
}

export default BreedHelper;

