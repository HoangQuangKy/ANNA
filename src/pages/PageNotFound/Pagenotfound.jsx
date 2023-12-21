import Layout from "../../components/Layout"
import { Link } from "react-router-dom"
const Pagenotfound = () => {
    return (
        <Layout>
            <div className=" flex min-h-[65vh] flex-col items-center justify-center">
                <h1 className=" text-9xl font-bold">404</h1>
                <h2 className=" text-2xl">Oops ! Page Not Found</h2>
                <Link to='/' className=" text-black border border-solid border-black no-underline p-2 mt-3">
                    Go back
                </Link>
            </div>
        </Layout>
    )
}

export default Pagenotfound
