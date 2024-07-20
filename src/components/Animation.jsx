import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext'

const Animation = () => {
  const[lang,setLang] = useContext(LangContext)
  return (
    <div className='animation'>
    <ul>
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/star-icon-color.svg" alt="" /><li className='list-group-item'>Formal</li>
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/star-icon-color.svg" alt="" /><li className='list-group-item'>{lang==="EN"?"Party":"Partiya"}</li>
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/star-icon-color.svg" alt="" /><li className='list-group-item'>{lang==="EN"?"Work":"İş"}</li>
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/star-icon-color.svg" alt="" /><li className='list-group-item'>{lang==="EN"?"Business":"Biznes"}</li>
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/star-icon-color.svg" alt="" /><li className='list-group-item'>{lang==="EN"?"Casual":"Gündəlik"}</li>
    </ul>
</div>
  )
}

export default Animation