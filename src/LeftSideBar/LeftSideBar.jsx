import './LeftSideBar.css'

function LeftSideBar(props) {
    return (
        <div className="LeftSideBar">
            {props.children}
        </div>
    )
}

export default LeftSideBar;