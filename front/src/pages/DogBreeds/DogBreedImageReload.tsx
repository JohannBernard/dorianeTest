import { Button } from '@mui/material';
import BreedHelper from '../../helpers/BreedHelper';
import RefreshIcon from '@mui/icons-material/Refresh';

interface IProps {}

export default function DogBreedImageReload(props:IProps) {
    
    return (
        <div style={{margin:"32px auto", display:"flex", justifyContent:"center"}}>
            <Button 
                variant="contained" 
                onClick={
                    () => BreedHelper.getBreedImageRandom()
                }
                startIcon={<RefreshIcon />}
            >Nouvelle image ? </Button>
        </div>
    );
}