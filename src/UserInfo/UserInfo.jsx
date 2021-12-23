import './UserInfo.css'

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <img src={props.avatarSrc} alt="avatar" className="avatar"/>
            <div className="AvatarName">{props.name}</div>
            <div>
                {props.userAddress.toString()}
            </div>
            <hr/>
        </div>
    )
}
// ТАк можно указать значение пропсов по умолчанию
UserInfo.defaultProps = {
    avatarSrc: '',
    userAddress: '',
}

export default UserInfo;