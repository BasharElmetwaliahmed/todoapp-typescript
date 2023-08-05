export interface item{
    id:string,
    item:string,
    checked:string
}
export default class ListItem{
    constructor(private _id:string='',private _item:string='',private _checked:boolean=false){}
    set id(value:string){
        this._id=value
    }
    get id(){
        return this._id
    }

    set item(value:string){
        this._item=value
    }
    get item(){
        return this._item
    }    

    set checked(value:boolean){
        this._checked=value
    }
    get checked(){
        return this._checked
    }    
}