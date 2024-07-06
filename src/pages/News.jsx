import React, { useState } from 'react';
import BlogName from '../components/BlogName';
import Animation from '../components/Animation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import NewsCard1 from '../components/NewsCard1';
import NewsCard2 from '../components/NewsCard2';
import { useAppSelector } from '../tools/store';

const News = () => {
  const [page, setPage] = useState(1);
  const news1 = useAppSelector((state) => state.news1) ;
  const news2 = useAppSelector((state) => state.news2) ;

  const handleChange = (event, value) => {
    setPage(value);
  };

  const renderContent = () => {
    switch (page) {
      case 1:
        return <div className='row'>{news1.map((item)=>(
          <NewsCard1 img={item.image} day={item.day} title={item.title}/>
        ))}</div>;
      case 2:
        return <div className='row'>{news2.map((item)=>(
          <NewsCard2 img={item.image} day={item.day} title={item.title}/>
        ))}</div>;
      default:
        return <div>Sayfa bulunamadı</div>;
    }
  };

  return (
    <>
      <BlogName />
      <div className="newscards">
        <div className="container">
          {renderContent()}
          <Stack spacing={2}>
            <Pagination
              count={2}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handleChange}
              style={{ background: "#A1876A", width: "14%" }}
            />
          </Stack>
        </div>
      </div>
      <Animation />
    </>
  );
}

export default News;


