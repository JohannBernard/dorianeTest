exports.get_dog_breeds = async (req: any, res: any, next: any) => {
    try{
        const dogs: Array<string> = ['Malamute', 'Kelpie', 'Eskimo', 'Chow', 'Mix', 'Akita', 'Bouvier'];
        res.status(201).json({ 
            status : true,
            value : dogs,
            message: null
        })
    } catch (error) {
        res.status(400).json({ 
            status : false,
            value : null,
            message: error ? 
                        ((typeof error === 'string') ? 
                            error 
                        : 
                            JSON.stringify(error)) 
                    : 
                        "Une erreur s'est produite, veuillez réessayer plus tard."
        })
    }
};