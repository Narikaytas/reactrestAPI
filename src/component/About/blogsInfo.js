

const BlogsInfo =(props)=>{
    const {blogsItem} =props
    const {title,imageUrl,avatarUrl,author,topic} =blogsItem
    return(
        <>
            <div className="blogSyle mt-2 mb-2 col-12 col-md-6 m-auto">
                <section className="blogTopSec">
                <img src={imageUrl} alt='blog_img' />
                </section>
        
                <section className="blogBottomSec">
                <strong>{title}</strong>  <br></br>      
                <section className="authStyle">
                <img src={avatarUrl} alt='avtr-img'/>
                <h3>{author}</h3>
                </section>
                Topic: &nbsp;<strong>{topic}</strong>
                </section>
            </div>
        </>
    )
}
export default BlogsInfo