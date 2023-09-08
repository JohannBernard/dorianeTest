import ReducerHelper from '../helpers/ReducerHelper'

const breedReducers = Object.assign({},
   {breeds : ReducerHelper.reduxInit([], "SET_BREEDS")},
   {breeds_loading : ReducerHelper.reduxInit(false, "SET_BREEDS_LOADING")}, 
   {breeds_error : ReducerHelper.reduxInit("", "SET_BREEDS_ERROR")}, 
   {breed_selected : ReducerHelper.reduxInit(null, "SET_BREEDS_SELECTED")}, 
   {breed_image : ReducerHelper.reduxInit("", "SET_BREED_IMAGE")},
   {breed_image_loading : ReducerHelper.reduxInit(false, "SET_BREED_IMAGE_LOADING")}, 
   {breed_image_error : ReducerHelper.reduxInit("", "SET_BREED_IMAGE_ERROR")}, 
);

export default breedReducers