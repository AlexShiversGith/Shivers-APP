import MetaTitle from '../../ui/MetaTitle';
import AboutMe from './About-me/aboutMe';
import Grid from './grid/Grid';
import RecentVideos from './resent-videos/RecentVideos';
import styles from './Home.module.scss';
import Circles from '../../ui/circles/Circles';

const Home = ({ links, me }) => {
    return (
    <section className={styles.section}>
        <MetaTitle title='Shivers API | Dreams don`t fall'/>
        <div className={styles.container}>
            <AboutMe me={me} />
            <RecentVideos />
            <Grid links={links} />
        </div>
        <Circles />
    </section>
    )
};

export default Home;