import { useParams, Link } from "react-router-dom";

const NewAccount = (props) => {
    const { userId,name } = useParams();
    return <div className="third">
        <br/>
        Welcome  {name}!
        <br/>
        <br/>
        Please save/bookmark the folowing url as it will be how you will login in the future to your account.
        <br/>
        <br/>
        {<Link to={`/account/${userId}`}>http://localhost:3000/account/{userId}</Link>}
        <br/>
        <br/>
        Click the url above to start the game with your newly created account.
    </div>
}

export default NewAccount