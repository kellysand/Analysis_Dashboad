import React, { useEffect, useState ,useMemo} from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";
import { useUserData } from '../../hook/userDataProvider'
interface Post {
  id: number;
  content: string;
  created_at: Date;
  engagement_score: number;
  is_trending: boolean;
  likes: number;
  shares: number;
  users: {
    name: string;
  };
}

type SortKey = "likes" | "engagement_score" | "shares" | null;

export const TrendingPosts: React.FC = () => {

const {posts}=useUserData()
const [data, setData] = useState<Post[]|null>([])
  const trandingPost = useMemo(
    () => posts ? posts.filter(post => post.is_trending !== false) : [],
    [posts]
  );



  const handleSort = (key: SortKey) => {
    const sortedData = [...(data ?? [])].sort((a, b) => b[key!] - a[key!]);
    setData(sortedData);
  };
useEffect(()=>{
setData(trandingPost)
},[trandingPost])
if (!posts) return <div>Loading...</div>;
if (trandingPost.length === 0) return <div>No trending posts found.</div>;
  return (
    <div className="p-4 border rounded-xl shadow-md">
        <h2>Trending Posts</h2>
      <div className=" grid grid-cols-3 gap-2 mb-4">
        <Button variant="outline" onClick={() => handleSort("likes")}>
          Sort by Likes
        </Button>
        <Button variant="outline" onClick={() => handleSort("engagement_score")}>
          Sort by Engagement
        </Button>
        <Button variant="outline" onClick={() => handleSort("shares")}>
          Sort by Shares
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Post</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Engagement</TableHead>
            <TableHead>Shares</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.users.name}</TableCell>
              <TableCell>{post.content}</TableCell>
              <TableCell>{post.likes}</TableCell>
              <TableCell>{post.engagement_score}</TableCell>
              <TableCell>{post.shares}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
