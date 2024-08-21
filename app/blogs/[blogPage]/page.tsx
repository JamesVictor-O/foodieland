import React from 'react'
import PostPageHeader from '@/components/blogPostPage/header'
import Content from '@/components/blogPostPage/content'
const page = () => {
  return (
    <div className=' w-full p-5 '>
          <PostPageHeader />
          <Content/>
    </div>
  )
}

export default page
