import Image from 'next/image'
import { APP_URL } from '/Users/37525/Desktop/react-maraphone/next-app/app/constants'
import styles from './AboutMe.module.scss'
import EmailButton from './email-button/EmailButton'
import DescriptionButton from './description-button/DescriptionButton'

const AboutMe = ({ me }) => {
    return (
    <div className={styles.me}>
        <div className={styles['image-wrapper']}>
            <Image
				src={`${APP_URL}${me.avatar}`}
				width={190}
				height={190}
				className={styles.image}
				alt={me.siteName}
				quality={100}
			/>
            <div className={styles.heading}>
				<span>Shivers APP</span>
				<Image
					src={`${APP_URL}/icons/verified.svg`}
					alt=""
					height={16}
					width={16}
			    />
			</div>
            <EmailButton />
            <DescriptionButton description={me.description}/>
        </div>
    </div>
    )
}

export default AboutMe;