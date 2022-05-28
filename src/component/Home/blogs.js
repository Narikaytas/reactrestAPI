

const Blogs =(props)=>{
    const {blogItems} =props
    const {id,title,imageUrl,avatarUrl,author,topic} =blogItems
    return(
        <>
            <div className="blogSyle mt-2 mb-2 col-12 col-md-6 m-auto">
                <section className="blogTopSec ">
                <img src={imageUrl}/>
                </section>
        
                <section className="blogBottomSec">
                <strong>{title}</strong>  <br></br>      
                <section className="authStyle">
                <img src={avatarUrl}/>
                <h3>{author}</h3>
                </section>
                Topic: &nbsp;<strong>{topic}</strong>
                </section>
            </div>
        </>
    )
}
export default Blogs