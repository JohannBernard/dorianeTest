import { useSelector } from 'react-redux';
import IReduxState from '../../interfaces/IReduxState';
import { Fade, Skeleton } from '@mui/material';
import Details from '../../components/Typography/Details';

interface IProps {}

export default function DogBreedImage(props:IProps) {

    const breed_image = useSelector((state:IReduxState) => state.breed_image);
    const breed_image_loading = useSelector((state:IReduxState) => state.breed_image_loading);
    const breed_image_error = useSelector((state:IReduxState) => state.breed_image_error);

    const breed_selected = useSelector((state:IReduxState) => state.breed_selected);
    const breeds_loading = useSelector((state:IReduxState) => state.breeds_loading);
    
    return (
        <>
            {( (!breed_selected) && (!breeds_loading) ) ? 
                <Details text={"Veuillez sélectionner une race de chien."} />
            :
            
                breed_image_loading ? 
                    <div style={{display:"flex", flex:1, alignItems:"center", justifyContent:"center"}}>
                        <Skeleton 
                            variant="rounded" 
                            sx={breedImageSize} 
                            animation="wave"
                        />
                    </div>
                :
                    breed_image_error !== "" ? 
                        <Details text={breed_image_error} />
                    :
                    <div style={{...breedImageSize, margin:"auto"}}>
                        <Fade in={!breed_image_loading} timeout={2000}>
                                <img
                                    src={breed_image}
                                    alt="breed_image"
                                    style={{
                                        ...breedImageSize, 
                                        borderRadius:4, 
                                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 5px",
                                        objectFit:"cover"
                                    }} 
                                    onError={(event:any) => {
                                        event.target.src = "https://uploads-ssl.webflow.com/612f90b478cf5e3ec35e2b20/61e047868cbe0a22b01b7fb8_Logo-Doriane-SVG-bd.svg"
                                        event.target.style.objectFit = "contain"
                                        event.onerror = null
                                    }}
                                />
                        </Fade>
                    </div>
            }
        </>
    );
}

const breedImageSize = {
    height: "calc( 100vw - 40px )",
    width: "calc( 100vw - 40px )",
    maxHeight:480,
    maxWidth:480
}