import { useEffect, useState } from "react"
import CardPost from "../components/CardPost/CardPost"
import style from "../style/Home.module.css"
import BlogCard from "../components/BlogCard/BlogCard"
import NavBar from "../components/NavBar/NavBar"
import config from "../config.json"
import axios from "axios"

export default function Home() {
    const [posts, setPosts] = useState([])
    const [blogs, setBlogs] = useState([])
    const [dataFetch, setDataFetch] = useState()

    const fetchBlogs = async () => {
        const { data } = await axios.get(`${config.baseRoute}/blog/findAll`)
        setDataFetch(data)
    }

    const handleRenderPostsCard = async () => {
        const arr = []

        dataFetch.blogs.map((blog, i) => {
            blog.map((posts) => {
                posts.postagens.map((post) => {
                    arr.push([<CardPost key={i} showBlogUsername={true} userId={i} postId={post._id} description={post.desc} title={post.title} />])
                })
            })
        })
        setPosts(arr)
    }

    const handleRenderBlogsCard = async () => {
        const arr = []
        dataFetch.blogs.map((blog, i) => {
            arr.push([<BlogCard key={i} blogName={blog[0]?.name} blogId={blog[0]?._id} />])
        })
        setBlogs(arr)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    useEffect(() => {
        if (dataFetch) {
            handleRenderBlogsCard()
            handleRenderPostsCard()
        }
    }, [dataFetch])

    return (
        <div className={style.primaryContainerExt}>
            <NavBar />
            <div className={style.primaryContainerInt}>
                <div className={style.peopleContainer}>
                    <div className={style.peopleContainerInt}>{blogs}</div>
                </div>
                <div className={style.pubContainer}>
                    <div className={style.pubContainerInt}>
                        <h1 className={style.textContainer}>Most Recent Posts</h1>
                        <div className={style.gridCards}>{posts}</div>
                    </div>
                </div>
            </div>
            <div className={style.footer}></div>
        </div>
    )
}
