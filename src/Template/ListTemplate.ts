import FullList from '../Model/FullList'
export interface DomTemplate{
    ul:HTMLUListElement,
    clear():void,
    render(fullList:FullList):void
}

export default class ListTemplate{
    ul:HTMLUListElement
   static instance:ListTemplate=new ListTemplate()
    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }
    clear():void{
        this.ul.innerHTML=''
    }
    render(fullList:FullList){
        console.log('hea')
     this.clear()
     fullList.list.forEach(item=>{
        const li=document.createElement('li') as HTMLLIElement
        li.className='item'

        const checkbox=document.createElement('input') as HTMLInputElement
        checkbox.type='checkbox'
        checkbox.id=item.id
        checkbox.checked=item.checked
        
        li.append(checkbox)
        checkbox.addEventListener('change',()=>{
            item.checked=!item.checked
            fullList.save()
        })

        const label=document.createElement('label') as HTMLLabelElement
        label.textContent=item.item
        label.htmlFor=label.id

        li.append(label)

        const button=document.createElement('button') as HTMLButtonElement
        button.textContent='X'
        button.className='button'

        li.append(button)
        button.addEventListener('click',()=>{
            fullList.removeItem(item.id)
            this.render(fullList)
        })

        this.ul.append(li)

     })
    }
}