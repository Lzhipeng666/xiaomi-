/**
 * Storage封装
 */
const STORAGE_KEY='mall';
export default{
    // 存储值()
    setItem(key,value,modele_name){
        if(modele_name){
            console.log(modele_name)
            let val =this.getItem(modele_name)
            val[key]=value;
            this.setItem(modele_name,val)
        }else{
            let val =this.getStorage()
            val[key]=value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));    
        }
    },
    // 获取某一个模块下面的属性user下面的username
    getItem(key,modele_name){
        if(modele_name){
            let val =this.getItem(modele_name)
            if(val){
                return val[key]
            }
        }
      return  this.getStorage()[key]
    },

    getStorage(){
     return  JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}') 
    },

    clear(key,modele_name){
        let val=this.getStorage()
        if(modele_name){
            if(!val[modele_name]) return
           delete val[modele_name][key]
        }else{
            delete val[key]
        }
        this.setItem(STORAGE_KEY,val)
    }
}