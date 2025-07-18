 export const API_KEY='AIzaSyD2AjC0n2H_jXQDU-xa91nX1rdbfROO1Ok'

 export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000000)+"M"
    }
    else{
        return value
    }
 }