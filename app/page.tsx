import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Main Heading
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">Slug</span>
			</h1>
			<p className="desc text-center">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quos
				repellat nesciunt sunt, est corporis optio temporibus vitae eum
				obcaecati a fugit dolorem placeat illum laborum at, quisquam numquam.
				Magni!
			</p>

			<Feed />
		</section>
	);
};

export default Home;
