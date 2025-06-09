
import UserDataProvider from '../hook/userDataProvider'
 import {TrendingPosts } from './graphs/trendingPosts'
 import UserMostPost from './graphs/userMostPost'
function PostDashboard() {
  return (
    <UserDataProvider>
      <div>
        <TrendingPosts/>
        <UserMostPost/>
      </div>
    </UserDataProvider>
  )
}

export default PostDashboard
