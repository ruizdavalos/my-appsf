import Nav from "./Nav"

const Footer = (props) => {

    // console.log(props)

    return (
        <footer>
            <div>
                {/* {props? <link to="#">hola</link> : null } */}
                <p>copyright &copy - 2022</p>
            </div>
            <div>
                <Nav/>
            </div>
        </footer>
    )
}
export default Footer