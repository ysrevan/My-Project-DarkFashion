import React from 'react';
// import FadeLoader from "react-spinners/FadeLoader";

const Preloader = () => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{width: "100%", height: "100vh"}}>
     {/* <img src="https://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-2.gif" alt=""
     style={{width: "100%", height: "100vh"}} /> */}
{/* <FadeLoader
  color="#ad690f"
  height={60}
/> */}

<img src="https://blog.hubspot.com/hs-fs/hubfs/3fdca92b583372667c5943ee6bae0787.gif?width=1500&name=3fdca92b583372667c5943ee6bae0787.gif" alt=""
style={{width: "100%", height: "100vh"}} />
    </div>
  );
}

export default Preloader;
