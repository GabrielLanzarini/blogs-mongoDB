import BlogCard from "../components/BlogCard/BlogCard"
import CardPost from "../components/CardPost/CardPost"
import NavBar from "../components/NavBar/NavBar"
import style from "../style/Profile.module.css"
import Post from "./Post"

export default function Profile() {
    return (
        <div className={style.primaryContainerExt}>
            <NavBar />
            <div className={style.primaryContainer}>
                <div className={style.infosContainerExt}>
                    <div className={style.namesContainer}>
                        <h1> @ghl20</h1>
                        <p className={style.textUsername}>
                            Gabriel Henrique Antonelli Lanzarini <span>Posting since 2023</span>
                        </p>
                    </div>
                    <div className={style.blogsContainer}>
                        <h2>Blogs</h2>
                        <div className={style.blogsCardsPostsExt}>
                            <div className={style.blogsCardsPosts}>
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                    <div className={style.postsContainerExt}>
                        <div className={style.postsContainer}>
                            <h2>Most recent posts</h2>
                            <div className={style.postsCardContainer}>
                                <CardPost />
                                <CardPost />
                                <CardPost />
                                <CardPost />
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
