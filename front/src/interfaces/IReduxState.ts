export default interface IReduxState {
    //breeds
    breeds:Array<string>;
    breeds_loading:boolean;
    breeds_error:string;
    //breed
    breed_selected:string;
    //breed_image
    breed_image:string;
    breed_image_loading:boolean;
    breed_image_error:string;
}