import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div>
                <div className="hero min-h-screen bg-base-200 mt-3">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={user?.photoURL} className="min-w-xl rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;