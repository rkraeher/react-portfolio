import { Image } from "antd";
import profile from "../../assets/images/profile.jpg";

function ProfilePic() {
    return (
        <div>
            <Image
                src={profile}
                alt="headshot photograph"
                className="pic"
                preview={false}
            />
        </div>
    );
}
export default ProfilePic;