import ListItem from "./ListItem"
export interface List{
  list:ListItem[],
  save():void,
  load():void,
  clear():void,
  addItem(item:ListItem):void,
  removeItem(itemId:string):void
}

export default class FullList{
    //we use singelton by make constructor private and because we make one instance
   static instance:FullList=new FullList() 
   private constructor(private _list:ListItem[]=[]){}
   get list():ListItem[]{
    return this._list
   }
   save():void{
    localStorage.setItem('listItem',JSON.stringify(this._list))
   }
   clear():void{
    this._list=[];
    this.save()
   }
   addItem(item:ListItem){
    this._list.push(item)
    this.save()
   }
   removeItem(itemId:string){
    this._list=this._list.filter(item=>itemId!=item.id)
    this.save()
   }
   load():void{
    const storedData:string|null=localStorage.getItem('listItem')
    if(!storedData) return
    const retrivedData:{_id:string,_item:string,_checked:boolean}[]=JSON.parse(storedData)
    retrivedData.forEach(item=>{
        const retrivedItem=new ListItem(item._id,item._item,item._checked)
        FullList.instance.addItem(retrivedItem)
    })
   }
}