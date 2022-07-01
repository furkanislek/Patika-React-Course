import PropTypes from "prop-types";

function User({name,surname,age,job,isLoggedIn,friends, address}){

    if (!isLoggedIn) {
        return <h1>Giriş Yapmadınız!!</h1>
    }


    return(

        <>


        <h1>
            {`${name} ${surname} (${age}) Yaşında Bir ${job}`}
        </h1>

        {address.title} {address.zip}

        <br/>
        <br/>

        {
            friends.map((friend) => {
             return <div key={friend.id}> {friend.id} - {friend.name}</div>
            })
        }
        
        </>

    );

}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    job: PropTypes.string,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address : PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    }),
};


User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false,
}


export default User;