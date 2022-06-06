const setJsonItem=(key, value)=>{
    localStorage.setItem(key, JSON.stringify(value))
};
const getJsonItem=(key)=>
    JSON.parse(localStorage.getItem(key));

export const useStorage = () => ({setJsonItem, getJsonItem});

