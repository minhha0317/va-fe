import NextLink from 'next/link';
import { Container, Ratio, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainLayout from '../../components/layouts/MainLayout';
import CommentList from '../../components/Comment/CommentList';
import { getPublicVideoDetail } from '../../redux/actions/videosActions';

export async function getServerSideProps(context) {
	return {
		props: {
			id: context.params.id,
		},
	};
}

const VideoDetails = (props) => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const video = useSelector((state) => state.videos);
	const { currentVideo } = video;

	useEffect(() => {
		dispatch(getPublicVideoDetail(props.id));
	}, [dispatch, props.id]);

	return (
		<MainLayout>
			<Container>
				{currentVideo && (
					<>
						<NextLink href="/">
							<Button variant="primary" className="mb-3">
								Back to Home
							</Button>
						</NextLink>
						<Ratio aspectRatio="16x9">
							<iframe width="100%" src={currentVideo.url}></iframe>
						</Ratio>
						<h1 className="mt-3">{currentVideo.name}</h1>
						<p>{currentVideo.description}</p>
						{userInfo && <CommentList videoId={props.id} />}
					</>
				)}
			</Container>
		</MainLayout>
	);
};

export default VideoDetails;
