import { Link } from "react-router-dom"
import BlogCard from "../components/BlogCard/BlogCard"
import CardPost from "../components/CardPost/CardPost"
import NavBar from "../components/NavBar/NavBar"
import style from "../style/Blog.module.css"
import Post from "./Post"

export default function Blog() {
    return (
        <div className={style.primaryContainerExt}>
            <NavBar />
            <div className={style.primaryContainer}>
                <div className={style.infosContainerExt}>
                    <div className={style.namesContainer}>
                        <h1> Os jogos do momento</h1>
                        <p>
                            by <Link className={style.textUsername}>@ghl20</Link>
                        </p>
                    </div>
                    <div className={style.postsContainerExt}>
                        <div className={style.postsContainer}>
                            <h2>Recent posts</h2>
                            <div className={style.postsCardContainer}>
                                <CardPost />
                                <CardPost />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
