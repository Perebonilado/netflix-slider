import styles from './styles.module.css'

const Card = ({
    url='', 
    title='Lorem title', 
    body='Movie description'
}) => {
    
    return (
        <div className={styles.container}>
            <img src={url} alt="card_image" className={styles.backgroundImage}/>
            <div className={styles.textBox}>
                <h4>{title}</h4>
                <p>{body}</p>
                <i className="fas fa-solid fa-angle-down"></i>
            </div>
        </div>
    )
   }
   
export default Card