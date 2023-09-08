abstract class ReducerHelper{
  
    /**
    * @author Johann BERNARD <j.bernard@santiane.fr>
    */
    public static reduxInit(initValue:any, update:string){
        let reducer = (state: any, action: { type: string; payload: string; }) => {
            switch (action.type) {
              case update:
                return action.payload || initValue
              default:
                return state || initValue
            }
        };
          
        return reducer 
    }

}

export default ReducerHelper;

