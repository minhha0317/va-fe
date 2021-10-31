import { Container, Card, Button, Row } from 'react-bootstrap';
import NextLink from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import MainLayout from '../components/layouts/MainLayout';
import styles from '../styles/Home.module.css';
import { getPublicVideos } from '../redux/actions/videosActions';

export default function Home() {
	const dispatch = useDispatch();
	const videos = useSelector((state) => state.videos);
	const { videoList } = videos;

	useEffect(() => {
		dispatch(getPublicVideos());
	}, [dispatch]);

	return (
		<MainLayout>
			<Container>
				<Row>
					<div className={styles.videoList}>
						{videoList &&
							videoList.map((video) => (
								<Card className={styles.videoCard} key={video._id}>
									<Card.Img variant="top" src="/images/avatar-default.jpg" />
									<Card.Body>
										<Card.Title>{video.name}</Card.Title>
										<Card.Text>{video.description}</Card.Text>
										<NextLink href={`/videos/${video._id}`}>
											<Button variant="primary">See now</Button>
										</NextLink>
									</Card.Body>
								</Card>
							))}
					</div>
				</Row>
			</Container>
		</MainLayout>
	);
}
