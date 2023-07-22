import Image from "next/image";

const Profile = (props) => {
	return (
		<div className={`avatar ${props.className}`} style={props.style}>
			<Image
				className={`avatar_img ${props.className}`}
				src="./public/assets/images/person1-GfuvYM8LPPQ-unsplash.jpg"
				alt="Profile image"
				width={props.width}
				height={props.height}
			/>
		</div>
	);
};

export default Profile;
