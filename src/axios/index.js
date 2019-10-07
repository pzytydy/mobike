import Jsonp from 'jsonp'



export default class Axios{
    static jsonp(options){
        return new Promise((resolve,reject)=>{
            Jsonp(options.url,{
                //跨域，所有使用回调函数
                param:'callback'
            },function(err,respone){
                // debugger;
                if (respone.status=='success') {
                    resolve(respone)
                    // console.log(respone.results[0].weather_data[0])
                }else{
                    reject(respone.message)
                }
            })
        })
    }
}