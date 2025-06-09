
import UserDataProvider from '../hook/userDataProvider'
 import {TrendingPosts } from './graphs/trendingPosts'
 import UserMostPost from './graphs/userMostPost'
function PostDashboard() {
  return (
    <UserDataProvider>
      <div className='grid gap-4 grid-cols-1'>
        <TrendingPosts/>
        <UserMostPost/>
      </div>
    </UserDataProvider>
  )
}

export default PostDashboard
