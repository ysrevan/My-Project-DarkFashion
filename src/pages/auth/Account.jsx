import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../tools/store';

const Account = () => {

    const {token} = useParams();
    const user = useAppSelector((p)=>p.user);
    const filterUser = user.find((p)=>p.token == token)


  return (
    <div>
    {!filterUser? <p>Now Account</p>:<ul>
    <li>{filterUser.fullname}</li>
    <li>{filterUser.telephone}</li>
    <li>{filterUser.birthday}</li>
    <li>{filterUser.email}</li>
    </ul>}
</div>
  )
}

export default Account