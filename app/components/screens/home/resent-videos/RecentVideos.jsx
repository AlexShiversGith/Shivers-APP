import { useQuery } from "react-query";
import VideoItem from "./VideoItem";
import styles from './RecentVideos.module.scss'

const RecentVideos = () => {

	const { data, isLoading } = useQuery(
		'get recent videos',
		() => axios.get('/api/youtube'),
		{
			select: ({ data }) => data
		}
	)

    return 		<div className={styles.wrapper}>
    <div className={styles.heading}>
        New projects <span>👉</span>
    </div>
    {isLoading
				? 'Loading...'
				: data?.length
				? data.map(video => <VideoItem key={video.videoId} item={video} />)
				: 'Do not exist'}
	</div>
}

export default RecentVideos;