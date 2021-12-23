import './UserPage.css'

function UserPage(props) {
    return (
        <div className="UserPage">
           {props.user.articles.map((article, index) => {
               return <div key = {index}>
                   <h3>{article.title}</h3>
                   <p>{article.text}</p>
               </div>
           })}
        </div>
    )
}

export default UserPage;