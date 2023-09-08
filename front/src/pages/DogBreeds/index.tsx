import DogBreedsSelect from './DogBreedsSelect';
import DogBreedImage from './DogBreedImage';
import DogBreedImageReload from './DogBreedImageReload';
import './index.css';
import Title from '../../components/Typography/Title';

function DogBreeds() {
	return (
		<div className="dogBreedsContainer">
			<div style={{textAlign:"center"}}>
				<Title text="Découvrir des races de chiens"/>
			</div>
			<DogBreedsSelect />
			<DogBreedImage />
			<DogBreedImageReload />
		</div>
	);
}

export default DogBreeds;
