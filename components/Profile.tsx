import Image from "next/image";

const Profile = (props) => {
	return (
		<div className="avatar">
			<Image
				className="avatar_img"
				src="/assets/images/person1-GfuvYM8LPPQ-unsplash.jpg"
				alt="Profile image"
				width={props.width}
				height={props.height}
				onClick={props.onClick}
			/>
		</div>
	);
};

export default Profile;
