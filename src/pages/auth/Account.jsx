import React from 'react'
import { useParams } from 'react-router-dom';
import AccountName from '../../components/AccountName';
import { useAppSelector } from '../../tools/store';
import Animation from '../../components/Animation'
const Account = () => {

    const {token} = useParams();
    const user = useAppSelector((p)=>p.user);
    const filterUser = user.find((p)=>p.token == token)


  return (
   <>
    <AccountName/>
    <div className='account-box'>
    {!filterUser? <p>No Account</p>:<ul>
    <li className='account-list'>{filterUser.fullname}</li>
    <li>{filterUser.telephone}</li>
    <li>{filterUser.birthday}</li>
    <li>{filterUser.email}</li>
    </ul>}
</div>
<Animation/>
   </>
  )
}

export default Account