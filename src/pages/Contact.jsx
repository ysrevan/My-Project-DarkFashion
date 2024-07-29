import React from 'react'
import Photo from '../components/Photo';
import Service from '../components/Service';
import Animation from '../components/Animation';
import ContactName from '../components/ContactName'
import ContactCards from '../components/ContactCards';
import Map from '../components/Map';
const Contact = () => {
  return (
    <>
    <ContactName/>
    <ContactCards/>
    <Map/>
    <Service />
    <Photo />
    <Animation />
    </>
  )
}

export default Contact