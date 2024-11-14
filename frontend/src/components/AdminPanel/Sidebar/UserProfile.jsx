// eslint-disable-next-line react/prop-types
const UserProfile = ({ name, email }) => {
    return (
      <div className="user-profile">
        <img
          src="https://via.placeholder.com/50" // Placeholder image for avatar
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-info">
          <p className="user-name">{name}</p>
          <p className="user-email">{email}</p>
        </div>
      </div>
    );
  };
  
  export default UserProfile;