import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import IReduxState from '../../interfaces/IReduxState';
import SelectBasicCustom from '../../components/SelectBasicCustom';
import { CircularProgress } from '@mui/material';
import Details from '../../components/Typography/Details';
import BreedHelper from '../../helpers/BreedHelper';

interface IProps {}

export default function DogBreedsSelect(props:IProps) {

    useEffect(() => {
        BreedHelper.getBreeds()
    }, []);

    const breeds = useSelector((state:IReduxState) => state.breeds);
    const breeds_loading = useSelector((state:IReduxState) => state.breeds_loading);
    const breeds_error = useSelector((state:IReduxState) => state.breeds_error);
    const breed_selected = useSelector((state:IReduxState) => state.breed_selected);
    
    return (
        <div style={{display:"flex", flex:1, alignItems:"center", justifyContent:"center", padding:"32px 0"}}>
            {breeds_loading ? 
                <CircularProgress />
            :
                breeds_error !== "" ? 
                    <Details text={breeds_error} />
                :
                    breeds.length === 0 ? 
                        <Details text={"Aucune race n'a été récupérée."} />
                    :
                        <SelectBasicCustom 
                            id={""}
                            label={"Races de chien"}
                            value={breed_selected}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                BreedHelper.setBreedSelected(event?.target?.value || "")
                            }}
                            valuesPossible={breeds}
                            maxWidth={480}
                        />
            }
        </div>
    );
}