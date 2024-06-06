import React from 'react'
import ourStory from '../../image/ourstory.jpg'
import Story from './story/Story'
import Generation from './generation/Generation'
import Staff from './staff/Staff'
import EditorInChief from './editorInChief/EditorInChief'
const OurStory = () => {
  return <>
  <img src={ourStory} alt="" />
  <Story />
  <Generation />
  <Staff/>
  <EditorInChief />
  </>
}

export default OurStory