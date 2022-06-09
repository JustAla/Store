export const reducer = (state , action ) => { 

    if (action.type === 'ADD_SAVE') {  return {...state,save : state.save + 1 ,saveItems:[...state.saveItems ,action.payload.item] }}  
    if (action.type === "BUY_ITEM"){
        const item = {...action.payload.item , quantity:1}
        // let total = state.storeItems.reduce((total,item)=> {
        //     total = item.price * item.amount 
        //     return total},total=state.allPrice) 
        // console.log(total)
        return {...state,store:state.store + 1,storeItems:[...state.storeItems ,item]   }}

    if (action.type === "UNSAVE") 
    { console.log("IDDDDD",action.payload.id) ;
    return {...state,save:state.save - 1 ,
        saveItems:state.saveItems.filter(item => {console.log("as") ;return action.payload.id !== item.id}) }}

    if (action.type === "UNBUY_ITEM") {
        console.log("IDDDDD",action.payload.id) ;
        return {...state,store:state.store - 1 ,storeItems:state.storeItems.filter(item => {console.log("as") ;return action.payload.id !== item.id}) }}

    if (action.type === 'INCREMENT') 
    {
        let Item = state.storeItems.find(item => item.id === action.payload.id )
        Item = {...Item , quantity:Item.quantity + 1 }
        const newItem = state.storeItems.map(item => {
            if (item.id === action.payload.id) return Item 
            else return item 
        })
        return {...state , storeItems:newItem} 
    }

    if (action.type === "DECREMENT")
    {
        let Item = state.storeItems.find(item => item.id === action.payload.id )
        Item = {...Item , quantity:Item.quantity - 1 } 
        if (Item.quantity === 0) 
        return {...state,store:state.store - 1 ,storeItems:state.storeItems.filter(item => { return action.payload.id !== item.id}) }
        const newItem = state.storeItems.map(item => {
            if (item.id === action.payload.id) return Item 
            else return item 
        })
        return {...state , storeItems:newItem} 
    }
    return state ; 
}