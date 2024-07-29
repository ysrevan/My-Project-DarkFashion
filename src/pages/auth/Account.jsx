import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import AccountName from '../../components/AccountName';
import { useAppSelector } from '../../tools/store';
import Animation from '../../components/Animation'
import { LangContext } from '../../context/LangContext';
const Account = () => {

    const {token} = useParams();
    const user = useAppSelector((p)=>p.user);
    const filterUser = user.find((p)=>p.token == token)
    const [lang,setLang] = useContext(LangContext)

  return (
   <>
    <AccountName/>
    <div className='account-box'>
    <h1>{lang==="EN"?"Welcome!":"Xoş gəldiniz!"}</h1>
    {!filterUser? <p>No Account</p>:<ul>
    <li className='account-list'>{lang==="EN"?"Name: ":"Ad: "}{filterUser.fullname}</li>
    <li className='account-list'>{lang==="EN"?"Telephone: ":"Telefon: "}{filterUser.telephone}</li>
    <li className='account-list'>{lang==="EN"?"Birthday: ":"Doğum günü: "}{filterUser.birthday}</li>
    <li className='account-list'>Email: {filterUser.email}</li>
    </ul>}
</div>
<Animation/>
   </>
  )
}

export default Account