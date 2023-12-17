import { useAuth } from "../contexts/AuthContext"
import "../styles/Profile.scss";
import { Link } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";

export default function Profile() {

    const {USER_PRESENT, currentUser, signout, signinwithpopup } = useAuth();

    return (
        <div className="profile">

            <div className="profileBox">
                <button className="back">
                    <Link to={"/events/algo2024"}>
                        <IoIosArrowBack />
                        Algo24
                    </Link>
                </button>

                {
                    (USER_PRESENT()) ? 
                        <div onClick={() => console.log(currentUser)}>
                            <div className="profileImage">
                                <img src={currentUser.photoURL} referrerPolicy="no-referrer" alt="user's profile image" />
                            </div>
                            <div className="profileNameAndEmail">
                                {currentUser.displayName} - {currentUser.email}
                            </div>
                            <button className="logout" onClick={signout}>
                                Sign Out
                            </button>
                        </div>
                        :
                        <div>
                            <span className="notSigned">
                                You are not logged in. Please login to continue.

                                <button onClick={() => signinwithpopup("google")}>Sign In</button>
                            </span>
                        </div>
                }

            </div>

        </div>
    )
}