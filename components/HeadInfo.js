import Head from "next/head";

const Headinfo = ({ title, keyword, contents }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta keyword={keyword} />
				<meta contents={contents} />
			</Head>
		</>
	);
};

Headinfo.defaultProps = {
	title: "My Blog",
	keyword: "Keyword",
	contents: "Contents",
};

export default Headinfo;
