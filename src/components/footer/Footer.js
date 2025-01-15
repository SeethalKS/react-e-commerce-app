import styles from './Footer.module.css'
const Footer=(props)=>{
    return(<>
    <div className={styles.footer} style={{backgroundColor:props.bgcolor}}>
    <i className="fa-regular fa-copyright"></i>Copywrite
    </div>
    </>)
}
export default Footer;