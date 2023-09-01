import style from "./Style.module.css"
import { Link } from "react-router-dom"

export default function BlogCard({ blogId, blogName }) {
    return (
        <Link to={`/home/blog/${blogId}`} className={style.cardLink}>
            <p>{blogName}</p>
        </Link>
    )
}
