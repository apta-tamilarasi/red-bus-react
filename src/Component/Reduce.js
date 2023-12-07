import data from '../product.json'

export const initialstate={
    buses:data.bus,
    count:0,
    
}

export const Reduce=(state,action)=>{
    if(action.type==='updatebuses'){
        return {...state,buses:action.payload}
    }
    if(action.type==='updatebus1'){
        return {...state,bus1:action.payload}
    }
    if(action.type==='updatecount'){
        return {...state,count:action.payload}
    }

}

