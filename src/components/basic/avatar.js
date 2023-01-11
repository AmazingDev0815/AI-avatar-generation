const Avatar = ({image, size, state, username}) => {
  return (
  <div id="avatar">
    {!!state ? <img alt="avatar" src={image} width={size} height={size} className="rounded-full" /> : 
    <div className="bg-avatar flex justify-center items-center">{username}</div>
    }
  </div>
  )
}

export default Avatar;
