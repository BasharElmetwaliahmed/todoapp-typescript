import './style.css'
import ListTemplate from '../src/Template/ListTemplate'
import FullList from './Model/FullList'
import ListItem from './Model/ListItem'

const init=()=>{
  const fullList=FullList.instance;
  const listTemplate=ListTemplate.instance;
  
  const formEntry=document.querySelector('#itemEntryForm') as HTMLFormElement
  formEntry?.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputField=document.getElementById('newItem') as HTMLInputElement
    const newText:string=inputField.value
    if(!newText.trim().length) return

    
    const newId:number=fullList.list.length?parseInt(fullList.list[fullList.list.length-1].id)+1:1
    const newItem=new ListItem(newId.toString(),newText)
    fullList.addItem(newItem)
    listTemplate.render(fullList)


  })
  const clearBtn=document.getElementById('clearItemsButton') as HTMLButtonElement
  clearBtn?.addEventListener('click',()=>{
    fullList.clear();
    listTemplate.clear()
  })
  
  fullList.load()
  listTemplate.render(fullList)

}

document.addEventListener('DOMContentLoaded',init)