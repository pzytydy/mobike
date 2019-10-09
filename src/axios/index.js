import Jsonp from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'



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


    static ajax(options){
        let loading= document.getElementById('ajaxLoading');
        if (options.data && options.data.isShowLoading !== false){
            
            loading.style.display = 'block';
        }
        let baseApi = 'https://easy-mock.bookset.io/mock/5d9d58957355f52bcfe165e7/example';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params: (options.data && options.data.params) || ''
            }).then((response)=>{
                if (options.data && options.data.isShowLoading !== false) {
                    loading.style.display = 'none';
                }
                if (response.status == '200'){
                    let res = response.data;
                    if (res.code == '0'){
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"提示",
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data);
                }
            })
        });
    }
}